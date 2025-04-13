const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quizTBPP', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    role: { type: String, enum: ['student', 'educator'], default: 'student' }
});

// Quiz Schema
const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    questions: [{
        question: String,
        options: [String],
        correctAnswer: Number,
        points: Number
    }],
    participants: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        score: Number,
        completedAt: Date
    }]
});

const User = mongoose.model('User', userSchema);
const Quiz = mongoose.model('Quiz', quizSchema);

// Routes

// User Registration
app.post('/api/register', async (req, res) => {
    try {
        const { email, password, name, role } = req.body;
        const user = new User({ email, password, name, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Create Quiz
app.post('/api/quizzes', async (req, res) => {
    try {
        const { title, questions, creator } = req.body;
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const quiz = new Quiz({ title, code, questions, creator });
        await quiz.save();
        res.status(201).json({ quiz });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Join Quiz
app.post('/api/quizzes/join', async (req, res) => {
    try {
        const { code, userId } = req.body;
        const quiz = await Quiz.findOne({ code });
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.json({ quiz });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Submit Quiz
app.post('/api/quizzes/:id/submit', async (req, res) => {
    try {
        const { userId, answers } = req.body;
        const quiz = await Quiz.findById(req.params.id);
        
        // Calculate score
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === quiz.questions[index].correctAnswer) {
                score += quiz.questions[index].points;
            }
        });

        // Add participant score
        quiz.participants.push({
            user: userId,
            score: score,
            completedAt: new Date()
        });
        
        await quiz.save();
        res.json({ score });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Quiz Results
app.get('/api/quizzes/:id/results', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id)
            .populate('participants.user', 'name');
        res.json({ participants: quiz.participants });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});