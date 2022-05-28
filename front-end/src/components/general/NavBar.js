import React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import logo from '../../img/travelo-hey_logo.png';

// TODO: move styles to another file
// TODO: modify styles

function makeColorLightgray(e) {
  e.target.style.color = 'lightgray';
}

function makeColorWhite(e) {
  e.target.style.color = 'white';
}

function NavBar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div style={{ display: 'block', marginLeft: '0', marginRight: 'auto' }}>
          <Link to="/" style={{ paddingRight: '50px', color: 'inherit', textDecoration: 'none' }}>
            <img src={logo} alt="Travelo-Hey!" width="200" height="114" />
          </Link>
        </div>
        <List component="nav" style={{ marginLeft: 'auto', marginRight: '0', listStyle: 'none', display: 'flex', flexDirection: 'row' }}>
          <ListItem onMouseEnter={makeColorLightgray} onMouseLeave={makeColorWhite}>
            <Link to="/" style={{ paddingRight: '50px', color: 'inherit', textDecoration: 'none' }}>
              <ListItemText>Home</ListItemText>
            </Link>
          </ListItem>
          <ListItem onMouseEnter={makeColorLightgray} onMouseLeave={makeColorWhite}>
            <Link to="/countries" style={{ paddingRight: '50px', color: 'inherit', textDecoration: 'none' }}>
              <ListItemText>Countries</ListItemText>
            </Link>
          </ListItem>
          <ListItem onMouseEnter={makeColorLightgray} onMouseLeave={makeColorWhite}>
            <Link to="/logout" style={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItemText>Log out</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
