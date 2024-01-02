import { useRoutes } from "react-router-dom";
import { AllProject, EntryRoads, allLessons } from "./entry";

export default function AllRoads(){
    return useRoutes([EntryRoads,allLessons,AllProject])
}