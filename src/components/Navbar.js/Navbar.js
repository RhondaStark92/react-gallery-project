import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { HashRouter as Router, Route, Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography align="center" variant="title" color="white">
                    My Gallery
                </Typography>
            </Toolbar>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
        </AppBar>
        </div>
    )
}
export default NavBar;