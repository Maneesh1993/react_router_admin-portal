import './App.css';
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sb-admin-2.css'
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User1 from './User1'
import User1create from './User1create';
import Viewuser from './Viewuser';
import Edituser from './Edituser';
function App() {
  return (

    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path='/Dashboard' element={<Dashboard />}></Route>
              <Route path='/User1' element={<User1 />}></Route>
              <Route path='/User1_create' element={<User1create />}> </Route>
              <Route path="/User1/:id" element={<Viewuser/>}></Route>
              <Route path="/Edituser" element={<Edituser/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;