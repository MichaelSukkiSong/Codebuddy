const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

const userSchema = new Schema({
  googleId: String,
  username: String,
  password: String,
  passwordConfirm: String,
  salt: String,
});

userSchema.methods.verifyPassword = function (password) {
  // compare the password with the hashed password in the DB
  // console.log(this);

  const hashedPassword = crypto.pbkdf2Sync(
    password,
    this.salt,
    310000,
    32,
    'sha256'
  );
  // console.log(hashedPassword.toString('hex'));

  return this.password === hashedPassword.toString('hex');
};

mongoose.model('users', userSchema);
