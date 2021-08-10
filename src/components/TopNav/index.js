import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import colors from '../../styles/colors';

function NTLink(props) {
  // const { to, children, exact } = props;
  const baseStyle = {
    // paddingLeft: 10,
    // paddingRight: 10,
    padding: 10,
    color: colors.logoYellow,
    textDecoration: 'none',
    fontFamily: 'helvetica',
    letterSpacing: 5,
    fontSize: 'x-small',
    opacity: 0.3
  };
  const activeStyle = {
    opacity: 0.7
  };
  return <NavLink {...props} style={baseStyle} activeStyle={activeStyle} />;
}

function TopNav(props) {
  return (
    <div
      style={{
        position: 'absolute',
        height: '5vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}
    >
      <NTLink to="/schedule">SCHEDULE</NTLink>
      <NTLink exact to="/">
        LANDING
      </NTLink>
      <NTLink to="/admin">ADMIN</NTLink>
    </div>
  );
}

export default TopNav;
