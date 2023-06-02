import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/Menu'
import { useNavigate } from 'react-router-dom';

 

export default function Header()
{

    const navigate=useNavigate();

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       flexGrow: 1,
    //     },
    //     menuButton: {
    //       marginRight: theme.spacing(2),
    //     },
    //     title: {
    //       flexGrow: 1,
    //     },
    //   }));

      // const classes = useStyles();

      
      const callRegister = ()=>
                {
                   navigate("/register") 
                }

                const callLogin = ()=>
                {
                   navigate("/login") 
                }

 return(

<div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit" onClick={callRegister}>Register</Button>
          <Button color="inherit" onClick={callLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>

 )

}