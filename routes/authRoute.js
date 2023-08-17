const express = require("express");
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  getAAllOrdersController,
  orderStatusController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
//Router object
const router = express.Router();

//routing
//Regiter || method Post
router.post("/register", registerController);

// Login Post
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

// protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// updata profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get("/orders", requireSignIn, getAllOrdersController);

// All orders
router.get("/all-orders", requireSignIn, isAdmin, getAAllOrdersController);

// order status
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);


module.exports = router;
