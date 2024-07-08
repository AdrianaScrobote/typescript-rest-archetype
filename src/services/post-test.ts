import axios from 'axios';
import createConfig from '../config';

export default async function postTest(input: any) {
  try {
    const config = createConfig();

    const { data } = await axios.post(config.example.url, {
      data: input,
      headers: {},
    });
    return data;
  } catch (error: any) {
    throw error;
  }
}
