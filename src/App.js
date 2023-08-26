import './App.css';
import { Dashboard } from './components/dashboard/dashboard';
import { SignUp } from './components/signup/signup';
import { Login } from './components/signup/login/login';
import { Header } from './components/Header/header';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter ,Routes,Route, useNavigation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {store }  from "./store/store"
import { Provider, useDispatch } from 'react-redux';
import { CartDetails } from './components/Product Cards/product details/product details';
import { CartPage } from './components/Product Cards/Cart Page/cartpage';
import { StorePage } from './components/StorePage/store';
import { ErrorPage } from './error';


// ..........AdminComponents....
import { AdminDashboard } from './admincomponents/Admindashboard/admindash';
import { Analytics } from './admincomponents/Analytics/analytic';
import { UsersJoin } from './admincomponents/Join Users/users';
import { AdminProducts } from './admincomponents/Adminproducts/adminproduct';
import { ProductList } from './admincomponents/adminproductlist/productlist';
import { OrderDetails } from './admincomponents/orderpage/order';
import axios from 'axios';
import { useEffect } from 'react';
// import { AdminRout } from './adminrout';


function App() {
  let dispatch = useDispatch();
  
  useEffect(()=>{
    
  axios.post("/seesion",{SomeToken: localStorage.getItem('token')}).then((res)=>{
    if(res.data){
      dispatch({
        type:"User_LoginOk",
        payload:res.data
      })
    }
  })
},[]);

const currentuser = useSelector(function(store){
  return store.userData.currentuser || {} ;
});



  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}/>
      <Route path='/signup' element={<SignUp></SignUp>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/details' element={<CartDetails/>}/>
      <Route path='/details/:mainid' element={<CartDetails/>}/>
      <Route path='/cartProducts' element={<CartPage/>}/>
      <Route path='/store' element={<StorePage/>}/>
      <Route path='/:abc' element={<ErrorPage/>}/>

{/* ...............Admin Route....../ */}

          <Route path="/admindash" element={<AdminDashboard />} />
          <Route path="/adminanalytics" element={<Analytics />} />
          <Route path="/adminuser" element={<UsersJoin />} />
          <Route path="/adminproducts" element={<AdminProducts />} />
          <Route path="/adminproductlist" element={<ProductList />} />
          <Route path="/adminorder" element={<OrderDetails />} />

    </Routes>
    
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
