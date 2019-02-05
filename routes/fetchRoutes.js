const fetchController = require('../controllers/fetch');

module.exports = (app) => {
    app.get('/',(req,res)=>{
        fetchController.fetchValue((value)=>{
            res.send(value);
        })
    })
};
