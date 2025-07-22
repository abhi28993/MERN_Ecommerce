import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnect from "./utiles/db.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// ✅ Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// ✅ API routes
app.use('/api', authRoutes);

// ✅ Default test route
app.get("/", (req, res) => {
    res.send("Hello World");
});
dbConnect();

// ✅ Port fallback if .env is missing
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
