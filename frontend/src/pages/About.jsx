import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>


      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to BookDr— your trusted, intelligent healthcare assistant that simplifies doctor selection, appointment booking, and health record management using the power of AI and modern technology. <br />We’re here to make healthcare more accessible, personalized, and effortless — right when you need it.</p>
          <p>BookDr is committed to transforming healthcare through intelligent technology by continuously enhancing our platform with the latest advancements to deliver a seamless user experience. Whether you're booking your first appointment or managing ongoing care, BookDr is here to support you at every step. Users can describe their symptoms in simple language, and our AI-powered system recommends the most suitable specialist—saving time and reducing confusion. With quick appointment booking, multilingual support, and smart assistance for common queries through advanced RAG-based retrieval, BookDr ensures personalized, accessible, and efficient healthcare for everyone.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at BookDr is to create a seamless, AI-driven healthcare experience that bridges the gap between patients and healthcare providers — empowering users to access the right care, manage appointments effortlessly, and communicate in their preferred language, all with speed, simplicity, and confidence.</p>
        </div>
      </div>

      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US?</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold'>SEVAK?</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>AI-Powered Doctor Matching</b>
          <p>Describe your symptoms in simple words, and our smart assistant instantly recommends the most suitable specialist — no medical jargon needed.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Seamless Appointment Booking</b>
          <p>Schedule appointments with just a few clicks. No long queues, no confusion — just fast, efficient healthcare access.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Multilingual & Smart Support</b>
          <p>Communicate in peferred langauge and get instant answers to common queries like cancellations or policies through our advanced AI support system.</p>
        </div>
      </div>

    </div>
  )
}

export default About
