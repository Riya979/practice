import { useRoutes } from "react-router-dom";
import { AllLessons, EntryRoads } from "./entry";


export default function AllRoads(){
    return useRoutes([EntryRoads,AllLessons])
}