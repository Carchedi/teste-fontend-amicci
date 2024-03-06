import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Logo() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-start p-4">
        <a href="https://amicci.com.br/" target="_blank">
          <img src="/src/images/logo.svg"  alt="Logo" className="img-fluid" style={{ width: '350px' }}/>
        </a>
      </div>
    </>
  );
}
export default Logo;