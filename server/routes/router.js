const express = require('express');
const router = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

router.get('/', services.user_index_get)

router.get('/add-user', services.user_add_user_get)

router.get('/update-user', services.user_update_user_get)


// API
router.post('/api/users', controller.create)
router.get('/api/users', controller.find)
router.put('/api/users/:id', controller.update)
router.delete('/api/users/:id', controller.deleteUser)

module.exports = router;