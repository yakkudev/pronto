const crypto = require("crypto");

function genKey(password) {
  const salt = process.env.CRYPT_SALT || "EPIC-SALT-WOOOOO-123883";
  return crypto.scryptSync(password, salt, 32);
}

function encrypt(text, password) {
  const key = genKey(password);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);

  return Buffer.concat([iv, encrypted]).toString("base64");
}

function decrypt(encoded, password) {
  const key = genKey(password);
  const data = Buffer.from(encoded, "base64");

  const iv = data.subarray(0, 16);
  const encrypted = data.subarray(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

module.exports = { encrypt, decrypt };
