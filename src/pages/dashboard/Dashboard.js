import './dashboard.css';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { FaStore, FaBookOpen, FaPlus } from 'react-icons/fa';
import { HiMenu, HiPlus } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import ResponsiveDrawer from "../../components/drawer/ResponsiveDrawer";

import logo from '../../assets/logo.png';
import dp from '../../assets/john-doe.jpeg';
import ButtonPrimary from '../../components/button/ButtonPrimary';

const drawerWidth = 350;
const Dashboard = (props) => {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
        <div className="drawer-main">
            <div className='drawer-logo-container'>
                <img className="drawer-logo" src={ logo } alt="Logo"/>
            </div>
           
            <List>
                <ListItem button key={ 1 } selected={true}>
                        <div><FaBookOpen /></div>
                        <div className="margin-l-16">Catalogues</div>
                </ListItem>
                <ListItem button key={ 2 }>
                    <div><FaStore /></div>
                    <div className="margin-l-16">Store Profile</div>
                </ListItem>
            </List>
            <div className='drawer-footer'>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src={ dp } />
                    </ListItemAvatar>
                    <ListItemText className='user-info' primary="John Doe" secondary="johndoe2020@gmail.com" />
                </ListItem>
            </div>
        </div>
    );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='dashboard-main'>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            display: { xs: "block", sm: "none" },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HiMenu />
          </IconButton>
          <div>
            Responsive drawer
          </div>
        </Toolbar>
      </AppBar>
      
      <ResponsiveDrawer container={ container } drawerWidth={ drawerWidth }>
        { drawerContent }
      </ResponsiveDrawer>
      
      <Box
        component="main"
        className='dashboard-content'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar 
            sx={{
                display: { xs: "block", sm: "none" },
            }}
        />
        <header className='dashboard-header'>
            <div className='dashboard-title-container'>
                <h1 className='dashboard-title'>Catalogues</h1>
                <h6 className='dashboard-subtitle'>Select a catalogue to add or edit menu items</h6>
            </div> 
            <div className='new-catalog-container'>
                <ButtonPrimary className='new-catalog-btn'>
                    <span className='new-catalog-btn-icon'><FaPlus /></span> 
                    <span className='new-catalog-btn-txt'>New Catalogue</span>
                </ButtonPrimary>
            </div>
        </header>
        <div className='catalog-list-container'>
                
        </div>
      </Box>
    </div>
  );
}



export default Dashboard;