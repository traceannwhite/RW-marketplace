// CRUD FUNCTIONALITY

const faunadb = require("faunadb");
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const getProducts = async () => {
  //TODO: get
  faunaClient.query(q.Collection("products"));
};

const getProductById = async (id) => {
  //TODO: getby id
};

const createProduct = async (code, language, description, name) => {
  //TODO: create
};

const updateProduct = async (id, code, language, name, description) => {
  //TODO: update
};

const deleteProduct = async (id) => {
  //TODO: delete
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
