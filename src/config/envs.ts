import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  // * app
  BACK_END_URL: get('BACK_END_URL').required().asUrlString(),
};
