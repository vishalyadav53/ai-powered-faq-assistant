const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
/// Purani lines ko hata kar inhein paste karo:
const connectDB = require('D:/django a3/ai-faq-backend/config/db.js');
const chatRoutes = require('D:/django a3/ai-faq-backend/config/models/routes/chatRoutes.js');
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Main Route
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));