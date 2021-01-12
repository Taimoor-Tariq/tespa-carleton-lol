const router = require('express').Router(),
    db = require('./database'),
    sass = require('sass'),
    pug = require('pug')

router.get('/', async (req, res) => {
    res.send(pug.renderFile(`${__dirname}/views/home.pug`, {
        style: sass.renderSync({file: `${__dirname}/scss/home.scss`}).css.toString(),
    }));
});
    
module.exports = router;