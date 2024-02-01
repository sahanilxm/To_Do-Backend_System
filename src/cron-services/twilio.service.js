const twilio = require('twilio');

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_KEY, TWILIO_PHONE } = require('../config/server.config.js');

class TwilioService{
    createCall = async (phone_number) => {

        try {
            const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_KEY);
            const call = await client.calls
                .create({
                    twiml: '<Response><Say voice="man">Hello! This is a reminder for your task. Enjoy!</Say><Play>http://demo.twilio.com/docs/classic.mp3</Play></Response>',
                    to: '91' + phone_number,
                    from: TWILIO_PHONE
                }
            );
            console.log(`Voice call SID: ${call.sid}`);
        } catch (error) {
            throw error;
        }
    }
}

const twilioService = new TwilioService();

module.exports = twilioService;