
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import adminModel from "../models/adminModel.js"; // adjust path if needed

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.DB_URL); // make sure .env has DB_URL

    const hashedPassword = await bcrypt.hash("123456", 12);

    const admin = new adminModel({
      name: "Abhishek Kumar",
      email: "abc@gmail.com",
      password: hashedPassword,
      role: "admin",
      image: "default.png"
    });

    await admin.save();
    console.log("Admin inserted successfully");
    process.exit();
  } catch (err) {
    console.error("Error seeding admin:", err.message);
    process.exit(1);
  }
};

seedAdmin();
