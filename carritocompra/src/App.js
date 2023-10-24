import { Routes, Route } from 'react-router-dom';
import AppUser from './layout/AppUser/AppUser';
import AdminApp from './layout/AppAdmin/AdminApp';


const App = () => {
    return (
          <Routes>
             <Route path="/" element={<AdminApp />} />
             <Route path="/products" element={<AppUser />} />
          </Routes>
    );
   };
   
   export default App;