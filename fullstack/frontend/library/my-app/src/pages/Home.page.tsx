import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import flipkartApi from "../api/flipkart";
import { Mycarousel } from "../components/carousel/Mycarousel";
import { MyNavbar } from "../components/Navbar/MyNavbar";
import img1 from '../static/img/1.jpg';
import { Mycard } from "../components/card/Mycard";




export const Home:React.FC<{}>=()=>{

    let [data,setData]=useState<any>([]);
            useEffect(()=>{
        (async()=>{
            setData(await flipkartApi()) 
        })()
            },[])
        return <> HOME PAGE
       < Link to={'/project/about'}>
  <Button variant="text">About us</Button> 
 </Link> 

    
    <br /><Grid

            direction="row"
            justifyContent="center"
            alignItems="center"
        >

        <Mycarousel/>
        </Grid><br />
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Mycard img={img1} />
            <Mycard img={img1} />
            <Mycard img={img1} />
            <Mycard img={img1} />


            </Grid><h1>Static way </h1><br />
            <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            {data.map((item: any) => { return <Mycard img={item.image} />; })}


        </Grid>
        </>


}

