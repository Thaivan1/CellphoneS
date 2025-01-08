import React, { useEffect, useState } from 'react'
import { IoIosListBox } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { TbPhone } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import "../../styles/home/header.css"
import { Link } from 'react-router';

function Header() {
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
const handleResize = () => setWindowWidth(window.innerWidth)
window.addEventListener("resize", handleResize)
return () => window.removeEventListener("resize", handleResize)
}, [])
  
    console.log(WindowWidth)
  return (
  <div className='header-bccolor'>
      <div className='header-container'>
    <div className='header-logo'>
        <img src='https://www.homepaylater.vn/static/7558f9c71d6356dedc95925471b4e62e/7b48c/cell_phone_s_logo_f626c95055.jpg' alt='logo' >
        </img>
    </div>
    <div className='header-listBox'>
    <IoIosListBox />
    <p>Danh mục</p>
    </div>
    <div className='header-locationPrice'>
    <FaLocationDot />
    <div>
        <div>
            <p>Xem giá tại</p>
            <IoIosArrowDown />
        </div>
        <p>Hồ Chí Minh</p>
    </div>
    </div>
    <div className='header-search'>
    <IoMdSearch />
    <input type='text' placeholder='Bạn cần tìm gì?'></input>
    </div>
    <div className='header-phone'>
    <TbPhone />
    <div>
    {
        WindowWidth > 1100 ? <p>Gọi mua hàng <br/> 1800.2097</p> : <p>Gọi mua <br/> hàng 1800.2097</p>
    }
    
    </div>
    </div>
    <div className='header-locationDot'>
    <FaLocationDot />
    {
        WindowWidth > 1100 ? <h2>Cửa hàng <br/> gần bạn</h2> : <h2>Cửa <br/> hàng gần bạn</h2>
    }
    </div>
    <div className='header-truckDelivery'>
    <TbTruckDelivery />
    <h2>Tra cứu <br/> đơn hàng</h2>
    </div>
    <div className='header-shoppingBag'>
    <FaShoppingBag />
    <h2>Giỏ <br/> hàng</h2>
    </div>
    <div className='header-userLogin'>
    <FaRegCircleUser />
    <h2>
    <Link to="/login">Đăng nhập</Link>
    </h2>
    </div>
    </div>
  </div>
  )
}





export default Header
