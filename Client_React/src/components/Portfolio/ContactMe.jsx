import {useRef ,useState} from 'react'
import emailjs from '@emailjs/browser'

function ContactMe() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: ""
  });



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0on001p', 'template_fglnvvh', form.current, {
        publicKey: 'PEOAzDGl40c86FoFC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setFormValues({
        fullName: "",
        email: "",
        message: ""
      });
  };
 
  return (
    <div id='contact' className='text-white'>
      <div className="flex flex-col justify-center items-center mt-5 md:mt-40 mb-1 md:mb-5">
        <p className="text-sm md:text-lg text-neutral-400">Get in touch!</p>
        <h1 className="text-2xl md:text-5xl font-semibold ">Contact Me</h1>
        <p className='text-sm text-center md:text-lg text-neutral-400 m-2'>Please fill out the form below to discuss any work opportunities</p>
      </div>
      <div className='flex flex-col justify-around items-center'>
      <form ref={form} onSubmit={sendEmail} className=' flex flex-col md:w-1/2 justify-around items-center rounded-lg p-2   ' >
      
      <input type="text" name="from_name" value={formValues.fullName} onChange={(e) =>
            setFormValues({ ...formValues, fullName: e.target.value })} className='text-md text-black w-full rounded-lg m-4 p-2' placeholder="Your Name"/>
      
      <input type="email" name="from_email" value={formValues.email} onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })} className='text-md text-black w-full rounded-lg m-4 p-2' placeholder="Your Email"/>
      
      <textarea id="message" rows="4" name='message' value={formValues.message} onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })} className="block p-2.5 w-full m-4 text-md text-black rounded-lg border border-gray-300  "placeholder="Write here..... "></textarea>
      <button type="submit" value="Send" className='bg-gradient-to-r from-orange-400 to-orange-900 border border-white rounded-md text-lg text-black px-8 hover:cursor-pointer' >Submit</button>
    </form>
      </div>
    </div>
  );

}

export default ContactMe
