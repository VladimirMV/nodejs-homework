const { Router } = require("express");

const { schemas } = require("../../models/user");
const { validateBody } = require("../../decorators");
const AuthController = require("../../controllers/auth");
const { authenticate, upload } = require("../../middlewares");

const router = Router();
// console.log("Зашел в роутер");
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  AuthController.register
);

router.get("/verify/:verificationToken", AuthController.verify);

router.post(
  "/verify",
  validateBody(schemas.userEmailSchema),
  AuthController.resendVerify
);

router.post("/login", validateBody(schemas.loginSchema), AuthController.login);

router.get("/current", authenticate, AuthController.getCurrent);

router.post("/logout", authenticate, AuthController.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  AuthController.updateAvatar
);
router.patch(
  "/user",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  AuthController.updateSubscription
);

module.exports = router;
