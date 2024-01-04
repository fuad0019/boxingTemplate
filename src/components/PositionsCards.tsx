import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material/'
import styles from './HeroSection.module.scss'

export interface Job {

  title: string,
  description: string,
  image: string,
  index: number,
  type: string

}

const card = (job: Job) => (
  <React.Fragment>


    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {job.type}
      </Typography>
      <Typography variant="h5" component="div">
        {job.title}
      </Typography>

      <Typography variant="body2">
        {job.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button style={{ marginLeft: '7px' }} sx={{ width: 'fit-content', backgroundColor: 'rgb(210, 108, 193)', ":hover": { backgroundColor: 'rgb(182, 97, 168)' } }} variant='contained' size="small">Ansøg Nu</Button>
    </CardActions>
  </React.Fragment>
);

interface PositionCardProp {
  job: Job
}
export default function PositionCard({ job }: PositionCardProp) {
  return (
    <Box >
      <Paper elevation={3}>
        <Card variant="outlined" style={{ width: 300 }}>{card(job)}</Card>
      </Paper>

    </Box>
  );
}