const express = require(`express`);

const controller = require('./../controllers/partyController');

const router = express.Router();

router.route("/").get(controller.getParty);

module.exports = router;