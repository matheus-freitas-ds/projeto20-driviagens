import { db } from "../database/database.js"

export async function saveTravels(req, res) {
    const { passengerId, flightId } = req.body

    try {
        const findPassenger = await db.query(`SELECT * FROM passengers WHERE id = $1;`, [passengerId])
        if (findPassenger.rowCount === 0) return res.sendStatus(404)

        const findFlight = await db.query(`SELECT * FROM flights WHERE id = $1;`, [flightId])
        if (findFlight.rowCount === 0) return res.sendStatus(404)

        await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId])
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}