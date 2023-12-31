
import {MdPersonOutline} from 'react-icons/md';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Lorem ipsum is a commonly used placeholder text in the printing and typesetting industry. It is used when the actual text is not yet available, and the focus is on the design and layout of a document.',
      client: 'Mohamed Nabeel',
    },
    {
      text: 'Lorem ipsum is a commonly used placeholder text in the printing and typesetting industry. It is used when the actual text is not yet available, and the focus is on the design and layout of a document.',
      client: 'Mohamed Nabeel',
    },
    {
      text: 'Lorem ipsum is a commonly used placeholder text in the printing and typesetting industry. It is used when the actual text is not yet available, and the focus is on the design and layout of a document.',
      client: 'Mohamed Nabeel',
    },
  ];
  return (
    <section id='testimonials' className="bg-bg_primary dark:bg-black dark:text-white">
      <div className="max-container  font-jost padding-y ">
        {/* <div> */}
          <div className="absolute bg-primary w-64 h-4 mt-9 left-1/2 transform -translate-x-1/2 -z-10" />
          <h1 className="text-center text-4xl font-semibold">Testimonials.</h1>
          <p className="text-center text-xl font-medium padding-x">
            Here are some testimonials from our clients.
          </p>
        {/* </div> */}
        <div className="padding-x padding-y grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {testimonials.map ((testimonial, index) => (
            <div key={index} className=" text-center ">

              {/* <FontAwesomeIcon className='border-solid border-bg_primary border-8 bg-black_sec rounded-full text-4xl text-white  p-5 ' icon={faUser} /> */}
              <MdPersonOutline className="bg-black_sec dark:bg-primary text-white text-8xl mx-auto rounded-full p-5 z-1 relative border-solid dark:border-black border-bg_primary border-8" />
              <div className="padding-x mt-[-45px] pt-16 pb-7 rounded-md text-white bg-black_sec z-0">

                <p className="font-regular  text-lg mb-7">{testimonial.text}</p>
                <p className="font-medium text-xl mb-7">{testimonial.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
