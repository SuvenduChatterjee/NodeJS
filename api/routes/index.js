const router = require('express').Router();

const bookstall = require('./bookstall');

router.use('/api', bookstall);

module.exports = router;