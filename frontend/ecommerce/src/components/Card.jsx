import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

export const Card = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 150, width: 150, marginLeft: 5 }}
      image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      title="shirt"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Mens Casual Premium Slim Fit T-Shirts
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Slim-fitting style, contrast raglan long sleeve, three-button
        henley placket, light weight & soft fabric for breathable and
        comfortable wearing. And Solid stitched shirts with round neck
        made for durability and a great fit for casual fashion wear and
        diehard baseball fans. The Henley style round neckline includes
        a three-button placket.
      </Typography>
    </CardContent>
    <CardActions>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <IconButton aria-label="add to favorites">
        <FavoriteBorderIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}
