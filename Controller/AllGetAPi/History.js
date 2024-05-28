const pool = require('../../DB/Database');

async function completedComplaints(req, res) {
    try {
        const { id } = req.params;
        const query = `
            SELECT * FROM complaines 
            WHERE created_by = ? AND 
            status != ?
        `;
        const queryParams = [id, 'pending'];
        pool.query(query, queryParams, (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.status(200).json({ status: 200, result });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = completedComplaints;
