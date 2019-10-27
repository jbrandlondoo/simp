import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux'
import { logout } from './../../store/action/index'


const styles = {

}

const Options = props =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () =>{
    handleClose()
    props.logout()
    localStorage.removeItem('authentication');
  }
//   ...props.styles
  return (
    <React.Fragment >
      <Button style={{color:'#FFF'}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        {props.name}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}


const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Options);
