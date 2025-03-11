// /c:/Users/Tom/Desktop/maria-courses-next-js/app/API-endpoint.js

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ message: 'Hello, this is a GET request!' });
    } else if (req.method === 'POST') {
        // Handle POST request
        const data = req.body;
        res.status(200).json({ message: 'Hello, this is a POST request!', data });
    } else {
        // Handle other HTTP methods
        res.status(405).json({ message: 'Method not allowed' });
    }
}       // This is the API endpoint that will be used to handle the HTTP requests.
