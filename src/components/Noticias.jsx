import PropTypes from "prop-types";
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid} from '@mui/material'

const Noticias = ({noticia}) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        { urlToImage && (
          <CardMedia
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={"250"}
          />
        )}
        <CardContent>
          <Typography variant="body" color={"error"}>
            {source.name}
          </Typography>
          <Typography variant="h5" component={"div"}>
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <CardActions>
            <Link
              href={url}
              target="_blank"
              variant="button"
              width={"100%"}
              textAlign={"center"}
              sx={{
                textDecoration: "none"
              }}
            >
              Leer Noticia
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  )
}

Noticias.propTypes = {
    noticia: PropTypes.object.isRequired,
}

export default Noticias
