import { useEffect } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

function LoginRegister() {
  const navigate = useNavigate();  // Usa useNavigate

  useEffect(() => {
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginContainer = document.getElementById("login");
    const registerContainer = document.getElementById("register");

    window.login = function () {
      loginContainer.style.left = "4px";
      registerContainer.style.right = "-520px";
      loginBtn.classList.add("white-btn");
      registerBtn.classList.remove("white-btn");
      loginContainer.style.opacity = 1;
      registerContainer.style.opacity = 0;
    };

    window.register = function () {
      loginContainer.style.left = "-510px";
      registerContainer.style.right = "5px";
      loginBtn.classList.remove("white-btn");
      registerBtn.classList.add("white-btn");
      loginContainer.style.opacity = 0;
      registerContainer.style.opacity = 1;
    };

    window.registerUser = function () {
      const nombre = document.querySelector('#register .input-field[placeholder="Nombre"]').value;
      const apellido = document.querySelector('#register .input-field[placeholder="Apellido"]').value;
      const correo = document.querySelector('#register .input-field[placeholder="Correo"]').value;
      const password = document.querySelector('#register .input-field[placeholder="Contrase\u00f1a"]').value;

      if (nombre && apellido && correo && password) {
        const user = { nombre, apellido, correo, password };
        localStorage.setItem(correo, JSON.stringify(user));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registro exitoso",
          text: "Ahora puedes iniciar sesi\u00f3n.",
          showConfirmButton: false,
          timer: 1500
        });
        window.login();
      } else {
        Swal.fire({
          icon: "warning",
          title: "Faltan campos",
          text: "Por favor, completa todos los campos.",
          confirmButtonText: "Entendido"
        });
      }
    };

    window.validateLogin = function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const userData = JSON.parse(localStorage.getItem(username));

      if (userData && userData.password === password) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Inicio de sesi\u00f3n exitoso",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          // Redirige al inicio después de 1.5 segundos
          navigate('/');  // Esto redirige al inicio (Inicio.jsx)
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          position: "center",
          title: "Error",
          text: "Nombre de usuario o contrase\u00f1a incorrectos.",
          confirmButtonText: "Intentar de nuevo",
          customClass: {
            confirmButton: 'custom-confirm-button'
          },
          buttonsStyling: false
        });
      }
    };
  }, [navigate]);

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <img src="/Logos/PLANify with rocco white.png" alt="logo" />
        </div>
        <div className="nav-button">
          <button className="btn white-btn" id="loginBtn" onClick={() => window.login()}>Iniciar sesión</button>
          <button className="btn" id="registerBtn" onClick={() => window.register()}>Registrate</button>
        </div>
      </nav>

      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <span>¿No tienes una cuenta? <a href="#" onClick={() => window.register()}>Registrate</a></span>
            <header>Inicio de Sesión</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" id="username" placeholder="Nombre de usuario o correo" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" id="password" placeholder="Contraseña" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Iniciar Sesión" onClick={() => window.validateLogin()} />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check">Recuérdame</label>
            </div>
          </div>
        </div>

        <div className="register-container" id="register">
          <div className="top">
            <span>¿Tienes una cuenta? <a href="#" onClick={() => window.login()}>Iniciar Sesión</a></span>
            <header>Regístrate</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Nombre" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Apellido" />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Correo" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Contraseña" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Registrarse" onClick={() => window.registerUser()} />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check">Recuérdame</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
