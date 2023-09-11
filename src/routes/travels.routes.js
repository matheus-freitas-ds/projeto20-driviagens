import { Router } from "express"
import { saveTravels } from "../controllers/travels.controller.js"

const travelsRouter = Router()

travelsRouter.post("/travels", saveTravels)

export default travelsRouter