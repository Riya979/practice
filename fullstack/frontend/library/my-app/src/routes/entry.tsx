import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { AllLEssons } from "../pages/alllessons";

export const EntryRoads={
    path:'/',
    element:(
        <div>
            <Paper>
                <h1>Content</h1>
                <Link to="/all-lessons"><Button variant="outlined" color="success">Lessons</Button></Link>
                <br/>
                <br/>
                <Link to="/project"><Button variant="outlined" color="success">Projects</Button></Link>
            </Paper>
        </div>
        )
};
export const allLessons={
    path:'/all-lessons',
    element:<AllLEssons/>
}
