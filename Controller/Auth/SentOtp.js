const twilio = require('twilio');
const pool = require('../../DB/Database');
const accountSid = 'AC9001be137fa51594c22d6dc60216e0b5';
const authToken = '7d58b56aefba6a6b49ebbdf2d3557833';
const client = new twilio(accountSid, authToken);

async function sendSms(req, res) {
  try {
    const { code, number } = req.body;
    const otp = Math.floor(10000 + Math.random() * 90000);

    if (!number) {
      return res.status(400).json({ status: 400, message: 'Please Enter The Number' });
    }

    pool.query('INSERT INTO users (phone_no, otp) VALUES (?, ?)', [Number(number), otp], async (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const message = await client.messages.create({
        body: `Your Verification Code for Registration is ${otp}`,
        from: '+14145199958',
        to: `${code}${number}`,
      });

      return res.status(200).json({ status: 200, message: 'OTP sent successfully', otp }); // Remove `otp` in production
    });

  } catch (error) {
    console.error(`Error sending SMS: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = sendSms;
