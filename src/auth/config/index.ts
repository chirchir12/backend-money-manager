import * as dotenv from 'dotenv';
import { validateAuthConfig } from '../validations';

dotenv.config();

// validation
const { value: envVars, error } = validateAuthConfig
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`config validation ${error.message}`);
}

export const authConfig = {
  secretKey: envVars.JWTKEY,
  expiresAt: envVars.TOKEN_EXPIRATION,
};
