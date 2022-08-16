import React from "react";
import "./Footer.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from '@mui/material/IconButton';
const Footer = () => {
  return (
    <div className="footer" >
      <IconButton  >
        <ReplayIcon className="footer-icons replay"  fontSize="large"/>
      </IconButton>
      <IconButton>
        <CloseIcon className="footer-icons close" fontSize="large"/>
      </IconButton>
      <IconButton>
        <StarRateIcon className="footer-icons star" fontSize="large"/>
      </IconButton>
      <IconButton>
        <FavoriteIcon className="footer-icons fav" fontSize="large"/>
      </IconButton>
      <IconButton>
        <FlashOnIcon className="footer-icons flash" fontSize="large"/>
      </IconButton>
    </div>
  );
};

export default Footer;
