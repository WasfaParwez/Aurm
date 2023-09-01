const BankModel = require('../models/BankModel');


// Create Bank Branches
const CreateBankBranch=async(req,res) => {
    try {
    
      const data= req.body
      const Createbranch= await BankModel.create(data);
      return res.status(200).json(Createbranch);

    } 
    catch (error) {
        return res.status(500).json(error.message);
    }
  }

  
  
  // Retrieve Bank Branches
  const GetBankBranchesWithRadius=async(req,res) => {

    const { coordinates, radius } = req.query;
    try {
      const branches = await BankBranch.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(coordinates.split(',')[0]), parseFloat(coordinates.split(',')[1])], // Parse coordinates correctly
            },
            $maxDistance: parseFloat(radius), // Parse radius correctly
          },
        },
      });
      return res.status(201).json(branches); }

    catch (error) {
        return res.status(500).json(error.message);
    }
}
  
module.exports = {CreateBankBranch,GetBankBranchesWithRadius};