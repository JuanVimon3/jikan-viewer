import Box from '@mui/material/Box';

const RecommendationLabel = ({ score }) => {
  const recommendationMapping = {
    negative: {
      color: 'red',
      message: '😔 I do not recommend it.',
    },
    neutral: {
      color: 'yellow',
      message: '😐 You may have fun.',
    },
    positive: {
      color: 'green',
      message: '😃 Great, this is one of the best anime.',
    },
  };

  let keyToUse;
  if (score >= 0 && score < 5) {
    keyToUse = 'negative';
  } else if (score >= 5 && score < 7) {
    keyToUse = 'neutral';
  } else {
    keyToUse = 'positive';
  }

  return (
    <Box
      position="absolute"
      bottom="0"
      width="100%"
      paddingY={1}
      backgroundColor={recommendationMapping[keyToUse].color}
    >
      {recommendationMapping[keyToUse].message}
    </Box>
  );
};

export default RecommendationLabel;
