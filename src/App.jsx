import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'

function App() {

  return (
    <div className='main'>
      <div id="overlay"></div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
