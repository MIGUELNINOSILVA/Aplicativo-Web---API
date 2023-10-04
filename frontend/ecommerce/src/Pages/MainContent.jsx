import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../styles/MainContent.css";
import { red } from "@mui/material/colors";
import { FooterPage } from "../components/FooterPage";

export const MainContent = () => {
  return (
    <div className="main-content">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active item-1">
            <h2 className="text-center text-carousel">Ropa para hombre</h2>
          </div>
          <div className="carousel-item item-2 ">
            <h2 className="text-center text-carousel">Ropa para mujer</h2>
          </div>
          <div className="carousel-item item-3 ">
            <h2 className="text-center text-carousel">Ropa para niños</h2>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-5">
        <h1>Ofertas</h1>
        <div className="d-flex flex-row mb-3 justify-content-between flex-wrap">
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
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 150, width: 150, marginLeft: 5 }}
              image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              title="shirt"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mens Cotton Jacket
              </Typography>
              <Typography variant="body2" color="text.secondary">
                great outerwear jackets for Spring/Autumn/Winter, suitable for
                many occasions, such as working, hiking, camping, mountain/rock
                climbing, cycling, traveling or other outdoors. Good gift choice
                for you or your family member. A warm hearted love to Father,
                husband or son in this thanksgiving or Christmas Day.
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
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 150, width: 150, marginLeft: 5 }}
              image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              title="shirt"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mens Casual Slim Fit
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The color could be slightly different between on the screen and
                in practice. / Please note that body builds vary by person,
                therefore, detailed size information should be reviewed below on
                the product description.
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
        </div>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};
