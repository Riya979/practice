import { Button, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { AllLEssons } from "../pages/alllessons";
import { Layout } from "../layout/layout";
import { Login } from "../pages/Login.page";
import { Register } from "../pages/Register.page";
import { Home } from "../pages/Home.page";
import About from "../pages/About.page";




export const EntryRoads={
    path:'/',
    element:(
        <div>
            <Paper>
                <h1>Content</h1>
                <Link to="/all-lessons"><Button variant="outlined" color="success">Lessons</Button></Link>
                <br/>
                <br/>
                <Link to="/project/login"><Button variant="outlined" color="success">Projects</Button></Link>
            </Paper>
        </div>)



    

};

export const allLessons={
    path:'/all-lessons',
    element:<AllLEssons/>
}
export const AllProject={
    path:'/project',
    element:<><Layout><Outlet/></Layout></>,
    children:[
{
    path:'login',
    element:< Login/>
},
{
    path:'register',
    element:<Register/>
},
{
    path:'home',
    element:<Home/>
},
{
    path:'about',
    element:<About/>
}
    ]
}