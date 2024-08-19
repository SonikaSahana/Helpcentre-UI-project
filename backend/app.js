const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./models');
const Card = require('./models/card');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const cardRoutes = require('./routes/card');
app.use('/cards', cardRoutes);

app.get('/ping', (req, res) => {
    res.json({ message: 'Server is running!' });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  return sequelize.sync();
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));

