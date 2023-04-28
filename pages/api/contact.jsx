async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Not valid data" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    res.status(201).json({ message: "Successfully stored message" });
  }
}
