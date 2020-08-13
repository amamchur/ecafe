import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTranslation } from 'react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import MainMenu from '../Menu/MainMenu';
import Main from '../Main/Main';
import Dishes from '../Menu/Dishes';
import Drinks from '../Menu/Drinks';
import {Route, Switch} from 'react-router-dom';
import {Link, useLocation} from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Contacts from '../Contacts/Contacts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  listRoot: {
    width: 240
  },
  switchContainer: {
    paddingTop: theme.spacing(6)
  }
}));

function App() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState('/');
  const location = useLocation();

  React.useEffect(() => {
    document.title = t('title.ecafe');
  }, [t]);

  React.useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };

  const openMenu = (event)=>{
    setAnchorEl(event.currentTarget);
  };

  const openDrawer = ()=>{
    setOpen(true);
  };

  const closeDrawer = ()=>{
    setOpen(false);
  };

  const routes = [{
    text: t('route.home'),
    link: '/',
    icon: <HomeIcon />,
    regex: /^\/$/
  }, {
    text: t('route.menu'),
    link: '/menu',
    icon: <FastfoodIcon />,
    regex: /^\/menu/
  }, {
    text: t('route.contacts'),
    link: '/contacts',
    icon: <ImportContactsIcon />,
    regex: /^\/contacts/
  }];

  const renderList = () => (
    <List classes={{root: classes.listRoot}}>
      {routes.map((item, index) => (
        <ListItem
          button
          component={Link}
          key={index}
          to={item.link}
          onClick={closeDrawer}
          selected={!!currentRoute.match(item.regex)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} primaryTypographyProps={{noWrap: true}}/>
        </ListItem>
      ))}
    </List>
  );
  
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar variant='dense'>
          <IconButton edge='start' color='inherit' onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>{t('title.ecafe')}</Typography>
          <IconButton color='inherit' edge='end' onClick={openMenu}>
            <LanguageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={closeDrawer}>
        {renderList()}
      </Drawer>
      <div className={classes.switchContainer}>
        <Switch>
          <Route exact path='/'><Main/></Route>
          <Route path='/menu'><MainMenu/></Route>
          <Route path='/dishes'><Dishes/></Route>
          <Route path='/drinks'><Drinks/></Route>
          <Route path='/contacts'><Contacts/></Route>
        </Switch>
      </div>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage('ua')}>{t('language.ua')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>{t('language.en')}</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
