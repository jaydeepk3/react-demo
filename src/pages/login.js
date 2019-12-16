import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const paper = {
  marginTop: "80",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const form = {
  width: "100%",
  marginTop: "10px"
};
const submit = {
  margin: 3
};

class LoginPage extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form style={form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/list" variant="body2">
                  List
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="/map" variant="body2">
                  Map
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default LoginPage;
