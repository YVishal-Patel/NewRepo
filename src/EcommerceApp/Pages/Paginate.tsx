import React, {useState, useEffect} from 'react'

const Paginate = ({totalPosts,postsPerPage,setCurrentPage}:any) => {
    let pages:any = []
    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage);i++){
    pages.push(i)
    }
    useEffect(()=>{
        console.log(pages)
    })
  return (
    <>
    <div>
     {pages?.map((item:any) =>{
     return(<div key ={item.id}> 
     <button onClick={()=>setCurrentPage(item)}>{item}</button>
     </div>) 
     })}
    </div>
    </>
  )
}

export default Paginate