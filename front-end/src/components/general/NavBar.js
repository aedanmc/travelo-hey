import React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import makeStyles from '@mui/material/makeStyles';
// import {useTheme, useMediaQuery} from '@/mui/styles';
import { Link } from 'react-router-dom';

// TODO: move styles to another file
// TODO: modify styles

/* const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
})); */

function NavBar() {
  // const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // TODO: add actual navbar components (not needed for beta release)
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link to="/">
          <Container>
            <img alt="Travelo-Hey!" src="/placeholder_logo.jpg" />
            <Typography variant="h4">
              Travelo-Hey!
            </Typography>
          </Container>
        </Link>
        <div className="nav-bar-elements">
          <Link to="/country">
            Search Country Safety Ratings
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
