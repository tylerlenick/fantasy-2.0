import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';



const drawerWidth = 240;
  
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});
 

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
     <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <h2>Fantasy Scraper<svg width="24px" height="24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M7.5,7.5C9.17,5.87 11.29,4.69 13.37,4.18C15.46,3.67 17.5,3.83 18.6,4C19.71,4.15 19.87,4.31 20.03,5.41C20.18,6.5 20.33,8.55 19.82,10.63C19.31,12.71 18.13,14.83 16.5,16.5C14.83,18.13 12.71,19.31 10.63,19.82C8.55,20.33 6.5,20.18 5.41,20.03C4.31,19.87 4.15,19.71 4,18.6C3.83,17.5 3.67,15.46 4.18,13.37C4.69,11.29 5.87,9.17 7.5,7.5M7.3,15.79L8.21,16.7L9.42,15.5L10.63,16.7L11.54,15.79L10.34,14.58L12,12.91L13.21,14.12L14.12,13.21L12.91,12L14.58,10.34L15.79,11.54L16.7,10.63L15.5,9.42L16.7,8.21L15.79,7.3L14.58,8.5L13.37,7.3L12.46,8.21L13.66,9.42L12,11.09L10.79,9.88L9.88,10.79L11.09,12L9.42,13.66L8.21,12.46L7.3,13.37L8.5,14.58L7.3,15.79Z" />
      </svg></h2>

      <Divider />

      <h4>My Team</h4>
      <div className={classes.search}>
              
              <InputBase       
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Button variant="contained" color="primary" className={classes.button}>
                Primary
              </Button>
        </div>
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </Drawer>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
