import * as Joi from 'joi';
import { DatabaseConfigAttr } from '../interfaces/database.interface';

export const validateDBConfig = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().positive().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DIALECT: Joi.string().required(),
}).unknown();
