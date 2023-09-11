import { db } from "../database/database.js"

export async function saveCity(req, res) {
    const { name } = req.body

    try {
        const city = await db.query(`SELECT * FROM cities WHERE name = $1;`, [name])
        if (city.rowCount !== 0) return res.sendStatus(409)

        await db.query(`INSERT INTO cities (name) VALUES ($1);`, [name])
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}