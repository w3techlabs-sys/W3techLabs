import ContactMessage from "../models/ContactMessage.js";

export const createContactMessage = async (req, res) => {
  console.log("Received contact message:", req.body);
  try {

    const {
      name,
      email,
      subject,
      phone,
      message,
    } = req.body;

    /* VALIDATION */
    if (
      !name ||
      !email ||
      !subject ||
      !phone ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    /* SAVE TO DATABASE */
    const contact = await ContactMessage.create({
      name,
      email,
      subject,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};