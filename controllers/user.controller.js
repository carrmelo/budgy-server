const bcrypt = require('bcryptjs');

const { User } = require('../models');

exports.createUser = async ctx => {
  try {
    const email = ctx.request.body.email.toLowerCase();
    const password = await bcrypt.hash(ctx.request.body.password, 10);
    console.log(email, password);
  } catch (e) {}
};
