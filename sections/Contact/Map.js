import React from 'react'

export default function Map() {
  return (
    <div className='map-maindiv'>
        <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1576.8361057960071!2d-122.42040666215253!3d37.774283431721734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ2JzI3LjUiTiAxMjLCsDI1JzEyLjkiVw!5e0!3m2!1sen!2sus!4v1686736155817!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
