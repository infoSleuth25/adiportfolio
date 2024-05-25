import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name,x,y}) =>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
            whileHover={{scale:1.25}}
            initial = {{x:0,y:0}}
            whileInView = {{x:x , y:y}}
            transition = {{duration:1}}
            > 
                {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='mb-20 font-bold text-7xl mt-40 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
            whileHover={{scale:1.05}}
            >
               SKILLS
            </motion.div>
            <Skill name="Materials science" x="-12vw" y="-11vw"/> 
            <Skill name="Heat transfer" x="-14vw" y="15vw"/> 
            <Skill name="Dynamics" x="34vw" y="-16vw"/> 
            <Skill name="Statics" x="10vw" y="12vw"/> 
            <Skill name="Fluid mechanics" x="12vw" y="-5vw"/>
            <Skill name="Thermodynamics" x="-32vw" y="9vw"/> 
            <Skill name="CAD" x="-41vw" y="-4vw"/> 
            <Skill name="AutoCAD" x="-28vw" y="-13vw"/> 
            <Skill name="SolidWorks" x="13vw" y="-26vw"/> 
            <Skill name="CATIA" x="-15vw" y="25vw"/> 
            <Skill name="Fluent" x="14vw" y="-16vw"/>  
            <Skill name="PLC" x="22vw" y="23vw"/> 
            <Skill name="Maths" x="-13vw" y="3vw"/> 
            <Skill name="Simulation" x="25vw" y="7vw"/>
            <Skill name="Data Analysis" x="-3vw" y="-23vw"/>
            <Skill name="python" x="33vw" y="-5vw"/> 
            <Skill name="Numerical Analysis" x="-18vw" y="-25vw"/> 
            <Skill name="Sensors" x="3vw" y="22vw"/> 
            <Skill name="Actuators" x="40vw" y="5vw"/> 
        </div>
    </>
  )
}

export default Skills