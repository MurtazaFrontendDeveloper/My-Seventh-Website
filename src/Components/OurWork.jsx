import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion, stagger } from 'motion/react'

const OurWork = () => {
    
    const ourWork = [
        {
            img: assets.work_mobile_app,
            title: 'Mobile App marketing',
            description: 'We turn bold idea into powerfull digital solution that connect, engage...'
        },
        {
            img: assets.work_dashboard_management,
            title: 'Dashboard Management',
            description: 'We help ypi execute your plan and dliver results.'
        },
        {
            img: assets.work_fitness_app,
            title: 'Fitness App promotion',
            description: 'We help you creat a marketing strategy that drives results.'
        },
    ]

    return (
    <div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren: 0.2}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <Title title='Our lates Work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                ourWork.map((work,index)=>(
                    <motion.div
                    initial={{opacity: 0, y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.5, delay: index * 0.2 }}
                    viewport={{once:true}}
                    key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.img} className='w-full rounded-xl' alt="" />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                    </motion.div>
                ))
            }
        </div>


    </div>
    )
}

export default OurWork