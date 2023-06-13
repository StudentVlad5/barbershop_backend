const express = require('express');
// const { user, services } = require('../../controllers');
const { user } = require('../../controllers');
const {
  ctrlWrapper,
  authMiddleware,
  validation,
  uploadCloud,
} = require('../../middleWares');
const { userUpdateValidationSchema } = require('../../models');

const router = express.Router();

router.get('/users', ctrlWrapper(authMiddleware), ctrlWrapper(user.getUsers));
router.get(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.getUserById)
);
router.delete(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.deleteUsers)
);

router.patch(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  uploadCloud.single('avatar'),
  validation(userUpdateValidationSchema),
  ctrlWrapper(user.updateUser)
);

// router.get(
//   '/services',
//   ctrlWrapper(authMiddleware),
//   ctrlWrapper(services.getServices)
// );

// router.delete(
//   '/services/:id',
//   ctrlWrapper(authMiddleware),
//   ctrlWrapper(services.deleteServices)
// );

// router.patch(
//   '/services/:id',
//   ctrlWrapper(authMiddleware),
//   ctrlWrapper(services.updateService)
// );

module.exports = routerAdmin = router;
