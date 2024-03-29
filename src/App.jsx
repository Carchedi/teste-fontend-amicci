
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/logo/Logo.jsx'
import SearchField from './components/searchField/SearchField.jsx';

function App() {

  return (
    <>
      <div>
        <Logo />
        <span className='mt-5'>Aplicação voltada para obter os dados sobre o clima, buscando-os por uma API.</span>
        <SearchField />
      </div>  
      <div className='main-footer'>
        <hr/>
        Desenvolvido por Luiz Carlos Carchedi
      </div>
      
    </>
  )
}

export default App
