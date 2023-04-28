import { MongoClient } from "mongodb";

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
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    let client;
    try {
      client = await MongoClient.connect(
""
      );
    } catch (error) {
      res.status(422).json({ message: "Cannot connect to database" });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const db = client.db();

    try {
      const result = await db.collection("contact").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(201).json({ message: "Sended contact failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message", messageObj: newMessage });
  }
}

export default handler;
