const mongoose = require('mongoose');


const bankBranchSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number],
  },
  brand: String,
  facilities: [String],
});

const BankBranch = mongoose.model('BankBranch', bankBranchSchema);

module.exports = BankBranch;