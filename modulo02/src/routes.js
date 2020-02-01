import { Router } from 'express';

import User from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego Fernandes',
    email: 'diego@rocketseat.com.br',
    password_hash: '1241934905',
  });

  return res.json(user);
}

export default routes;
