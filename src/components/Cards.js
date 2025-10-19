import React from 'react'

export default function Cards({image,name}) {
  return (
    <div>
        
    <div>
        <div className="card mt-3" style={{"width":"17rem" , "maxHeight":"500px" }}>
        <img src={image} className="card-image-top " alt="{name}"/>
        <h1>{name}</h1>
        <div className="card-body">
        <select className='m-2 h-100 bg-success rounded'>
            {Array.from(Array(6),(e,i)=>{
                return(
                    <option Key={i+1} value={i+1}> {i+1}</option>
                )
            })}
        </select>
        
<select class="form-select" aria-label="Default select example">
  <option selected>select size</option>
  <option value="1">half</option>
  <option value="2">full</option>
  
</select>

        <h5 className="card-title">Card</h5>
        
   
        </div>
        </div>
    </div>
    </div>
  )
}
