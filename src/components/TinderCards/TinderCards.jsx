import React from 'react'
import './TinderCard.css'
import TinderCard from 'react-tinder-card';
// import { cardClasses } from '@mui/material';
const TinderCards = () => {
  // using hooks(hooks is nothing but just a function)
  const [bikes, setBikes] = React.useState([
    // creating the list of the bikes
    {
      name:"BMW s1000",
      url:"https://indwallpapers.com/wp-content/uploads/2021/07/BMW-S1000RR-Android-Wallpaper.jpeg"
    },
    {
      name:"Ducati Panigale",
      url:"https://w0.peakpx.com/wallpaper/699/721/HD-wallpaper-basil-ducati-v4s-beast-bike-panigale-red-sportsbike.jpg"
    },
    {
      name:"Suzuki Hayabhusa",
      url:"https://i.pinimg.com/564x/85/53/37/8553374b4495e0908f6bc9424c68f0c7.jpg"
    },
    {
      name:"Kawasaki Z900",
      url:"https://cutewallpaper.org/22/kawasaki-z400-wallpapers/450321896.jpg"
    },
    {
      name:"Honda CBR1000RR",
      url:"https://w0.peakpx.com/wallpaper/301/849/HD-wallpaper-cbr1000rr-colours-motorcycle.jpg"
    },
    {
    name:"Yamaha R1",
    url:"https://w0.peakpx.com/wallpaper/628/97/HD-wallpaper-yamaha-r1-bike-motorcycle-sports.jpg"
    },
    {
    name:"Suzuki GSXR1000",
    url:"https://w0.peakpx.com/wallpaper/255/979/HD-wallpaper-suzuki-gsx-r-bike-doctor-motorcycle.jpg"
    },
    {
    name:"KTM Duke 1290",
    url:"https://pictures.topspeed.com/IMG/crop_webp/202206/1290super-duke-r-evo-109-2_1600x0.webp"
    }
  ]);
      
  return (
    <div className='cards-container'>
     {
        bikes.map(bike => (
          <TinderCard className="swipe"
          key={bike.name}
          preventSwipe={['up','down']}
          >
            <div className='card'  
            style={{backgroundImage: `url(${bike.url})`}}
            >
             <h1>{bike.name}</h1>
            </div>
          </TinderCard>
        ))
     }
    </div>
  )
}

export default TinderCards
