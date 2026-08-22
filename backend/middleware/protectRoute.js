import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({
				error: "Unauthorized - No Token Provided",
			});
		}

		const token = authHeader.split(" ")[1];

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({
				error: "Unauthorized - Invalid Token",
			});
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({
				error: "User not found",
			});
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware:", error.message);

		return res.status(401).json({
			error: "Unauthorized - Invalid Token",
		});
	}
};

export default protectRoute;