import React from 'react'

const images = [
  {name:'img1',src:"masonryImages/img1.jpeg"},
  {name:'img2',src:"masonryImages/img2.jpeg"},
  {name:'img3',src:"masonryImages/img3.jpeg"},
  {name:'img4',src:"masonryImages/img4.jpeg"},
  {name:'img5',src:"masonryImages/img5.jpeg"},
  {name:'img6',src:"masonryImages/img6.jpeg"},
  {name:'img7',src:"masonryImages/img7.jpeg"},
  {name:'img8',src:"masonryImages/img8.jpeg"},
  {name:'img9',src:"masonryImages/img9.jpeg"},
  {name:'img10',src:"masonryImages/img10.jpeg"},
  {name:'img11',src:"masonryImages/img11.jpeg"},
  {name:'img12',src:"masonryImages/img12.jpeg"}
]

const ServicesPage = () => {
  return (
    <div  className="pt-20 dark:text-white md:padding-x max-md:px-3 dark:bg-black bg-bg_primary font-jost">
      <div className="columns-4 gap-6 max-md:columns-3 max-sm:columns-2  padding-y">
      {images.map((im)=>(
        <div key={im.name} >

        <img  className='w-full mb-6 rounded-3xl'  src={im.src} alt={im.name} />
        </div>
        ))}
        </div>
      
    </div>
  )
}

export default ServicesPage