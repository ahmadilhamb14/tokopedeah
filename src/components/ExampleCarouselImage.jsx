import React from 'react'

const ExampleCarouselImage = (props) => {
    const{url, text} = props
  return (
    <div className='myimage'>
        <img
          className="d-block w-75"
          src={url}
          alt={text}
        />      
    </div>
    )
}

export default ExampleCarouselImage