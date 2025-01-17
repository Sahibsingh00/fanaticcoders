"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <section className='hero'>
      <div className='tfc_container'>
        <div className='hero_inner'>
          <div className='flex-1 lg:pt-36 sm:pt:16 padding-x'>
            <h1 className='hero__title pt-12'>Developing Websites That Stand Out</h1>
            <p className='hero__subtitle'>We Build Stunning Websites that Work for Your <br/> Business</p>
            <CustomButton
              title="Get Started"
              containerStyles="bg-black text-white mt-10 px-8 py-4"
              handleClick={handleScroll}
            />
          </div>
          <div className='hero__image-container'>
            <div className="hero__image">
              <Image src="/images/hero.png" alt="Hero image" fill className='object-contain' priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero