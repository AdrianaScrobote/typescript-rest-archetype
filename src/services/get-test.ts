import axios from 'axios';
import createConfig from '../config';

export default async function getTest() {
  try {
    const config = createConfig();

    const { data } = await axios.get(config.example.url, {
      params: {},
      headers: {},
    });
    return data;
  } catch (error: any) {
    throw error;
  }
}
