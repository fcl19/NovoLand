module.exports={
  changeCheckbox: async function(req, res) {
    try {
      const userID = req.session.userId;
      const supplyID = req.param('supplyID');
      const checked = req.param('checked') === "true";
      if (!userID) { // Check if user is logged in
        return res.send({
          error: 'User not logged in'
        });
      }
      console.log(checked)
      if (!supplyID || typeof checked !== 'boolean') { // Check if supplyID and checked are provided
        return res.send({
          error: 'Missing required params'
        });
      }
      let supplyIDs = await Supplies.find({ // Check if supply exists
        id: supplyID
      });
      if (!supplyIDs || supplyIDs.length === 0) { // Return error if supply doesn't exist
        return res.send({
          error: 'Supply not found'
        });
      }
      let existingUserSupply = await UserSupplies.find({ // Check if user-supply exists
        userID: userID,
        suppliesID: supplyID
      });
      if (!existingUserSupply || existingUserSupply.length === 0) {
        await UserSupplies.create({ // Create user-supply if it doesn't exist
          userID: userID,
          suppliesID: supplyID,
          checked: checked
        });
      } else {
        await UserSupplies.update({ // Update user-supply if it exists
          userID: userID,
          suppliesID: supplyID
        }, {
          checked: checked
        });
      }
      return res.send({ // Return success
        success: true
      });
    } catch (err) {
      return res.send({
        error: 'There was an issue changing the checkbox.'
      });
    }
  },
  viewSupplyPage: async function(req, res) {
    try {
      const userID = req.session.userId;
      if (!userID) { // Check if user is logged in
        return res.view('pages/login', {
          error: 'User not logged in'
        });
      }
      let supplies = await UserSupplies.find({ // Find all supplies
        userID: userID
      }).populate('suppliesID');
      const groupIDs = await SupplyGroups.find(); // Find all supply groups
      const allSupplyOptions = await Supplies.find(); // Find all supplies
      const userSupplyArray = [];
      for (let i = 0; i < groupIDs.length; i++) {
        userSupplyArray.push({group_id:  groupIDs[i].id, group_name: groupIDs[i].group_name, group_code: groupIDs[i].group_code, supplies: []});
        const groupSupplies = allSupplyOptions.filter(supply => supply.group_id === groupIDs[i].id);
        for (let j = 0; j < groupSupplies.length; j++) {
          const supply = groupSupplies[j];
          const userSupply = supplies.find(userSupply => userSupply.suppliesID.id === supply.id);
          userSupplyArray[i].supplies.push({id: supply.id, name: supply.name, code: supply.code, checked: userSupply ? userSupply.checked : false});
        }
      }
      return res.view('pages/supplies', {
        supplies: JSON.stringify(userSupplyArray)
      });
    } catch (err) {
      return res.view('pages/supplies', {
        supplies: []
      });
    }
  }
};
