import JoiBase from "joi"
import JoiDate from "@joi/date"

const Joi = JoiBase.extend(JoiDate)

export const flightsSchema = Joi.object({
    date: Joi.date().format(['DD-MM-YYYY']).required().greater(() => new Date())
})