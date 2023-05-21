const addFavorite = require('./addFavorite');
const update = require('./update');
const get = require('./get');
const getId = require('./getId');
const getNotices = require('./getAll');
const deleteFavorite = require('./deleteFavorite');
const deleteNotices = require('./deleteNotices');
const editNotices = require('./editNotices');

module.exports = {
  update,
  get,
  getId,
  getNotices,
  addFavorite,
  deleteFavorite,
  deleteNotices,
  editNotices,
};
