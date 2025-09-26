import axios from 'axios';
import config from '../config/index.js';

export const generateAnimation = async (image, mask, enable_hd) => {
  // Add API call to AI-Engine
  const response = await axios.post(
    config.pythonApiUrl,
    { image, mask, enable_hd }, // <--- The data is forwarded here
    { responseType: 'arraybuffer' }
  );
  return response.data;
}