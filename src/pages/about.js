import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilepic from "../../public/images/profile/aditya2.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null); 
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:4000});
    const isInview = useInView(ref,{once:true});

    useEffect(() => {
      if(isInview){
        motionValue.set(value);
      }
    }, [isInview,value,motionValue])

    useEffect(() => {
      springValue.on("change", (latest)=>{
         if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
         }
      })
    }, [springValue,value])
    
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Aditya Sanjay Mule</title>
            <meta name="description" content="This is the about page" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16 !text-7xl' text="Design, Develop & Optimize!"/>
                <div className='grid w-full grid-cols-8 gap-16 '>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                        Hi, I am Aditya Mule, a Mechanical Engineer with a passion for designing innovative, functional, and user-centered mechanical systems, as well as solving complex engineering problems. With a curiosity to learn and grow, I aspire to collaborate with the brightest minds in India to optimize my skills and contribute to cutting-edge projects.
                        </p>
                        <p className='font-medium my-4'>
                        I firmly believe that engineering goes beyond mere technical specifications; it is about solving problems and crafting intuitive, efficient solutions for users. With this mindset, I strive to optimize my approach, focusing on problem-solving and creating designs that are not only technically sound but also highly functional and user-friendly.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image src={profilepic} alt="name" className="w-full h-auto rounded-2xl"/>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-6xl font-bold'>
                                <AnimatedNumbers value={62}/>
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Nptel Score</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-6xl font-bold'>
                                <AnimatedNumbers value={10}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Cricket Tournaments</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-6xl font-bold'>
                                <AnimatedNumbers value={5}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Kabaddi Tournaments</h2>
                        </div>
                    </div>
                </div>
                <Experience/>
                <Skills/>
                <Education/>
                
            </Layout>
        </main>
    </>
  )
}

export default about