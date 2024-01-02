import { Button,Paper } from "@mui/material"
import { Link } from "react-router-dom"
import { AllLEssons } from "../pages/AllLessons"


export const EntryRoads={
    path:'/',
    element:<div>
        <Paper>
            <h1>Where to go??</h1>
            <Link to = "/all-lessons">
                <Button variant="outlined" color="success">Lessons</Button>
            </Link>
            <Button variant="outlined" color="success">Project</Button>
        </Paper>
    </div>
}
export const AllLessons={
    path:'/all-lessons',
    element:<AllLEssons/>
}