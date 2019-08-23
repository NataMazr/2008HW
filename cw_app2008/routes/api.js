var express = require('express');
var router = express.Router();
const us = [
    { name: 'Petya' },
    { name: 'Lily' },
    { name: 'Vasya' },
    { name: 'Mike' }
];

console.log(us);
/* GET home page. */
router.get('/users', function(req, res) {
    res.json(us);
});

module.exports = router;