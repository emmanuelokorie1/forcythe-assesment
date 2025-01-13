"use client";
import idea from '../../public/images/idea.svg';
import design from '../../public/images/design.svg';
import develop from '../../public/images/develop.svg';
import launch from '../../public/images/launch.svg';
import AnimatedText from '../AnimatedText';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';

function Spotlight() {

  const data = [
    { tab: "Idea", header: "Your vision is unique.", text: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.", img: idea },
    { tab: "Design", header: "Crafting the blueprint for success", text: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.", img: design },
    { tab: "Develop", header: "Turning blueprints into reality.", text: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.", img: develop },
    { tab: "Launch", header: "Your launchpad to the market.", text: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.", img: launch },
  ]

  const [currentTab, setCurentTab] = useState(data[0])
  return (
    <div className='contx py-[10px]'>
      <div className="text-white w-[65%] py-[20px] text-[3.5rem] sm:text-[4rem] lg:text-[2.6rem] leading-[1] mb-4 pt-[5rem]">
        <AnimatedText
          text="From Spark to Spotlight: we take you every step of the way to success."
          highlightedWords="Spark"
          highlightedWords2="Spotlight:"
        />
      </div>


      <section className='grid grid-cols-2'>
        <div>
          <div className='grid grid-cols-4 text-white border p-3 border-secondary2 rounded-[3rem]'>
            {data?.map((e, i) => {
              return (
                <div key={i} onClick={() => setCurentTab(e)} className={` text-center rounded-[3rem] cursor-pointer p-3 ${currentTab?.tab === e?.tab ? "bg-secondary2 text-black" : "text-white"}`}>
                  {e?.tab}
                </div>
              )
            })}
          </div>

          <div className='text-white w-full'>

            {data?.filter((item) => item?.tab === currentTab?.tab)?.map((e, i) => {
              return (
                <div key={i}>
                  <div className={`text-[2.2rem]  py-[2rem]`}>

                    <AnimatedText
                      text={e?.header}
                    />

                  </div>
                  <div className='text-[1rem] text-textGray'>
                    <AnimatedText
                      text={e?.text}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="py-10">
            <Button showPlayIcon={true} text="Book a Call" />
          </div>
        </div>

        <div>
          {data?.filter((item) => item?.tab === currentTab?.tab)?.map((e, i) => {
            return (
              <div key={i} className=' flex justify-center items-center'>
                <Image
                  alt={`project-image-${i}`}
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  className="overflow-hidden w-fit h-[340px] object-cover"
                  src={e?.img}
                />

              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Spotlight