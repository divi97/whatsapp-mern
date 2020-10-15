const whatsappModel = require('../../../models/dbMessages');

//Creating new message in DB
exports.createMessage = async(req, res) => {

    try {

        const dbMessage = req.body

        whatsappModel.create(dbMessage, (err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(`New message created: \n ${data}`)
            }
        })
    } catch (err) {
        console.log(err.message, 400)
    }

}