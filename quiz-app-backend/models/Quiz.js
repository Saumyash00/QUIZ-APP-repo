const mongoose = require('mongoose');

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

module.exports = mongoose.model('Quiz', quizSchema);
