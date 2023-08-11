const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { getCurrent } = require("./getCurrent");
const { updateSubscription } = require("./updateSubscription");
const { updateAvatar } = require("./updateAvatar");
const { resendVerify } = require("./resendVerify");
const { verify } = require("./verify");

module.exports = {
  login,
  logout,
  register,
  getCurrent,
  updateSubscription,
  updateAvatar,
  resendVerify,
  verify,
};
