import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import RecommendationLabel from './RecommendationLabel';

const AnimeCard = ({ title, imageUrl, type, score }) => {
  return (
    <Card
      style={{
        width: '300px',
        height: '500px',
        marginBottom: '30px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          {title}
        </Typography>
        <img src={imageUrl} />
        <Typography variant="body2" color="text.secondary" align="left">
          {`Type: ${type}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
        {`Score: ${score}`}
        </Typography>
      </CardContent>
      <RecommendationLabel score={score} />
    </Card>
  );
};

export default AnimeCard;
