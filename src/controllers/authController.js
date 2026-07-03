import { User } from "../model/user.js";

const signup = async (req , res) => {

    const { username ,email, password } = req.body;

    console.log( req.body);

    if (!username || !email || !password) {
        return res.status(400).json({
            status: false,
            message: "Please fill all credentials"
        });
    }

    try {
        const user = await User.create({
            username,
            email,
            password
        });

        return res.status(201).json({
            status: true,
            message: "User Signup Successfully",
            user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
};
export const login = async (req , res) => {

    const { email, password } = req.body;


    if ( !email || !password) {
        return res.status(400).json({
            status: false,
            message: "Please fill all credentials"
        });
    }
        const MyUser = await User.findOne({email : email})
          
    if(MyUser.password === password){
         res.status(200).json({
            status:true,
            Message:"User Login Succesfully",
            MyUser
         })
    }else{
          res.status(401).json({
            status:false,
            Message:"Invalid Credentials"
         })
    }
}
    
export default signup;