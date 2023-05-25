const modelFormation = require('../Models/model.formation');

class getFormation {
    recupFormation = async (req, res) => {
        const domaineId = req.params.domaineId;
        console.log(domaineId);
        const result =  await modelFormation.formation(domaineId);
        console.log(result)
        res.send(result)
     }
}
module.exports = new getFormation();