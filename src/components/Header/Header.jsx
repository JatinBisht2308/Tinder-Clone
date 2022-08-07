import React from 'react';
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import {IconButton} from "@mui/material";
import {SiTinder} from "react-icons/si";
const Header = () => {
  return (
    <div className='header' >
      <IconButton>
      <PersonIcon className="header-icons" fontSize="large" />
      </IconButton>
      <SiTinder className="tinder-logo" />
      <IconButton>
      <ForumIcon className="header-icons" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header
