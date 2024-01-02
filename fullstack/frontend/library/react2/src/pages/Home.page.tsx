import { useEffect, useState } from "react";
import { flipkartApi } from "../api/flipkart";
import { MyNavbar } from "../components/Navbar/MyNavbar";
import { Button, Grid } from "@mui/material";

import { Mycard } from "../components/Card/MyCard";
import img1 from '../static/img/1.jpg';
import { Mycarousel } from "../components/Carousel/MyCarousel";
import { Link } from "react-router-dom";

export const Home:React.FC<{}>=()=>{

let [data,setData]=useState<any>([]);
        useEffect(()=>{
    (async()=>{
        setData(await flipkartApi()) 
    })()
        },[])
    return <> HOME PAGE

<Link to={'/project/about'}>
  <Button variant="text">About us</Button> 
 </Link> 

    
    <br /><Grid

            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Mycarousel />
        </Grid><br /><Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Mycard img={img1} />
            <Mycard img={img1} />
            <Mycard img={img1} />
            <Mycard img={img1} />

        </Grid><h1>Static way </h1><br /><Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            {data.map((item: any) => { return <Mycard img={item.image} />; })}


        </Grid></>


}
