
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/Menu'
import { useNavigate } from 'react-router-dom';

 

export default function DashboardHeader()
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

      
      const callDash = ()=>
                {
                   navigate("/dashboard") 
                }

                const callView = ()=>
                {
                   navigate("/view") 
                }
                const callout = ()=>
                {
                    sessionStorage.clear();
                   navigate("/") 
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
          <Button color="inherit" onClick={callView}>View Favourite</Button>
          <Button color="inherit" onClick={callDash}>Dashboard</Button>
          <Button color="inherit" onClick={callout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>

 )

}