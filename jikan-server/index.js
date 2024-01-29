const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;

const axiosInstance = axios.create({ baseURL: 'https://api.jikan.moe/v4' }); 

app.get('/anime/search', async (req, res) => {
  const { q } = req.query;
  const { data } = await axiosInstance.get('/anime', {
    params: { q },
  });
  const averageScore = data.data.reduce((acc, current) => current.score + acc, 0) / data.data.length;
  return res.json({ ...data, averageScore });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
