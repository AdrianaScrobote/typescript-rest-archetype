import validateRequest from './schemas/controllerPostExample.schema';
import postTest from '../services/post-test';
import { ResultPost } from './models/postTest';

export default async function postExampleController(input: ResultPost | undefined) {
  try {
    const validationError = validateRequest(input);

    if (validationError) return await Promise.reject(validationError);

    const result = await postTest(input);

    return result;
  } catch (error) {
    throw error;
  }
}
