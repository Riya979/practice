import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { MyHook } from "../components/reactshare/MyHook"
import { SocialMedisSharing } from "../components/reactshare/SocialMediaSharing"
import { MyProps } from "../components/props/Myprops"
import { MYuseEffect } from "../components/hooks/MyuseEffect"




export const AllLEssons:React.FC<{}>=()=>{
    let [val,setVal]=useState('3')
    return <Box>
<h1>Lessons:</h1>
<TabContext value={`${val}`}>
    <TabList onChange={(e,num)=>{setVal(num)}}>
        <Tab label="useState" value="1"/>
        <Tab label="share" value="2"/>
        <Tab label="fragment" value="3"/>
        <Tab label="Myprops" value="4"/>
        <Tab label="useEffect" value="5"/>
    </TabList>
    <TabPanel value={"1"}>
      <MyHook/>
    </TabPanel>
    <TabPanel value={"2"}>
        <SocialMedisSharing/>
    </TabPanel>
    <TabPanel value={"3"}>
        &lt; and &gt;
    </TabPanel>
    <TabPanel value={"4"}>
       <MyProps/>
    </TabPanel>
    <TabPanel value={"5"}>
        <MYuseEffect/>
    </TabPanel>
</TabContext>

    </Box>
}