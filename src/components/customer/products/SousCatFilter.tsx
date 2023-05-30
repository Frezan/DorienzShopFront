import React from 'react'
//@ts-ignore
import { sousCategories } from '../../../services/category/souscat.js'

const SousCatFilter = ({ idCat }: any) => {

  let sousCatArray = sousCategories.filter((sousCat: any) => {
    return sousCat.idCat == idCat
  })

  return (
    <>
      {
        sousCatArray.map((sousCat: any) => {

          return (
            <div key={sousCat.id} className='filterOptions'>
              <div className="checkbox">
                <label className='filterLabel' ><input  type="checkbox" value={sousCat.name} /> {sousCat.name}</label>
              </div>
            </div>
          )
        })
      }
    </>
  )

}

export default SousCatFilter