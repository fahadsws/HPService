const pool = require('../../DB/Database');

async function submitOtp(req, res) {
  const { otp, number } = req.body;

  if (!otp) {
    return res.status(400).json({ status: 400, message: 'Please Enter The OTP' });
  }

  pool.query('SELECT * FROM users WHERE phone_no = ? and otp = ?', [number, otp], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length > 0) {
      return res.status(200).json({ status: 200, message: 'Logged In Successfully', result });
    } else {
      return res.status(400).json({ status: 400, message: 'Invalid OTP or Phone Number' });
    }
  });
}

module.exports = submitOtp;

