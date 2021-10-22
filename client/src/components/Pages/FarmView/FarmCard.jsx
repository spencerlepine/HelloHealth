import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';
import StarRatings from 'react-star-ratings';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function FarmCard({ farm, cardClick }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      xl={4}
      style={{ paddingBottom: '30px' }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          sx={{ backgroundColor: '#F4A261' }}
          avatar={
            <Avatar
              onClick={() => cardClick(farm.user_id)}
              sx={{ bgcolor: '#264653' }}
              aria-label="recipe"
            >
              {farm.name[0]}
            </Avatar>
          }
          title={<Typography variant="h6">{farm.name}</Typography>}
        />
        <CardMedia
          component="img"
          height="194"
          image={farm.profile_image}
          alt="profileImage"
          onClick={() => cardClick(farm.user_id)}
        />
        <CardContent sx={{ backgroundColor: '#eee' }}>
          <StarRatings
            rating={farm.farm_rating}
            starRatedColor={'#E9C46A'}
            numberOfStars={5}
            starDimension={'25px'}
          />
        </CardContent>
        <CardActions sx={{ backgroundColor: '#eee' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Typography style={{ marginLeft: 'auto' }}>See More</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {farm.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default FarmCard;
