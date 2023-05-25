const modelDomaine = require('../Models/model.domaine');


class getDomaine {

    recupDomaine = async (req, res) => {
       const result =  await modelDomaine.domaine();
       console.log(result)
       res.send(result)
    }
}
module.exports = new getDomaine();

