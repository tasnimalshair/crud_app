const axios = require('axios');
// const { param } = require('../routes/router');
const user_index_get = (req, res) => {

    axios.get('http://localhost:8080/api/users')
        .then(function(response) {
            // console.log(response.data);
            res.render('index', { users: response.data })
        })
        .catch((err) => {
            res.send(err)
        })
}

const user_add_user_get = (req, res) => {
    res.render('add_user')
}

const user_update_user_get = (req, res) => {
    axios.get('http://localhost:8080/api/users', { params: { id: req.query.id } })
        .then(function(userData) {
            // console.log(userData);
            res.render('update_user', { userData: userData.data })
        })
        .catch(err => res.send(err))
}

module.exports = {
    user_index_get,
    user_add_user_get,
    user_update_user_get,
}