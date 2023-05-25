const DbConfig = require('../db')
class Formation {
    formation = async (domaineId) => {
        const req = 'SELECT * FROM formation WHERE DOMAINEID = ?';
        const param = [domaineId];
        const result = await DbConfig.query(req, param);
        return result;
    }

}
module.exports = new Formation();