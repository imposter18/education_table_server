import mongoose, { Schema, model } from "mongoose";

export interface IWorker {
	_id: Schema.Types.ObjectId;
	education: Schema.Types.ObjectId;
	value: string;
	name: string;
}

const workerSchema = new Schema<IWorker>({
	education: {
		type: Schema.Types.ObjectId,
		ref: "educationModel",
		default: null,
	},
	value: { type: String, default: "" },
	name: { type: String, default: "" },
});

export default model("workerModel", workerSchema);
