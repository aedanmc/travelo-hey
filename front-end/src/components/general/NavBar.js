import React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import makeStyles from '@mui/material/makeStyles';
// import {useTheme, useMediaQuery} from '@/mui/styles';
import { Link } from 'react-router-dom';
import logo from '../../img/travelo-hey_logo.png';

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
function makeColorLightgray(e) {
  e.target.style.color = 'lightgray';
}

function makeColorWhite(e) {
  e.target.style.color = 'white';
}

function NavBar() {
  // const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // TODO: add actual navbar components (not needed for beta release)
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div style={{ display: 'block', marginLeft: '0', marginRight: 'auto' }}>
          <img src={logo} alt="Travelo-Hey!" width="200" height="114" />
        </div>
        <nav style={{ marginLeft: 'auto', marginRight: '0' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row' }}>
            <li>
              <Link
                style={{ paddingRight: '50px', color: 'inherit', textDecoration: 'none' }}
                onMouseOver={makeColorLightgray}
                onFocus={makeColorLightgray}
                onMouseLeave={makeColorWhite}
                to="/search"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                style={{ paddingRight: '50px', color: 'inherit', textDecoration: 'none' }}
                onMouseOver={makeColorLightgray}
                onFocus={makeColorLightgray}
                onMouseLeave={makeColorWhite}
                to="/countries"
              >
                Countries
              </Link>
            </li>
            <li>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseOver={makeColorLightgray}
                onFocus={makeColorLightgray}
                onMouseLeave={makeColorWhite}
                to="/logout"
              >
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
