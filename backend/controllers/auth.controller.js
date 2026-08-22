import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const profilePic = `https://ui-avatars.com/api/?name=${encodeURIComponent(
			fullName
		)}&background=random`;

		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic,
		});

		const token = generateToken(newUser._id);

		await newUser.save();

		res.status(201).json({
			token,
			_id: newUser._id,
			fullName: newUser.fullName,
			username: newUser.username,
			profilePic: newUser.profilePic,
		});
	} catch (error) {
		console.log("Error in signup controller:", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });

		const isPasswordCorrect = await bcrypt.compare(
			password,
			user?.password || ""
		);

		if (!user || !isPasswordCorrect) {
			return res
				.status(400)
				.json({ error: "Invalid username or password" });
		}

		const token = generateToken(user._id);

		res.status(200).json({
			token,
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller:", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller:", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};