const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const body = req.body;

        const APIKey = process.env.ENDPOINT_API_KEY;

        const endpoint = process.env.PRODUCTION ? 'https://clownfish-app-f4hhn.ondigitalocean.app/order-admin/create' : 'http://localhost:1337/order-admin/create';

        const postBody = {
            APIKey,
            user_email: body.user_email,
            mint_id: body.mint_id,
            eth_address: body.eth_address,
            // status: body.status,
            // notes: body.notes,
            // address: body.address,
            product: body.product,
            uuid: uuidv4(),
        };
        try {
            const response = await fetch(endpoint, {
                method: 'post',
                body: JSON.stringify(postBody),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();

            res.json(data);
        }
        catch (e) {
            res.status(err.statusCode || 500).json(err.message);
        }
    }
}
