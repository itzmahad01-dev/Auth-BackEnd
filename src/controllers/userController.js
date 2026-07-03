import { User } from "../model/user.js";

export const getallusers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json({
            status: true,
            message: "All Users Fetched Successfully",
            data: users
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
  