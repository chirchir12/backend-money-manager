import * as Joi from 'joi';

export const validateAuthConfig = Joi.object({
  JWTKEY: Joi.string().required(),
  TOKEN_EXPIRATION: Joi.string().required(),
}).unknown();
