import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ach1 from '../../public/images/achievements/1stach.png'
import ach2 from '../../public/images/achievements/2ndach.png'
import ach3 from '../../public/images/achievements/3rdach.png'
import ach4 from '../../public/images/achievements/ait.png'
import {motion} from "framer-motion"

const FramerImage = motion(Image);

const Featured = ({img,title,time,summary,link})=>{
   return (
      <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl '>
         <div className='absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark/90' />
         <Link className='w-full inline-block  cursor-pointer overflow-hidden rounded-lg ' href={link} target="_blank">
                <FramerImage src={img} alt={title} className='w-full h-auto border-2 border-dark'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}></FramerImage>
         </Link>
         <Link href={link} target="_blank">
            <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
         </Link>
         <p className='text-sm mb-2'>{summary}</p>
         <span className='text-primary font-semibold'>{time}</span>
      </li>
   )
}

const achievements = () => {
  return (
    <>
      <Head>
            <title>Siddhesh Shreeram Borse</title>
            <meta name="description" content="This is the achievement page" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
         <Layout className='pt-16'>
            <AnimatedText className='!text-7xl mb-16' text="goal towards achievements !"/>
            <ul className='grid grid-cols-2 gap-16'>
                  <Featured
                  title ="Runner up in AIT Cricket Tournament"
                  summary = "Our team demonstrated outstanding performance throughout the tournament, displaying exceptional skills in batting, bowling, and fielding. From the initial matches to the final, every player contributed to the team's success, leading us to the runner-up position.
                  "
                  time="April, 2024"
                  link="#"
                  img ={ach1}
                  />

                  <Featured
                  title ="3rd Rank in MITADT Cricket Tournament"
                  summary = "Securing the 3rd rank in the MITADT Cricket Tournament was a testament to our team's resilience, skill, and unwavering spirit. Competing against some of the most talented teams from various institutions, we demonstrated exceptional performance and strategic prowess throughout the matches. Our journey was marked by thrilling victories and hard-fought battles, showcasing our ability to adapt and excel under pressure."
                  time="Feb, 2023"
                  link="/"
                  img ={ach2}
                  />

                  <Featured
                  title ="Runner up in Kabaddi Tournament"
                  summary = "Achieving the runner-up position in the Kabaddi Tournament was a significant milestone for our team, reflecting our exceptional teamwork, strategic thinking, and sheer determination. Throughout the competition, we faced formidable opponents and intense matches, demonstrating our prowess in both offense and defense. Each player contributed their best, showing remarkable agility, strength, and tactical acumen."
                  time="March, 2022"
                  link="#"
                  img ={ach3}
                  />

                  <Featured
                  title ="Third Rank in Football 6v6 Tournament"
                  summary = "The AIT Football 6v6 Tournament held in Pune, featuring 60 teams, witnessed a fierce competition where our team excelled and secured the third rank. Throughout the tournament, this team displayed exceptional skill, strategic acumen, and remarkable teamwork, triumphing over strong adversaries to reach the top three. Their consistent performances and unwavering determination garnered recognition and admiration from event organizers, fellow participants, and supporters alike. Achieving the third rank in this highly competitive tournament is a testament to their hard work, perseverance, and commitment to excellence."
                  time="April, 2023"
                  link="https://www.linkedin.com/feed/update/urn:li:activity:7036018652785094657/"
                  img ={ach4}
                  />
            </ul>
         </Layout>
      </main>
    </>
  )
}

export default achievements