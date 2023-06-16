const get = require('./get');
const getOwnerById = require('./getId');
const updateOwner = require('./updateOwner');
const deleteOwners = require('./delete');
const createOwners = require('./createOwner');

module.exports = {
  get,
  getOwnerById,
  updateOwner,
  deleteOwners,
};
