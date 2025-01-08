import React, {useContext} from 'react';
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import '../../styles/home/featureProduct.css';
import featureProductDataTopPhone from '../../data/featureProductDataTopPhone';
import featureProductDataBottomPhone from '../../data/featureProductDataBottomPhone';
import featureProductDataTopLaptop from '../../data/featureProductDataTopLaptop';
import featureProductDataBottomLaptop from '../../data/featureProductDataBottomLaptop';
import featureProductDataPc from '../../data/featureProductDataPc';
import featureProductDataIpad from '../../data/featureProductDataIpad';
import featureProductDataSound from '../../data/featureProductDataSound';
import featureProductDataClock from '../../data/featureProductDataClock';
import featureProductDataDevice from '../../data/featureProductDataDevice';
import { Carousel } from 'antd';
import Slider from "react-slick";
const FeatureProduct = () => {
  const settings = {
    className: "center",
    infinite: false,
    arrows: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
};
  return (
    <div className="featureProduct-container">
      <div className="Phone-container">
        <div className="featureProduct-header">
          <a href="">Điện thoại nổi bật nhất</a>
          <ul className="featureProduct-list">
            <li>Apple</li>
            <li>SamSung</li>
            <li>Xiaomi</li>
            <li>OPPO</li>
            <li>vivo</li>
            <li>ASUS</li>
            <li>TECNO</li>
            <li>Nokia</li>
            <li>Infinix</li>
            <li>Nothinh</li>
            <li>Xem tất cả</li>
          </ul>
        </div>
        <div className="featureProduct-content-Phone">
         <div className='featureProduct-content-top'>
         <Slider {...settings}>
           {featureProductDataTopPhone.map((item, index) => (
                <div className="featureProduct-item1" key={index}>
                  <div className="item-head">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content">
                    <h1>{item.name}</h1>
                    <div className="item-price">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
         </div>
          <div className="featureProduct-content-bottom">
           <Slider {...settings}>
           {featureProductDataBottomPhone.map((item, index) => (
                <div className="featureProduct-item2" key={index}>
                  <div className="item-head">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content">
                    <h1>{item.name}</h1>
                    <div className="item-price">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        <br />
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div>  
</div> 

<div className='Laptop-container'>
<div className='featureProduct-header'>
    <a href=''>Laptop</a>
    <ul className='featureProduct-list'>
        <li>MacBook</li>
        <li>Asus</li>
        <li>MSI</li>
        <li>Lenovo</li>
        <li>HP</li>
        <li>Acer</li>
        <li>Dell</li>
        <li>Huawei</li>
        <li>Gigabyte</li>
        <li>Laptop AI</li>
        <li>Xem tất cả</li>
    </ul>
</div>
    <div className="featureProduct-content-Laptop">
          <div className="featureProduct-content-laptop-top">
           <Slider {...settings}>
           {featureProductDataTopLaptop.map((item, index) => (
                <div className="featureProduct-laptop-item1" key={index}>
                  <div className="item-head-top">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-top">
                    <h1>{item.name}</h1>
                    <div className="item-price-top">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-top">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-top">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
          <div className="featureProduct-content-laptop-bottom">
           <Slider {...settings}>
           {featureProductDataBottomLaptop.map((item, index) => (
                <div className="featureProduct-laptop-item2" key={index}>
                  <div className="item-head-bottom">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-bottom">
                    <h1>{item.name}</h1>
                    <div className="item-price-bottom">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        <br />
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-bottom">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-bottom">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div> 
</div> 

<div className='pc-container'>
<div className='featureProduct-header'>
    <a href=''>Màn hình, Máy tính để bàn</a>
    <ul className='featureProduct-list'>
        <li>Build PC</li>
        <li>Máy tính bàn</li>
        <li>PC Gamming</li>
        <li>PC đồ họa</li>
        <li>PC đồng bộ</li>
        <li>Màn hình Gamming</li>
        <li>Xem tất cả</li>
    </ul>
</div>
    <div className="featureProduct-content">
          <div className="featureProduct-content-PC">
           <Slider {...settings}>
           {featureProductDataPc.map((item, index) => (
                <div className="featureProduct-pc-item1" key={index}>
                  <div className="item-head-pc">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-pc">
                    <h1>{item.name}</h1>
                    <div className="item-price-pc">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-pc">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-pc">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div> 
</div>

<div className='ipad-container'>
<div className='featureProduct-header'>
    <a href=''>Máy tính bảng</a>
    <ul className='featureProduct-list'>
        <li>iPad 10.2 2021</li>
        <li>Tab S9</li>
        <li>iPad Air</li>
        <li>iPad Pro</li>
        <li>SamSung</li>
        <li>TCL</li>
        <li>Lenovo</li>
        <li>Xiaomi</li>
        <li>Xem tất cả</li>
    </ul>
</div>
    <div className="featureProduct-content">
          <div className="featureProduct-content-ipad">
           <Slider {...settings}>
           {featureProductDataIpad.map((item, index) => (
                <div className="featureProduct-ipad-item1" key={index}>
                  <div className="item-head-ipad">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-ipad">
                    <h1>{item.name}</h1>
                    <div className="item-price-ipad">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-ipad">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-ipad">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div> 
</div>

<div className='sound-container'>
<div className='featureProduct-header'>
    <a href=''>Âm thanh</a>
    <ul className='featureProduct-list'>
        <li>Tai nghe Bluetooth</li>
        <li>Tai nghe không dây</li>
        <li>Tai nghe Gamming</li>
        <li>Tai nghe chụp tai</li>
        <li>Loa Bluetooth</li>
        <li>Loa Karaoke</li>
        <li>Loa SoundBar</li>
        <li>Xem tất cả</li>
    </ul>
</div>
    <div className="featureProduct-content">
          <div className="featureProduct-content-sound">
           <Slider {...settings}>
           {featureProductDataSound.map((item, index) => (
                <div className="featureProduct-sound-item1" key={index}>
                  <div className="item-head-sound">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-sound">
                    <h1>{item.name}</h1>
                    <div className="item-price-sound">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-sound">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-sound">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div> 
</div>

<div className='clock-container'>
<div className='featureProduct-header'>
    <a href=''>Đồng hồ</a>
    <ul className='featureProduct-list'>
        <li>Apple Watch</li>
        <li>SamSung</li>
        <li>Huawei</li>
        <li>Garmin</li>
        <li>Xiaomi</li>
        <li>Amazfit</li>
        <li>Coros</li>
        <li>Kieslect</li>
        <li>Xem tất cả</li>
    </ul>
</div>
    <div className="featureProduct-content">
          <div className="featureProduct-content-clock">
           <Slider {...settings}>
           {featureProductDataClock.map((item, index) => (
                <div className="featureProduct-clock-item1" key={index}>
                  <div className="item-head-clock">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-clock">
                    <h1>{item.name}</h1>
                    <div className="item-price-clock">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-clock">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-clock">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div> 
</div>

<div className='device-container'>
<div className='featureProduct-header'>
    <a href=''>Đồ gia dụng</a>
    <ul className='featureProduct-list'>
        <li>Nồi chiên không dầu</li>
        <li>Máy hút bụi</li>
        <li>Nồi cơm điện</li>
        <li>Máy làm sữa hạt</li>
        <li>Máy lọc không khí</li>
        <li>Lò vi sóng </li>
        <li>Máy say sinh tố</li>
        <li>Xem tất cả</li>
    </ul>
</div>
    <div className="featureProduct-content">
          <div className="featureProduct-content-device">
           <Slider {...settings}>
           {featureProductDataDevice.map((item, index) => (
                <div className="featureProduct-device-item1" key={index}>
                  <div className="item-head-device">
                    <button>{item.discount}</button>
                    <button>Trả góp 0%</button>
                  </div>
                  <img src={item.image} alt="ảnh sản phẩm" />
                  <div className="item-content-device">
                    <h1>{item.name}</h1>
                    <div className="item-price-device">
                      <span>{item.priceDiscount}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="item1">
                      Smember giảm thêm đến <span>{item.smember}</span>
                    </p>
                    <p className="item2">
                      S-student giảm thêm đến <span>{item.s_student}</span>
                    </p>
                    <div className="item3">
                      <span>
                        Không phí chuyển đổi khi trả góp
                        
                        0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                      </span>
                    </div>
                    <div className="item-footer-device">
                      <ul>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                        <li><CiStar /></li>
                      </ul>
                      <div className="item-heart-device">
                        <p>Yêu thích</p>
                        <CiHeart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
           </Slider>
          
          </div>
</div> 
</div>
    </div>
  )
}

export default FeatureProduct
