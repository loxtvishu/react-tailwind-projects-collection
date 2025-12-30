import React from 'react'
import ImageContainer from './ImageContainer'

const Gallery = (props) => {
  return (
    <div className='h-[35%] w-full flex gap-1 justify-between px-1.5 pt-1.5'>
      {
        props.gallery.map(function (elem) {
          return <ImageContainer Containerclass="h-full w-[32%] overflow-hidden rounded-[10px] " imgclass ="h-full w-full transition-transform duration-500 hover:scale-110" src={elem} />
        })
      }
    </div>
  )
}

export default Gallery