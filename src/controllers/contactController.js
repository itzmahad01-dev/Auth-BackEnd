import { Contact } from "../model/contact.js";

export const contact = async (req , res) => {
    const {name , email , message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            status: false,
            message: "Please fill all credentials"
        });
    }try {
        const contact = await Contact.create({
            name,
            email,
            message
        });

        return res.status(201).json({
            status: true,
            message: "Your Message Sent Successfully",
            contact
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    } 

}
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find();

    return res.status(200).json({
      status: true,
      totalMessages: messages.length,
      messages,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};