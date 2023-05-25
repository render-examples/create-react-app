import { Container } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useFetch from "../components/useFetch";

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

const Main = () => {

  const { error, isPending, data } = useFetch("https://benchmark-back.onrender.com");
  
  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Stack spacing={2}>
              <TextField id="outlined-basic" label="Tickers" variant="outlined" />
              <TextField id="outlined-basic" label="Benchmarks" variant="outlined" />
              <Button variant="contained" size="large">Bora</Button>
            </Stack>

          </Grid>
          <Grid item xs={8}>
            {error && <div>{error}</div>}
            {isPending && <div>ta vindo</div>}
            {data &&  <div>{data}</div>}

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
