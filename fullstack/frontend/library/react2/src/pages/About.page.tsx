import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const About:React.FC<{}>=()=>{
    let [comments,setComment] =useState<any>()
    return( <>
   <h1>Contact us </h1>
    Want to send feedback ?Need details ?Let us know <br></br>
    Your  comments
    <br></br>
    <TextField id="outlined-basic" label="comments"  variant="outlined"  onChange={(e)=>{setComment(e.target.value)}}/>
 <br />
    
 
    
    {/* <Link to={'/project/about'}>
    <Button variant="text">About us</Button>
    </Link> */}
    </>
    );
}
export default About;
