import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { passengersSchema } from "../schemas/passengersSchema.js"
import { savePassenger } from "../controllers/passengers.controller.js"

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengersSchema), savePassenger)

export default passengersRouter