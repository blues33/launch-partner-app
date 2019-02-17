const Profile = require('../models/profile.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.profile_create = function (req, res) {

    let profile = new Profile(
        {
            name: req.body.name,
            description: req.body.description
        }
    );

    profile.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Profile Created successfully')
    })
};