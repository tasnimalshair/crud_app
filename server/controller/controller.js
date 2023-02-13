const UserDB = require("../model/model");
// Create and save user
const create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // new User
    const user = new UserDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });

    user
        .save(user)
        .then((result) => {
            res.redirect('/add-user')
        })
        .catch((err) => {
            res
                .status(500)
                .send({
                    message: err.message ||
                        "Some error ocurred  while creating a create operation",
                });
        });
};

// Retrive all users ||  single user
const find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        UserDB.findById(id)
            .then((data) => {
                if (!data) {
                    return res.status(404).send({ message: `No user with id:${id}` })
                } else {
                    res.send(data);
                }
            }).catch((err) => {
                res.status(500).send({ message: `Error retriving data with id:${id}` })
            })
    } else

    {
        UserDB.find()
            .then((result) => res.send(result))
            .catch((err) => {
                res
                    .status(500)
                    .send({
                        message: "Some error ocurred  while creating a retrive operation",
                    });
            });
    }
};

// Update a user
const update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" });
    }
    const id = req.params.id;
    UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                return res
                    .status(404)
                    .send({ message: `Cannot update user with id: ${id}` });
            } else {
                res.send(data)
            }
        })
        .catch((err) => {
            res.status(500).send({ message: 'Error update user information' })
        });
};

// Delete a user
const deleteUser = (req, res) => {
    const id = req.params.id;
    UserDB.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res
                    .status(404)
                    .send({ message: `Cannot delete user with id: ${id}` });
            } else {
                res.send({ message: 'User was deleted successfully!' })
            }
        })
        .catch((err) => {
            res.status(500).send({ message: 'Could not delete user with id=' + id })
        });
};

module.exports = {
    create,
    find,
    update,
    deleteUser,
};