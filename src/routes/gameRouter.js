const express = require("express");
const router = express.Router();

const {
  getIndex,
  getKeyEntry,
  getForum1,
  postForum1,
  getForum2,
  getImage,
  getDecryptor,
  postDecryptor,
  getEncryptor,
  postEncryptor,
} = require("../controllers/gameController.js");

router.get("/", getIndex);
router.get("/keyEntry", getKeyEntry);
router.get("/forum/posts/admin", getForum1);
router.post("/forum/posts/admin", postForum1);
router.get("/forum/posts/ella", getForum2);
router.get("/image", getImage);
router.get("/decrypt0r", getDecryptor);
router.post("/decrypt0r", postDecryptor);
router.get("/encrypt0r", getEncryptor);
router.post("/encrypt0r", postEncryptor);

module.exports = router;
