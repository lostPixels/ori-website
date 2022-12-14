const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const body = req.body
        const product_id = body.product_id;

        if (!product_id) {
            res.status(404);
        }

        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({

                billing_address_collection: 'auto',
                shipping_address_collection: {
                    allowed_countries: ['US', 'CA'],
                },
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: product_id,
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
                automatic_tax: { enabled: true },
            });
            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}