const cryptor = require("../util/cryptor");

const threeURL = "AQZXDFGYHYUTYVB";
const secretKey = "0x859";
const postsAdmin = [
  {
    username: "admin",
    content:
      "Users have been reporting problems with replying to posts. We've indentified the issue and are working on a solution.",
    image: "",
  },
];
const postsElla = [
  {
    username: "ella",
    content:
      "i found some pills in the trash today. took 3 and i feel fine, anyone know what these are?",
    image: "/image/pills.jpg",
  },
  {
    username: "bigguy",
    content:
      "Check the back side of the blister pack, something should be printed on there.",
    image: "",
  },
  {
    username: "ella",
    content:
      "do you think im dumb? that was obviously the first thing i did after taking them. nothing printed on the other side",
    image: "",
  },
  {
    username: "xx_pill_sniffer",
    content: "u sgould crush and snort them maybe idk",
    image: "",
  },
  {
    username: "xx_pill_sniffer",
    content: "yo update us??",
    image: "",
  },
];

function getIndex(req, res) {
  const levelGet = req.query.level;
  if (levelGet === "0") return res.render("level0");
  if (levelGet === "1") return res.render("level1");
  if (levelGet === "2") return res.render("level2", { threeURL });
  if (levelGet === threeURL) return res.render("level3");
  return res.redirect("/?level=0");
}

function getKeyEntry(req, res) {
  const provided = req.query.key;
  if (provided != secretKey) return res.redirect(`/?level=${threeURL}`);
  return res.redirect("/forum/posts/admin/");
}

function getForum1(req, res) {
  return res.render("level4_5", { posts: postsAdmin, doRenderReply: true });
}

function postForum1(req, res) {
  return res.redirect("/forum/posts/ella/");
}

function getForum2(req, res) {
  return res.render("level4_5", { posts: postsElla, doRenderReply: false });
}

function getImage(req, res) {
  const contents = [
    { href: ".", label: "." },
    { href: "/image/miku.jpg", label: "miku.jpg" },
    { href: "/image/pills.jpg", label: "pills.jpg" },
    { href: "#", label: "file missing" },
    { href: "/image/egg.jpg", label: "egg.jpg" },
    { href: "#", label: "file missing" },
    { href: "/image/egg3.jpg", label: "egg3.jpg" },
    { href: "#", label: "file missing" },
    { href: "#", label: "file missing" },
    { href: "/image/instructions.jpg", label: "instructions.jpg" },
    { href: "/image/message.png", label: "file corrupt" },
  ];
  return res.render("level6", { title: "image/", contents });
}

function getDecryptor(req, res) {
  return res.render("cryptor", {
    title: "decrypt0r",
    input: "",
    key: "",
    output: "",
  });
}

function postDecryptor(req, res) {
  const input = req.body.input;
  const key = req.body.key;

  const output = cryptor.decrypt(input, key);

  return res.render("cryptor", { title: "decrypt0r", input, key, output });
}

function getEncryptor(req, res) {
  return res.render("cryptor", {
    title: "encrypt0r",
    input: "",
    key: "",
    output: "",
  });
}

function postEncryptor(req, res) {
  const input = req.body.input;
  const key = req.body.key;
  const output = cryptor.encrypt(input, key);
  return res.render("cryptor", { title: "encrypt0r", input, key, output });
}

module.exports = {
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
};
