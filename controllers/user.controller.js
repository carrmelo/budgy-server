const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

exports.createUser = async ctx => {
  try {
    const { name } = ctx.request.body;
    const email = ctx.request.body.email.toLowerCase();
    const password = await bcrypt.hash(ctx.request.body.password, 10);
    const newUser = new User({ name, email, password });
    newUser.save();
    ctx.status = 201;
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      errors: [e.message],
    };
  }
};
