import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.id);
        
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        
        req.user = user;
        next();
        
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};