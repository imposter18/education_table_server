import { Router } from "express";
import educationController from "../controllers/education-controller";
import workerInfoController from "../controllers/workerInfo-controller";

const router = Router();

router.get("/getEducation", educationController.getAllRow);
router.post("/addEducationRow", educationController.addRow);
router.post("/updateRow", educationController.updateRow);
router.post("/deleteEducationRow", educationController.deleteRow);
//
router.get("/getWorkes", workerInfoController.getAllRow);
router.post("/addWorker", workerInfoController.addRow);
router.post("/updateWorker", workerInfoController.updateRow);
router.post("/deleteWorker", workerInfoController.deleteRow);

export default router;
