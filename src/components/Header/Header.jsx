import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import {SiTinder} from "react-icons/si";
const Header = () => {
  return (
    <div className='header' >
      <PersonIcon className="header-icons" fontSize="large" />
      <SiTinder />
      <ForumIcon className="header-icons" fontSize="large" />
    </div>
  )
}

export default Header
