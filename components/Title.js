import React from 'react'

export function TitleLg({title}) {
  return (
    <h1 className='title-large'>
         {title}
    </h1>
  )
}
export function TitleSm({title}) {
    return (
      <h1 className='title-small'>
           {title}
      </h1>
    )
  }

export function TitleSection({title, color}) {
  return (
    <h2 style={{color}} className='title-section'>
         {title}
    </h2>
  )
}

