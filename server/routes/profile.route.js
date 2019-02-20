const express = require('express');
const router = express.Router();
const upload = require('../s3');
const profile_controller = require('../controllers/profile.controller');

router.get('/test', profile_controller.test);
router.get('/index', profile_controller.profile_index);
router.post('/create', profile_controller.profile_create);

const singleUpload = upload.single('image')

router.post('/image-upload', function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})

module.exports = router;
module.exports = router;
