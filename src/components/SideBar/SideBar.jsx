import React from 'react'
import { Box, NavLink } from '@mantine/core';
import { FaUser, FaHouseUser, FaHotel, FaBookReader, FaComments, FaMapMarkerAlt } from "react-icons/fa";
import "./sidebar.scss"
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Box sx={{ width: 240 }}>
        {/* <Link to="/admin"><NavLink label="Báo Cáo" icon={<FaHouseUser size={16} stroke={1.5} />} /></Link> */}
          <Link to="/admin/users"><NavLink label="Quản Lý Khách Hàng" icon={<FaUser size={16} stroke={1.5} />}/></Link>
          <Link to="/admin/rooms"><NavLink label="Quản Lý Phòng" icon={<FaHotel size={16} stroke={1.5} />}/></Link>
          <Link to="/admin/bookings"><NavLink label="Quản Lý Đặt Phòng" icon={<FaBookReader size={16} stroke={1.5} />}/></Link>
          <Link to="/admin/comments"><NavLink label="Quản Lý Bình Luận" icon={<FaComments size={16} stroke={1.5} />}/></Link>
          <Link to="/admin/locations"><NavLink label="Quản Lý Địa Điểm" icon={<FaMapMarkerAlt size={16} stroke={1.5} />}/></Link>
        {/* <NavLink label="Quản Lý Khách Hàng" icon={<FaUser size={16} stroke={1.5} />} childrenOffset={28}>
          <Link to="/admin/users"><NavLink label="Danh Sách Khách Hàng" /></Link>
          <NavLink label="Thêm Khách Hàng" />
        </NavLink> */}

        {/* <NavLink label="Quản Lý Phòng" icon={<FaHotel size={16} stroke={1.5} />} childrenOffset={28}>
          <NavLink label="Danh Sách Phòng" />
          <NavLink label="Thêm Phòng" />
        </NavLink> */}

        {/* <NavLink label="Quản Lý Đặt Phòng" icon={<FaBookReader size={16} stroke={1.5} />} childrenOffset={28}>
          <NavLink label="Danh Sách Đặt Phòng" />
          <NavLink label="Thêm Đặt Phòng" />
        </NavLink>

        <NavLink label="Quản Lý Bình Luận" icon={<FaComments size={16} stroke={1.5} />} childrenOffset={28}>
          <NavLink label="Bình Luận" />
          <NavLink label="Thêm Bình Luận" />
        </NavLink>

        <NavLink label="Quản Lý Địa Điểm" icon={<FaMapMarkerAlt size={16} stroke={1.5} />} childrenOffset={28}>
          <NavLink label="Danh Sách Địa Điểm" />
          <NavLink label="Thêm Địa Điểm" />
        </NavLink> */}
      </Box>
    </div>
  )
}

export default SideBar