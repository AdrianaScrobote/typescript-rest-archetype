import joi from 'joi';
import { validator } from '../../helpers/validator';

const validateRequest = (request: any) => {
  const schema = joi
    .object({
      test: joi.string().required(),
    })
    .unknown()
    .required();

  return validator(schema, request);
};

export default validateRequest;
