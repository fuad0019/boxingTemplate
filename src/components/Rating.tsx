import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

export default function RatingComponent() {
  const value = 5;
  const AmountReviewed = 8;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}><Typography color={'black'} sx={{ whiteSpace: 'nowrap' }}>{AmountReviewed} Ratings</Typography></Box>
    </Box>
  );
}