import React from 'react'
import Title from '../components/Title'
import { assets } from '../components/assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {

  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias voluptatum aspernatur quasi, labore consectetur repellendus, non ducimus tenetur dolorum similique reprehenderit. Voluptatibus mollitia commodi id est quam atque facere?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe atque ipsa, harum consequatur non optio a ut sed, dolores perferendis. Labore reprehenderit deserunt mollitia quae, sit velit at et quas voluptatibus repudiandae asperiores blanditiis illum esse iste quibusdam, odio doloremque eos cumque non ut hic! Atque recusandae explicabo vitae!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission dolor sit amet consectetur adipisicing elit. Repellat, corporis et impedit voluptatum eum inventore distinctio quis excepturi aliquid! Architecto, laborum rerum rem magni molestiae corrupti hic facere perferendis quod?</p>
       </div>
      </div>
      
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assuarance</b>
          <p className='text-gray-800'>We metriculously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-800'>With our user-friendly interface and hassle-free ondering process, shopping has nevr been easier</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Service</b>
          <p className='text-gray-800'>Our team of dedicated professionals is here to assist you the way, ensuring a good service for you is our priorty</p>
        </div>
      </div>
        <NewsletterBox />
    </div>
  )
}

export default About;