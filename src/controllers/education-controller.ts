import educationModel, { IEducation } from "../models/education-model";
import { Request, Response } from "express";
import workerModel from "../models/worker-model";

class educationController {
	async getAllRow(req: Request, res: Response) {
		try {
			const rows = await educationModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
	async addRow(req: Request, res: Response) {
		try {
			const line = new educationModel({
				value: "",
			});
			await line.save();
			const rows = await educationModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
	async updateRow(req: Request, res: Response) {
		try {
			const _id = req.body._id;
			const value: string = req.body.value;
			const line = await educationModel.findById(_id);
			if (!line) {
				return res.status(500);
			}
			line.value = value;
			await line.save();
			const rows = await educationModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
	async deleteRow(req: Request, res: Response) {
		try {
			const id = req.body._id;
			const line = await educationModel.findById(id);
			if (!line) {
				throw new Error("Нет данных");
			}
			const dependens = await workerModel.findOne({ education: line._id });
			if (dependens) {
				throw new Error("Этот элемент используется");
			}
			await line.delete();
			const rows = await educationModel.find();
			return res.json(rows);
		} catch (e: any) {
			console.log(e);
			return res.status(500).json({ message: e.message, name: e.name });
		}
	}
}

export default new educationController();
