import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = async (data) => {
    const token = await jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
    return token

}



export default createToken;