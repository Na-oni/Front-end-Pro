const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const cities = require('./cities.json');
const hotels = require('./hotels.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/cities', (req, res) => {
    res.json(cities);
});

app.post('/hotels_by_ids', (req, res) => {
    const { array_id } = req.body;
    if (!array_id || !Array.isArray(array_id)) { return res.status(400).json({ error: 'Invalid input data' }); }

    const array = array_id.map(id => {
        const hotel = hotels.find(hotel => hotel.id === id.toString());  // Ищем отель по ID
        if (!hotel) {
            console.error(`Hotel with ID ${id} not found`);
            return null;
        }
        return hotel;
    }).filter(hotel => hotel !== null);

    res.json(array);
});


app.get('/weekend_offerings', (req, res) => {
    const array_id = Array.from({ length: 4 }, () => Math.floor(Math.random() * hotels.length));
    res.json(array_id.map(id => hotels[id]));
});

app.post('/hotels', (req, res) => {
    const { request } = req.body;
    const array_hotels = hotels.filter((hotel) => hotel.location.city === request.city);
    res.json(array_hotels);
});

app.post('/page', (req, res) => {
    const { id } = req.body;

    const hotel = hotels.find(hotel => hotel.id === id.toString());
    if (!hotel) {
        console.error(`Hotel with ID ${id} not found`);
        res.json(null);
    }

    res.json(hotel);
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});