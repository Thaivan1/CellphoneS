import React from 'react'
import '../styles/login/login.css'
import { useForm} from "react-hook-form"
import { Link } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
const Login = () => {
   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

    const handleLogin = (value) => {
      localStorage.setItem("user", JSON.stringify(value));
       toast.success('Login Success', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
     setTimeout(() =>  navigate("/"), 2500)
    }
  return (
    <div className="login-container">
    <div className="login-header">
      <img
        src="https://static-account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png" // Thay bằng URL ảnh logo của bạn
        alt="Logo"
        className="logo"
      />
      <h2>Đăng nhập với</h2>
      <div className="social-login">
      <div className='social-gg'>
      <img className= 'logo-gg' src='https://static-account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png'></img>
      <button className="google-btn">Google</button>
      </div>
      <div className='social-zl'>
      <img src='https://static-account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png'/>
      <button className="zalo-btn">Zalo</button></div>
      </div>
    </div>
    <div className="divider">
      <span></span>
      <p>hoặc</p>
      <span></span>
    </div>
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <form onSubmit={handleSubmit(handleLogin)}>
      <input
        type="text"
        placeholder="Nhập số điện thoại"
        className="input-field"
        {...register("phone")}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        className="input-field"
        {...register("password")}
      />
      <div className="forgot-password">
        <a href="#">Quên mật khẩu?</a>
      </div>
      <button type="submit" className="login-btn">
        Đăng nhập
      </button>
    </form>
    <div className="signup-section">
      <p>
        Bạn chưa có tài khoản?
        <Link to="/register">Đăng ký ngay</Link>
      </p>
      <a href="#" className="policy-link">
        Xem chính sách ưu đãi Smember
      </a>
    </div>
  </div>
  )
}

export default Login
