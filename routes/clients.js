var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');
var obj = require("../dummy.json");

/* GET users listing. */
router.get('/', isAuthenticated, function(req, res, next) {
  res.render('clients', { title: 'Clients', isloggedin: (localStorage.getItem("_session")  !== null) ? true : false, data: obj.client});
});

function isAuthenticated(req, res, next) {

    if (localStorage.getItem("_session")  !== null)
        return next();

    res.redirect('/auth');
}

module.exports = router;
