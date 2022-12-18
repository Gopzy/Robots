import axios from 'axios';

const fetchRobotsApi = async () => {
  const baseUrl = 'http://localhost:8000';
  const url = `${baseUrl}/api/robots`;
  const response = await axios.get(url);
  //   console.log('fetchRobotsApi>>>>>>>', response.data);
  return response.data;
};

export {fetchRobotsApi};
