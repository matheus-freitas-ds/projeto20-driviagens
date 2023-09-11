import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { flightsSchema } from "../schemas/flights.schema.js"
import { saveFlight } from "../controllers/flights.controller.js"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightsSchema), saveFlight)

export default flightsRouter