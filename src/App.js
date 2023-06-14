
import './App.css';
import CheckoutNavbar from "./component3/CheckoutNavbar";
import NavBar from "./component/NavBar";
import {useLocation} from "react-router-dom"
import {useMemo} from "react";
import SmartFilter from "./component2/SmartFilter";
// import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./component/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "@mui/material/Modal";
import {CircularProgress} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {AnimatedRoutes} from "./AnimatedRoutes";
function App() {


const isLoading = useSelector(state => state?.modalReducer?.isLoading)

  return (
    <div className="App">
      <NavBar/>
      <SmartFilter/>
      <AnimatedRoutes/>
      <Footer/>
      {/*{modal.addToBagPage && <AddToBagPage color={query.get("color")} size={query.get("size")}/>}*/}
        <ToastContainer position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>
        {/*isLoading page*/}
        <Modal open={isLoading}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <div className="loadingIconJason" style={{display:"flex", justifyContent: "center", alignItems: "center", width: "100vw", height:"100vh"}}>
                <CircularProgress/>
            </div>
        </Modal>

    </div>
  );
}

export default App;
