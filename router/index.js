const router = require("express").Router();
const test = require("./test");
const { io } = require("../config/socket");

router.use("/test", test);

module.exports = router;
