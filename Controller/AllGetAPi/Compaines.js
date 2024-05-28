const pool = require('../../DB/Database');

async function complaints(req, res) {
    try {
        const { id } = req.params;
        pool.query('SELECT * FROM complaines where created_by = ? And status = ?',[id,'pending'], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.status(200).json({ status: 200, result });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = complaints;
