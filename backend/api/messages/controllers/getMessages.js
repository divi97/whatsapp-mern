const whatsappModel = require('../../../models/dbMessages');

//Get Messges for Syncing
exports.getMessage = (req, res) => {
    whatsappModel.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
}