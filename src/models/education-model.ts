import mongoose, { Schema, model } from "mongoose";

export interface IEducation {
	_id: Schema.Types.ObjectId;
	value: string;
}

const educationSchema = new Schema<IEducation>({
	value: { type: String },
});

export default model("educationModel", educationSchema);
