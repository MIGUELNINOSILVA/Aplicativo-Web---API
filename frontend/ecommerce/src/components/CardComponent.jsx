import { Card, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./../styles/CardComponent.css";

export const CardComponent = ({title, description, ratingValue, createdByname, createdBylastname, priceValue, urlImage}) => {
  return (
    <>
      <div className="d-flex flex-row mb-3 justify-content-between flex-wrap gap-5">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 150, width: 150, marginLeft: 5 }}
            image={urlImage}
            title="shirt"
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <br />
            <Typography variant="body2" color="text.primary">
              Publicado por: {createdByname} {createdBylastname}
            </Typography>
            <br />
            <Typography variant="body2" color="text.primary">
              Precio: ${priceValue}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={ratingValue}
            />
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
