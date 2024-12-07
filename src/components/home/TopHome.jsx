import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { PiHeadphones } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsUsbDrive } from "react-icons/bs";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import "../../styles/home/topHome.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopHome() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const topHomeArr = [
    {
      linkImage:"https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-home-iphone-16-pro-km-moi.jpg",
      title: "MỪNG KHAI TRƯƠNG",
      des :"Ưu đãi cực khủng"
    },
    {
      linkImage:"https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-home-iphone-16-pro-km-moi.jpg",
      title: "IPHONE 16 SERIES",
      des :"Mua ngay"
    },
    {
      linkImage:"https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-home-iphone-16-pro-km-moi.jpg",
      title: "GALAXY S24 ULTRA",
      des :"Giá tốt chốt ngay"
    },
    {
      linkImage:"https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-home-iphone-16-pro-km-moi.jpg",
      title: "IPAD MINI 7",
      des :"Mua ngay"
    },
    {
      linkImage:"https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/sliding-home-iphone-16-pro-km-moi.jpg",
      title: "TECNO CAMON 30S",
      des :"Săn deal bỏng tay"
    }
  ]
  const menuItems = [
    {
      title1: "Điện thoại, tablet",
      contentTitlePhone: [
        {
          category1: "Hãng điện thoại",
          contentTitleItem1: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category2: "Mức giá điện thoại",
          contentTitleItem2: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category3: "Điện thoại HOT",
          contentTitleItem3: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category4: "Hãng máy tính bảng",
          contentTitleItem4: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category5: "Máy tính bảng hot",
          contentTitleItem5: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 ", "Galaxy Tab S10 Series ", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title2: "Laptop",
      contentTitleAudio: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title3: "Âm thanh",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
         category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
         category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title4: "Đồng hồ, camera",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
         category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title5: "Đồ gia dụng",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title6: "Phụ kiện",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title7: "Pc, màn hình, máy in",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title8: "Tivi",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title9: "Thu cũ, đổi mới",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title10: "Hàng cũ",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title11: "Khuyễn mại",
      contentTitle: [
        {
         category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
          category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
          category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
    {
      title12: "Tin công nghệ",
      contentTitle: [
        {
          category: "Hãng điện thoại",
          contentTitleItem: ["Iphone", "SamSung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing phone", "Masstel", "Sony", "Itel"]
        },
        {
          category: "Mức giá điện thoại",
          contentTitleItem: ["Dưới 2 triệu", "Từ 2-4 triệu", "Từ 4-7 triệu", "Từ 7-13 triệu", "Từ 13-20 triệu", "Trên 20 triệu"]

        },
        {
         category: "Điện thoại HOT",
          contentTitleItem: ["Iphone 16 Series", "Iphone 15 ProMax", "Galaxy ZFold6", "Galaxy ZFilip6", "Galaxy S24 FE", "Oppo Find X8", "Realme 13+ 5G ", "Tecno Camon 30S", "Xiaomi 14T Pro", "Oppo reno12 5G", "Samsung Galaxy M55", " Xiaomi Redmi 14C", "POCO M6", "Redmi Note 13"]
        },
        {
         category: "Hãng máy tính bảng",
          contentTitleItem: ["Ipad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem thêm tất cả tablet"] 
        },
        {
          category: "Máy tính bảng hot",
          contentTitleItem: [" iPad Air 2024", "iPad Pro 2024", "iPad mini 7 HOT and NEW", "Galaxy Tab S10 Series HOT and NEW", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 6 256GB", "Huawei Matepad 11.5''S", "Xiaomi Pad SE", "Xiaomi Redmi Pad Pro", "Teclast M50"]
        }
      ]
    },
  ]
  return (
    
    <div className='topHome-container'>
      <div className='topHome-menuMain'>
   
    <div className='topHome-menuMain-item'>
   <div>
   <IoPhonePortraitOutline />
   <h2>Điện thoại, Tablet</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
   {menuItems.map((item, index) => {
    return (
      <div key={index} className='topHome-menuMain-item-pop-up-phoneCompany'>
        {item.contentTitlePhone?.map((phone, phoneIndex) =>{
          return (
            <div key={phoneIndex} className='topHome-menuMain-item-pop-up-phoneCompany-item'>
             <div className='item1'>
             <h3>{phone.category1}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem1?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item2'>
             <h3>{phone.category2}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem2?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item3'>
             <h3>{phone.category3}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem3?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item4'>
             <h3>{phone.category4}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem4?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item5'>
             <h3>{phone.category5}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem5?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
            </div>
          )
        })}
      </div>
    )
   })}
  
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <PiHeadphones />
   <h2>Âm thanh</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
   {menuItems.map((item, index) => {
    return (
      <div key={index} className='topHome-menuMain-item-pop-up-phoneCompany'>
        {item.contentTitleAudio?.map((phone, phoneIndex) =>{
          return (
            <div key={phoneIndex} className='topHome-menuMain-item-pop-up-phoneCompany-item'>
             <div className='item1'>
             <h3>{phone.category1}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem1?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item2'>
             <h3>{phone.category2}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem2?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item3'>
             <h3>{phone.category3}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem3?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item4'>
             <h3>{phone.category4}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem4?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
             <div className='item5'>
             <h3>{phone.category5}</h3>
              <ul className='item-list'>
                {phone.contentTitleItem5?.map((title, titleIndex) => {
                  return (
                    <li key={titleIndex}>{title}</li>
                  )
                })}
              </ul>
             </div>
            </div>
          )
        })}
      </div>
    )
   })}
  
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <LuAlarmClock />
   <h2>Đồng hồ, camera</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <IoHomeOutline />
   <h2>Đồ gia dụng</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <BsUsbDrive />
   <h2>Phụ kiện</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <BsPcDisplayHorizontal />
   <h2>PC, Màn hình, Máy in</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <FaTv />
   <h2>Tivi</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <PiHeadphones />
   <h2>Thu cũ đổi mới</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <PiHeadphones />
   <h2>Hàng cũ</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <AiOutlineSound />
   <h2>Khuyến mãi</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
    <div className='topHome-menuMain-item'>
   <div>
   <IoNewspaperOutline />
   <h2>Tin công nghệ</h2>
   </div>
   <MdOutlineKeyboardArrowRight/>
   <div className="topHome-menuMain-item-pop-up">
      <h1>hiển thị nội dung</h1>
    </div>
    </div>
   
      </div>
      <div className='topHome-sliding'>
        <div className='topHome-sliding-image'>
        <Slider {...settings}>
    {
      topHomeArr.map((item, index) => {
        return (
          <div key={index}>
            <img
            src={item.linkImage}
            alt='img'
            style={{
            }}
            />
          </div>
        )
      })
    }
    </Slider>
        </div>
        <div className='topHome-sliding-tab'>
       {
        topHomeArr.map((item, index) =>{
          return(
            <div key={index}>
              {item.title}
              <br></br>
              {item.des}
            </div>
          )
        })
       }
        </div>
      </div>
      <div className='topHome-rightBanner'>
        <a href=''>
            <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/home-m55-10190-12-11.png' alt=''></img>
        </a>
        <a href=''>
            <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/right-banner-14-10.jpg' alt=''></img>
        </a>
        <a href=''>
            <img src='https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/udsv-right-laptop.jpg' alt=''></img>
        </a>
      </div>
    </div>
  )
}

export default TopHome
