import axios from 'axios';

const fetchRobotsApi = async () => {
  const baseUrl = 'http://localhost:8000';
  const url = `${baseUrl}/api/robots`;
  const response = await axios.get(url);
  return response.data;
};

export {fetchRobotsApi};
