const mongoose = require('mongoose');


const goldPriceSchema = new mongoose.Schema({
  date: Date,
  prices: {
    '22k': {
      '1g': Number,
      '8g': Number,
      '10g': Number,
    },
    '24k': {
      '1g': Number,
      '8g': Number,
      '10g': Number,
    },
  },
});

const GoldPrice = mongoose.model('GoldPrice', goldPriceSchema);

module.exports = GoldPrice;
