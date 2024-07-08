import validateRequest from './schemas/controllerGetExample.schema';
import getTest from '../services/get-test';
import { ResultGet } from './models/getTest';

export default async function getExampleController(search: ResultGet | undefined) {
  try {
    const validationError = validateRequest({ search });

    if (validationError) return await Promise.reject(validationError);

    //add your architecture (MVC, Clean, ...)
    const result = await getTest();

    return result;
  } catch (error) {
    throw error;
  }
}
