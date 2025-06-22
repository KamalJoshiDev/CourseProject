const mongoose = require('mongoose');

const pendingResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['Notes', 'Videos', 'Quizzes', 'Assignments', 'Books', 'Articles']
  },
  link: { type: String, required: true },
  submittedBy: { type: String, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PendingResource', pendingResourceSchema);