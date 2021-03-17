const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('usuarios/index');
});

module.exports = router;
