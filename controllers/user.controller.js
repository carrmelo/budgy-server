const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

exports.createUser = async ctx => {
  try {
    const { name } = ctx.request.body;
    const email = ctx.request.body.email.toLowerCase();
    const password = await bcrypt.hash(ctx.request.body.password, 10);
    const newUser = new User({ name, email, password });
    console.log(process.env.APP_SECRET);
    newUser.save();
    ctx.status = 201;
    const token = jwt.sign({ userId: newUser._id }, process.env.APP_SECRET);

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    console.log('HEY');
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      errors: [e.message],
    };
  }
};
