import axios from 'axios';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AnimeCard from '../components/AnimeCard';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000/' });

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [animeData, setAnimeData] = useState([]);
  const [averageScore, setAverageScore] = useState();

  const fetchAndUpdateData = async () => {
    const { data } = await axiosInstance.get('/anime/search', {
      params: { q: searchTerm },
    });
    setAnimeData(data.data);
    setAverageScore(data.averageScore)
  };

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  return (
    <Box padding={4}>
      <Box display="flex">
        <Box width="800px" marginRight={2}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Button variant="contained" size='large' onClick={fetchAndUpdateData}>
          Send
        </Button>
          <Box marginLeft={2}>
            <h4>Average Score: {averageScore}</h4>
          </Box>
      </Box>
      <Box marginTop={2}>
        <Paper elevation={2}>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap" padding={2}>
            {animeData.map(({ mal_id, title, type, score, images }) => (
              <AnimeCard
                key={mal_id}
                title={title}
                imageUrl={images.jpg.image_url}
                type={type}
                score={score}
              />
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
