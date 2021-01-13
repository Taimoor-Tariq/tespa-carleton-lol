const router = require('express').Router(),
    db = require('./database'),
    sass = require('sass'),
    pug = require('pug')

router.get('/', async (req, res) => {
    res.send(pug.renderFile(`${__dirname}/views/home.pug`, {
        style: sass.renderSync({file: `${__dirname}/scss/home.scss`}).css.toString(),
    }));
});

router.get('/matches', async (req, res) => {
    res.send(pug.renderFile(`${__dirname}/views/matches.pug`, {
        style: sass.renderSync({file: `${__dirname}/scss/matches.scss`}).css.toString(),
        GAMES: []
    }));
});

module.exports = router;