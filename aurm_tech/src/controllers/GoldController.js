const GoldModel = require ('../models/GoldPriceModel');
const moment= require('moment');

const CreateGoldPrice = async(req,res) => {
    try {
        const data = req.body
        const CreateGold = await GoldModel.create(data)
        return res.status(200).json(CreateGold)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}


const GetGoldPrices = async (req, res) => {
    
    try {
      const dayOfWeek = req.params.dayOfWeek.toLowerCase();
      const today = moment().startOf('day');
      const selectedDay = today.clone().day(dayOfWeek);
  
      const todayPrices = await GoldModel.findOne({ date: today });
      const selectedDayPrices = await GoldModel.findOne({ date: selectedDay });
  
      if (!todayPrices || !selectedDayPrices) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      const averageRates = {};
  
      for (const format of ['22k', '24k']) {
        averageRates[format] = {};
  
        for (const weight of ['1g', '8g', '10g']) {
          const todayPrice = todayPrices.prices[format][weight];
          const selectedDayPrice = selectedDayPrices.prices[format][weight];
  
          averageRates[format][weight] = {
            today: todayPrice,
            selectedDay: selectedDayPrice,
            change: todayPrice - selectedDayPrice,
          };
        }
      }
  
      return res.json({selectedDay: selectedDay.format('dddd'),averageRates});
    }
    catch (error) {
      res.status(500).json( error.message );
    }

}

module.exports={CreateGoldPrice,GetGoldPrices}