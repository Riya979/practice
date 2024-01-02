import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'

export const MyProps:React.FC=()=>{
    let myarry=[img1,img2,img3]
    
    
        return <>PROPS CONCEPT<br></br>
        <img height={'200px'} src={img1}/>
        <img height={'200px'} src={img2}/>
        <img height={'200px'} src={img3}/>
       
        
       <h1>Second way of dispalying images using props</h1>
       <MyImg/>
       {MyImg()}
       <h1>Loop(Repeatation)</h1>
       {myarry.map((abc)=>{
        return <MyImg/>
       })}
    
       <h1>Different images</h1>
       {myarry.map((im)=>{
        return <MyImg2 gift={im}/>
       })}
        </>
    }
    
    let MyImg=()=>{
    return  <img height={'200px'} src={img2}/>
    }
    let MyImg2:React.FC<{gift:any}>=(props)=>{
    
        return  <img height={'200px'} src={props.gift}/>
        }
      
    