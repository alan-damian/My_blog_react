import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from "react-router-dom";
import styles from '../navbar/Navbar.module.css'


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
      <AppBar position="static"  >
        <Toolbar id= "ToolBar" >

        
          <Typography  className='tipografia' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
            <button className={styles.Button}>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/Posteos">Posteos</Link>
            </button>
            <button>
              <Link to="/Crear">Crear</Link>
            </button>
            <button>
              <Link to="/Login">Login</Link>
            </button>
          
          </Typography>


        </Toolbar>
      </AppBar>
      </div>
    
    <Outlet/>

    </Box>

  );
}
