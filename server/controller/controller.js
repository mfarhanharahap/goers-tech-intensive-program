var userDB = require('../model/model');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }

    const user = new userDB({
        product: req.body.product,
        piece: req.body.piece,
        price: req.body.price
    })

    user
        .save(user)
        .then(data => {
            //res.send(data);
            res.redirect('/add-product');
        })
        .catch (err => {
            res.status(500).send({
                message: err.message || "some error occured while creating a operation"
            })
        });
};

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        userDB.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({message: "not found fruit with id" + id});
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({message: "error retriving fruit with id" + id});
            });

    } else {
        userDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({message:err.message || "error occured while retrieving fruit information"})
            })
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        return res
        .status(400)
        .send({message: "data to update cannot be empty"})
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(400).send({message: `cannot update fruit with ${id}. Maybe fruit not found`});
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "error update user information"})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    userDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: `cannot delete fruit with ${id}. Maybe fruit not found`})
            } else {
                res.send({
                    message: "user was deleted succesfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "could not be delete with id" + id
            })
        });
}