import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/aditya.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Sanjay Mule</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="Siddhesh" className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <div className='mt-8'>
              <AnimatedText text="Engineering Future, We Imagine." 
              className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>By harnessing the principles of mechanics and materials science, along with expertise in thermodynamics and fluid dynamics, I can develop innovative and efficient mechanical systems. This blend of skills empowers me to design and analyze complex machinery, optimize manufacturing processes, and implement sustainable engineering solutions.
              </p>
              <div className='flex items-center self-start  mt-2'>
              <Link href="/siddheshBorse_CV.pdf" target={"_blank"}
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
              download={true}
              >Resume
              <LinkArrow className={"w-6 ml-1"}/>
              </Link>
              <Link href="mailto:aditya.mule@mitaoe.ac.in" target={"_blank"}
              className='ml-4 text-lg font-medium capitalize text-dark underline'
              >Contact</Link>
              </div>
            </div>
            </div>
        </div>
        </Layout>
      </main>
    </>
  )
}