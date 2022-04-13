// .........API.................AXIOS.......................................

import React, { useEffect } from 'react'
import { useState } from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import axios from 'axios';


const Page = () => {

    // state
    var [myPage,setMyPage]=useState("Home Page");
    var [data,setData]=useState([]);

    
  // useEffect
  useEffect(() => {
     loadDataFromApi()
    console.log("page reload")
   }, [myPage]);

    // fn homepage
const setToHomePage=()=>{
    setMyPage("Home Page")
}
    // fn gallery page
    const setToGalleryPage=()=>{
        setMyPage("Gallery Page")
    }
    // fn contact page
    const setToContactPage=()=>{
        setMyPage("Contact Page")
    }

    // load API
  const loadDataFromApi=()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      (response)=>{
        console.log(response.data)
        setData(data=response.data)
      }
    )
  }

    // main program
  return (
    <div>
        <Button onClick={setToHomePage} color="secondary" variant="contained">Home Page</Button>
        <Button onClick={setToGalleryPage} color="primary" variant="contained">Gellery Page</Button>
        <Button onClick={setToContactPage} color="secondary" variant="contained">Contact Page</Button>
        <Typography variant="h2">ICT Academy{myPage}</Typography>
      
      {/* .......table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell>Title </TableCell>
            <TableCell> UserId </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
           {data.map((value,index)=>{

            return<TableRow>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.title}</TableCell>
            <TableCell>{value.userId}</TableCell>
          </TableRow> 
})}   
          
        </TableBody>

      </Table>

    </div>
  )
}

export default Page




// ...........change name....start............................................................

// import { Button } from '@mui/material'
// import React, { useState } from 'react'

// const Page = () => {

//     var [name,setName]=useState("Hazeena")

//     const changeName=()=>{
//         setName("Richu")

//     }


//   return (
//     <div>
//        <h1>Welcome {name}</h1>
//       <Button onClick={changeName}>click here to change name</Button>
//     </div>
//   )
// }

// export default Page

// ...........................change name _endss..........................................



// ...............counter_app.........start........................................
// import { Button } from '@mui/material'
// import React, { useState } from 'react'

// const Page = () => {
//     var [count,setCount]=useState(0)

//     const incrementfn=()=>{
//         setCount(count=count+1)
//     }
//  const decrementfn=()=>{
//      setCount(count=count-1)
//  }
//   return (
//     <div>

//         <h1>{count}</h1>
//         <Button margin="normal" color="secondary" variant='contained'onClick={incrementfn}>+</Button>
//         <Button margin="normal" color="primary" variant='contained'onClick={decrementfn}>-</Button>
     
//     </div>
//   )
// }

// export default Page


// ...............counter app endss.........................................................


// import React from 'react'

// const Page = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Page


// ...............ict gallery home contact page toggle .......start.......................


// import { Button, Typography } from '@mui/material'
// import React, { useState } from 'react'

// const Page = () => {
//     var[myPage,setMypage]=useState("Home Page")

//     const setToGalleryPage=()=>{
// setMypage("Gallery Page")
//     }
//     const setToHomePage=()=>{
//         setMypage("Home Page")
//             }
//             const setToContactPage=()=>{
//                 setMypage("Contact Page")
//                     }
//   return (
//     <div>
//         <Button margin="normal" color="secondary" variant='contained'onClick={setToHomePage}>Home</Button>
//         <Button margin="normal" color="primary" variant='contained'onClick={setToGalleryPage}>Gallery</Button>
//         <Button margin="normal" color="secondary" variant='contained'onClick={setToContactPage}>Contact</Button>
//         <Typography variant='h1'>Welcome {myPage}</Typography>
      
//     </div>
//   )
// }

// export default Page





// ..................ict gallery home contact page toggle .......ends.......................
