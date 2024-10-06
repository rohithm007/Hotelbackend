const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock hotel data with food type and bitterness
const hotels = [
  { name: 'Spicy Palace', city:'Chennai', kindOfFood: 'North Indian', budget: '500 to 1000', rating: 1, foodType: 'Main Meals' },
  { name: 'Sweet Retreat', city:'Coimbatore', kindOfFood: 'South Indian', budget: '100 to 500', rating: 3, foodType: 'Chat items' },
  { name: 'Balanced Inn', city:'Chennai', kindOfFood: 'North Indian', budget: '1000 to 2000', rating: 2, foodType: 'Desserts' },
  { name: 'Bitter End', city:'Madurai', kindOfFood: 'South Indian', budget: '100 to 500', rating: 5, foodType: 'Tiffen' },
  { name: 'Tangy Trails', city: 'Coimbatore', kindOfFood: 'Chinese', budget: '1000 to 2000', rating: 4, foodType: 'Main Meals' },
  { name: 'Flavours of Chennai', city: 'Chennai', kindOfFood: 'South Indian', budget: '500 to 1000', rating: 3, foodType: 'Main Meals' },
  { name: 'Coimbatore Spice Hub', city: 'Coimbatore', kindOfFood: 'North Indian', budget: '100 to 500', rating: 4, foodType: 'Tiffen' },
  { name: 'Madurai Sweet House', city: 'Madurai', kindOfFood: 'South Indian', budget: '500 to 1000', rating: 5, foodType: 'Desserts' },
  { name: 'Pepper Delight', city: 'Chennai', kindOfFood: 'Continental', budget: '1000 to 2000', rating: 4, foodType: 'Main Meals' },
  { name: 'Sweet and Spicy', city: 'Coimbatore', kindOfFood: 'Chinese', budget: '500 to 1000', rating: 2, foodType: 'Chat items' },
  { name: 'Bitter Sweet Bites', city: 'Madurai', kindOfFood: 'South Indian', budget: '100 to 500', rating: 1, foodType: 'Tiffen' },
  { name: 'Spice Town', city: 'Chennai', kindOfFood: 'North Indian', budget: '500 to 1000', rating: 5, foodType: 'Main Meals' },
  { name: 'Sweet Symphony', city: 'Coimbatore', kindOfFood: 'South Indian', budget: '500 to 1000', rating: 3, foodType: 'Desserts' },
  { name: 'Bitter Bliss', city: 'Madurai', kindOfFood: 'Continental', budget: '1000 to 2000', rating: 2, foodType: 'Main Meals' },
  { name: 'Tangy Tides', city: 'Chennai', kindOfFood: 'North Indian', budget: '100 to 500', rating: 4, foodType: 'Chat items' },
  { name: 'Sweet Sensation', city: 'Coimbatore', kindOfFood: 'Chinese', budget: '1000 to 2000', rating: 5, foodType: 'Desserts' },
  { name: 'Spicy Twist', city: 'Madurai', kindOfFood: 'South Indian', budget: '500 to 1000', rating: 3, foodType: 'Tiffen' },
  { name: 'Balanced Spices', city: 'Chennai', kindOfFood: 'North Indian', budget: '1000 to 2000', rating: 4, foodType: 'Main Meals' },
  { name: 'Sweet Haven', city: 'Coimbatore', kindOfFood: 'South Indian', budget: '500 to 1000', rating: 5, foodType: 'Desserts' },
  { name: 'Spice Garden', city: 'Madurai', kindOfFood: 'Chinese', budget: '100 to 500', rating: 2, foodType: 'Main Meals' }
];

// Endpoint to match hotels
app.post('/api/hotels', (req, res) => {
  const { city, kindofFood, budget, rating, foodType } = req.body;

  // Match hotels based on preferences
  const matchedHotels = hotels.filter((hotel) => {
    const matchesCity = city === 'Any' || hotel.city === city;
    const matcheskindofFood = kindofFood === 'Any' || hotel.kindOfFood === kindofFood;
    const matchesBudget = budget === 'Any' || hotel.budget === budget;
    const matchesRating = Math.abs(hotel.rating - rating) <= 1;
    const matchesFoodType = foodType === 'Any' || hotel.foodType === foodType;

    return matchesCity && matcheskindofFood && matchesBudget && matchesRating && matchesFoodType;
  });

  res.json(matchedHotels);
  console.log(matchedHotels)
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
