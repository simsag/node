const { write } = require('../model');

const getList = anync (req, res) => {
    const list = await write.findAll();

    return res.status(200).json({
        "data": list
    })
}

module.exports = {
    getList,
}