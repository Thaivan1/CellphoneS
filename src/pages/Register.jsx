import React from 'react'
import '../styles/register/register.css'
import { Link } from 'react-router'
import { useForm} from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const handleRegister = (value) => {
    console.log(value)
  localStorage.setItem(register, JSON.stringify(value));
  toast.success('Register Success', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    setTimeout(() => navigate("/login"), 2500)
  }
  return (
    <div className="register-container">
    <div className="register-header">
      <img
        src="https://static-account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png"
        alt="logo"
        className="register-logo"
      />
      <h2>Đăng ký với</h2>
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
    <div className="social-buttons">
      <button className="social-btn google-btn">
        <img
          src="https://static-account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
          alt="Google"
        />
        Google
      </button>
      <button className="social-btn zalo-btn">
        <img
          src="https://static-account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
          alt="Zalo"
        />
        Zalo
      </button>
    </div>
    <div className="divider">
      <span></span>
      <p>hoặc</p>
      <span></span>
    </div>
    <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
      <input type="text" placeholder="Nhập họ và tên" className="input-field" {...register("fullname")}/>
      <input
        type="text"
        placeholder="Nhập số điện thoại"
        className="input-field"
        {...register("phone")}
      />
      <input
        type="email"
        placeholder="Nhập email (không bắt buộc)"
        className="input-field"
        {...register("email")}
      />
      <p className="email-note">
        Hóa đơn VAT khi mua hàng sẽ được gửi qua email này
      </p>
      <input type="date" className="input-field" {...register("birthday")}/>
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        className="input-field"
        {...register("password")}
      />
      <p className="password-note">
        (*) Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ và 1 số. (VD: 12345a)
      </p>
      <input
        type="password"
        placeholder="Nhập lại mật khẩu"
        className="input-field"
        {...register("repassword")}
      />
      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          Đăng ký nhận bản tin khuyến mãi từ CellphoneS
        </label>
        <label>
          <input type="checkbox" defaultChecked />
          Tôi đồng ý với các điều khoản bảo mật cá nhân
        </label>
        <label>
          <input type="checkbox" />
          Tôi là Học sinh - sinh viên (nhận thêm ưu đãi tới 500K/ sản phẩm)
        </label>
      </div>
      <button type="submit" className="register-btn" >
        Đăng ký
      </button>
      <p className="login-link">
        Bạn đã có tài khoản?
        <Link to="/login">Đăng nhập</Link>
      </p>
    </form>
  </div>
  )
}

export default Register
