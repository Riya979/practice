import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"

export const AllLEssons:React.FC<{}>=()=>{
    let [val,setVal]=useState('3')
    return <Box>
<h1>all lessons</h1>
<TabContext value={`${val}`}>
    <TabList onChange={(_e,num)=>{setVal(num)}}>
        <Tab label="useState" value="1"/>
        <Tab label="lesson2" value="2"/>
        <Tab label="lesson3" value="3"/>
    </TabList>
    <TabPanel value={"1"}>
      
    </TabPanel>
    <TabPanel value={"2"}>
        les2
    </TabPanel>
    <TabPanel value={"3"}>
        les3
    </TabPanel>
</TabContext>

    </Box>
}