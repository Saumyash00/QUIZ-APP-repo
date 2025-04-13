const express = require('express');
const Quiz = require('../models/Quiz');
const router = express.Router();

// Create Quiz
router.post('/', async (req, res) => {
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
router.post('/join', async (req, res) => {
    try {
        const { code } = req.body;
        const quiz = await Quiz.findOne({ code });
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

        res.json({ quiz });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Submit Quiz
router.post('/:id/submit', async (req, res) => {
    try {
        const { userId, answers } = req.body;
        const quiz = await Quiz.findById(req.params.id);
        
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === quiz.questions[index].correctAnswer) {
                score += quiz.questions[index].points;
            }
        });

        quiz.participants.push({ user: userId, score, completedAt: new Date() });
        await quiz.save();

        res.json({ score });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Quiz Results
router.get('/:id/results', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id).populate('participants.user', 'name');
        res.json({ participants: quiz.participants });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
