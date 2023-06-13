const express = require('express');
const { user, services, owner } = require('../../controllers');

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

router.get(
  '/services',
  // ctrlWrapper(authMiddleware),
  ctrlWrapper(services.getServices)
);

router.get(
  '/services/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.getServiceById)
);

router.delete(
  '/services/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.deleteServices)
);

router.patch(
  '/services/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(services.updateService)
);

router.get('/owners', ctrlWrapper(authMiddleware), ctrlWrapper(owner.get));
router.get(
  '/owners/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(owner.getOwnerById)
);
router.delete(
  '/owners/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(owner.deleteOwners)
);

router.patch(
  '/owners/:id',
  ctrlWrapper(authMiddleware),
  uploadCloud.single('avatar'),
  ctrlWrapper(owner.updateOwner)
);

module.exports = routerAdmin = router;
