import educationModel from "../models/education-model";
import workerModel from "../models/worker-model";
import { Request, Response } from "express";

class workerInfoController {
	async getAllRow(req: Request, res: Response) {
		try {
			const rows = await workerModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
	async addRow(req: Request, res: Response) {
		try {
			const row = new workerModel({});
			await row.save();
			const rows = await workerModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
	async updateRow(req: Request, res: Response) {
		try {
			const _id = req.body._id;
			const educationId = req.body.educationId;
			const name = req.body.name;
			const row = await workerModel.findById(_id);
			if (!row) {
				throw new Error("Ошибка1");
			}
			const education = await educationModel.findById(educationId);
			if (!education) {
				throw new Error("Ошибка2");
			}
			console.log(row);
			row.education = education._id;
			row.value = education.value;
			row.name = name;
			await row.save();
			const rows = await workerModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
	async deleteRow(req: Request, res: Response) {
		try {
			const id = req.body._id;
			const line = await workerModel.findById(id);
			if (!line) {
				throw new Error("Ошибка");
			}
			await line.delete();
			const rows = await workerModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
}

export default new workerInfoController();
