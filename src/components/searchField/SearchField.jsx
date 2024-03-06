import React from "react";
import Button from 'react-bootstrap/Button';

function SearchField() {
  return (
    <>
      <div className="d-flex align-items-center mb-4 mt-5">
        <input type="text" className="form-control me-4" placeholder="Informe uma localidade" />
        <Button variant="primary" className="button">Pesquisar</Button>
      </div>
      <Button variant="success" className="button lg-4">
        <span className="me-2">Obter dados do meu local</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
        </svg>
      </Button>
    </>
  );
}
export default SearchField;