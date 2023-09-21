import {Typography, Grid, Pagination, Stack} from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticias from "./Noticias"

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias/20);
  return (
    <>
        <Typography
            textAlign={"center"}
            marginY={5}
            variant="h3"
            component={"h2"}
        >
            Ultimas Noticias
        </Typography>           

        <Grid container spacing={2}>
            {noticias.map(noticia => (
                <Noticias 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction={"row"}
            justifyContent="center"
            alignItems="center"
        >
            <Pagination 
                count={totalPaginas}
                color="primary"
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias
