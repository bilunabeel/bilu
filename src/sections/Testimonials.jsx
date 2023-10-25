import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {CgInstagram, CgCodeSlash} from 'react-icons/cg';
import {IoPersonOutline} from 'react-icons/io5';
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
    <div className="bg-bg_primary">
      <div className="max-container  font-jost padding-y ">
        {/* <div> */}
          <div className="absolute bg-yellow_primary w-64 h-4 mt-9 left-1/2 transform -translate-x-1/2 -z-10" />
          <h1 className="text-center text-4xl font-semibold">Testimonials.</h1>
          <p className="text-center text-xl font-medium padding-x">
            Here are some testimonials from our clients.
          </p>
        {/* </div> */}
        <div className="padding-x padding-y grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {testimonials.map ((testimonial, index) => (
            <div key={index} className=" text-center ">

              {/* <FontAwesomeIcon className='border-solid border-bg_primary border-8 bg-black_sec rounded-full text-4xl text-white  p-5 ' icon={faUser} /> */}
              <MdPersonOutline className="bg-black_sec text-white text-8xl mx-auto rounded-full p-5 z-1 relative border-solid border-bg_primary border-8" />
              <div className="padding-x mt-[-45px] pt-16 pb-7 rounded-md  bg-gray_primary z-0">

                <p className="font-regular text-lg mb-7">{testimonial.text}</p>
                <p className="font-medium text-xl mb-7">{testimonial.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
