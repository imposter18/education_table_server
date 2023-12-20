import dotenv from 'dotenv';
import cors from "cors";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URL || "";

const index = express();

index.use(
	cors({
		origin: process.env.CLIENT_URL,
		allowedHeaders: ["Content-Type"],
	})
);

index.use(express.json());


index.get('/', (req, res) => {
	res.send(`Hello, World!`);
});

const start = async () => {
	try {
		// mongoose.set("strictQuery", false);
		// mongoose.connect(URL);
		index.listen(PORT, () => {
			console.log("server started on PORT =", PORT);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
