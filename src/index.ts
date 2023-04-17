import * as dotenv from "dotenv";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import router from "./router/router";

dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URL || "";

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		allowedHeaders: ["Content-Type"],
	})
);

app.use(express.json());

app.use("/api", router);

const start = async () => {
	try {
		mongoose.set("strictQuery", false);
		mongoose.connect(URL);
		app.listen(PORT, () => {
			console.log("server started on PORT =", PORT);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
