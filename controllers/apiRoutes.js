const { default: axios } = require('axios');

const router = require('express').Router();

const { Emp } = require('../models');

router.get('/', (req, res) => {
    axios.get('https://random-data-api.com/api/users/random_user?size=10')
        .then(response => {
            // console.log(response.data);
            const apiData = response.data;
            apiData.forEach(emp => {
                // console.log(emp);
                Emp.create({
                    id: emp.id,
                    first_name: emp.first_name,
                    email: emp.email,
                    last_name: emp.last_name,
                    avatar: emp.avatar
                });

                // .then(data => { res.redirect('/'); })
            })
            res.redirect('/list');
        })
})
module.exports = router;