import axios from 'axios';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000/' });

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [animeData, setAnimeData] = useState([]);

  const fetchAndUpdateData = async () => {
    const { data } = await axiosInstance.get('/anime/search', {
      params: { q: searchTerm },
    });
    setAnimeData(data.data);
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
      </Box>
      <Box marginTop={2}>
        <Paper elevation={2}>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap" padding={2}>
            {animeData.map(({ mal_id, title, type, score, images }) => (
              <Card style={{ maxWidth: '300px', height: '500px', marginBottom: '30px' }} key={mal_id}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {`Title: ${title}`}
                  </Typography>
                  <img src={images.jpg.image_url} />
                  <Typography variant="body2" color="text.secondary">
                    {`Type: ${type}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {`Score: ${score}`}
                  </Typography>
                </CardContent>
              </Card>d
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
