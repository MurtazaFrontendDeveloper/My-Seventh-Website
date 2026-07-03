import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const ConstactUs = () => {
    const [result, setResult] = React.useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0fd87714-66ea-4656-9a79-ba1256c4181c");

    try {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        toast.success(
            "Thank you! Murtaza will read your message as soon as possible.",
        {
            duration: 4000,
            style: {
            textAlign: "center",
            maxWidth: "400px",
        },
    }
);
        event.target.reset();
        } else {
        toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }

    
    };


    return (
    <div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    id='contact-us' className='flex items-center flex-col gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <motion.form
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.4}}
        viewport={{once:true}}
        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input name="name" type="text" placeholder='Enter Your name' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input name="email" type="email" placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea name="message" required rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/>
            </div>

            <button type='submit' className='w-max flex gap-2 bg-Primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                submit <img src={assets.arrow_icon} alt="" className='w-4'/>
            </button>

        </motion.form>

    </div>
    )
}

export default ConstactUs