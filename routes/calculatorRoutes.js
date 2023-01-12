var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
  //res.send('Add function is called')

    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum=number1+number2
    console.log("sum of "+number1+" & "+number2+" = "+ sum);
    res.status(200)
    res.json({result:sum})

})
router.get('/sub', (req, res) => {
  res.send('sub function is called')
})
router.get('/multi', (req, res) => {
  res.send('Multi function is called')
})
router.get('/div', (req, res) => {
  res.send('Div function is called')
})

module.exports = router;


