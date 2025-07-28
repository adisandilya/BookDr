import React, { useContext } from 'react'
import { AdminContext } from '../contexts/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../contexts/DoctorContext'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)


  return (
    <div className='min-h-screen bg-white border-r'>
      {
        dToken && <ul className='text-[#515151] m-5'>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'/doctor-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p className='hidden:md:block'>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'doctor-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p className='hidden:md:block'>Appointments</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'/doctor-profile'}>
                <img src={assets.people_icon} alt="" />
                <p className='hidden:md:block'> Profile</p>
            </NavLink>

        </ul>
      }

      {
        aToken && <ul className='text-[#515151] m-5'>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p className='hidden:md:block'>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'all-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p className='hidden:md:block'>Appointments</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'/add-doctor'}>
                <img src={assets.add_icon} alt="" />
                <p className='hidden:md:block'>Add Doctors</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3  md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary': ''}`} to={'/doctor-list'}>
                <img src={assets.people_icon} alt="" />
                <p className='hidden:md:block'>Doctor List</p>
            </NavLink>

        </ul>
      }
    </div>
  )
}

export default Sidebar
