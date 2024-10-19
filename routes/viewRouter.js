const express = require('express');
const viewsContoller = require('../controllers/viewsContoller');
const authContoller = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.use(viewsContoller.alerts);

router.get('/', authContoller.isLoggedIn, viewsContoller.getOverview);
router.get('/tour/:slug', authContoller.isLoggedIn, viewsContoller.getTour);
router.get('/login', authContoller.isLoggedIn, viewsContoller.getLoginForm);
router.get('/me', authContoller.protect, viewsContoller.getAccount);
router.get('/my-tours', authContoller.protect, viewsContoller.getMyTours);

router.post(
  '/submit-user-data',
  authContoller.protect,
  viewsContoller.updateUserData,
);

module.exports = router;
