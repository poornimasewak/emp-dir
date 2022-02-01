const router = require('express').Router();
const { Emp } = require('../models');


router.get('/', (req, res) => {
    res.render('addEmp');
});

router.get('/list', (req, res) => {
    Emp.findAll().then(empData => {
        // res.json(empData);
        // console.log(empData);
        const emps = empData.map((emp) => emp.get({ plain: true }));
        res.render('empList', { emps });
    })
});

router.post('/addemp', (req, res) => {
    console.log(req.body);
    Emp.create(req.body).then(data => {
        res.redirect('/list');
    })
});
module.exports = router;
