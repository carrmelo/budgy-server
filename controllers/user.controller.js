const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

exports.createUser = async ctx => {
  try {
    const { name } = ctx.request.body;
    console.log(name);
    const email = ctx.request.body.email.toLowerCase();
    const password = await bcrypt.hash(ctx.request.body.password, 10);
    const newUser = new User({ name, email, password });
    console.log(newUser);
    newUser.save();
    console.log(newUser);
  } catch (e) {}
};
