import React from 'react'

const ProductListTags = (tags:any,key:any) => {
  return (
    <>
        { tags.tags.type === "Brand" &&  <small >{tags.tags.value}</small>
           
        }
    </>
  ) 
}

export default ProductListTags