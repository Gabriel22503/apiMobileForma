const modelSession = require('../Models/model.session');

class getSession {
    recupSession = async (req, res) => {
        const formationId = req.params.formationId;
        console.log(formationId);
        const result =  await modelSession.session(formationId);
        console.log(result)
        res.send(result)
     }
}
module.exports = new getSession();