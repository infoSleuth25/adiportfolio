import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Liicons from './Liicons'


const Details = ({position, company, companyLink,time, address , work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Liicons reference={ref} />
        <motion.div
        initial = {{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target={"_blank"}
            className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'> 
                {time} | {address}
            </span>
            <p className='font-medium w-full'> 
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start end","center start"]
    });
  return (
    <div className='my-60'>
        <h2 className='font-bold text-7xl mb-32 w-full text-center'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Summer Internship"
                company="Dasmesh Airconditioning"
                companyLink="https://www.justdial.com/Mumbai/Dasmesh-Airconditioning-Engineers-Pvt-Ltd-Near-Hdfc-Bank-Vashi-Sector-17/022P5900286_BZDET"
                time="Jun, 2023 - Aug, 2023"
                address="Mumbai, Maharashtra."
                work="Dasmesh Airconditioning is a reputed company specializing in the design, installation, and maintenance of HVAC (Heating, Ventilation, and Air Conditioning) systems. The company is known for its innovative solutions, quality service, and commitment to sustainability. It serves a diverse clientele, including residential, commercial, and industrial sectors, ensuring optimal indoor climate control and energy efficiency."
                />
                
            </ul>
        </div>
    </div>
  )
}

export default Experience