import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please fill all credentials",
    });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: true,
      message: "User Signup Successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please fill all credentials",
    });
  }

  try {
    const MyUser = await User.findOne({ email });

    if (!MyUser) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, MyUser.password);

    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        id: MyUser._id,
        email: MyUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      status: true,
      message: "User Login Successfully",
      token,
      user: MyUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};