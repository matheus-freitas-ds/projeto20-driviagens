import { db } from "../database/database.js"

export async function savePassenger(req, res) {
    const { firstName, lastName } = req.body

    try {
        await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName])
        
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}