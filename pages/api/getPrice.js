

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

    const { pid } = req.query;

    if (!pid || pid.length) {
        res.status(404);
    }

    try {
        const price = await stripe.prices.retrieve(pid);

        res.json(price);

    } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
    }


}