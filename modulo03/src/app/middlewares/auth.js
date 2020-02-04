import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const autoHeader = req.headers.authorization;

  if (!autoHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = autoHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  return next();
};
