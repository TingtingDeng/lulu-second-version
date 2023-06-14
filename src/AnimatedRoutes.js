import {Navigate, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import {HomePage} from "./component/HomePage";

import {useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {AnimatePresence} from "framer-motion";

// import {ProductPage} from "./component2/ProductPage";
// import {CheckoutPage} from "./component3/CheckoutPage";
//
// import {LogInPage} from "./component3/LogInPage";
// import {PaypalBtn} from "./component3/PaypalBtn";
// import {PaymentSuccessPage} from "./component3/PaymentSuccessPage";
// import {OrderHistory} from "./component4/OrderHistory";
// import {Summary} from "./component4/Summary";
// import {Payment} from "./component4/Payment";
// import {Review} from "./component4/Review";
// import {AdminPage} from "./component4/AdminPage";

export const AnimatedRoutes = () => {
    const useQuery = () => {
        const {search} = useLocation();

        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery()
    const location = useLocation()
    let isLogIn = useSelector(state => state.tokenReducer.isLogIn)


    return <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<HomePage/>}/>
            {/*<Route path="/product/:productId"*/}
            {/*       element={<ProductPage color={query.get("color")} size={query.get("size")}/>}/>*/}
            {/*<Route path="/account/login" element={isLogIn ? (<Navigate replace to={-1}/>) : (<LogInPage/>)}/>*/}
            {/*<Route path="/Payment" element={<PaypalBtn/>}/>*/}
            {/*<Route path="/paymentSuccess" element={<PaymentSuccessPage/>}/>*/}
            {/*<Route path="/orderHistory"*/}
            {/*    // element={isLogIn ? <OrderHistory/> : <Navigate replace to="/account/login"/>}/>*/}
            {/*       element={<OrderHistory/>}/>*/}
            {/*<Route path="/shop/mybag"*/}
            {/*       element={isLogIn ? (<CheckoutPage/>) : (<Navigate replace to="/account/login"/>)}/>*/}
            {/*<Route path="/shop/checkout"*/}
            {/*       element={isLogIn ? (<Summary/>) : (<Navigate replace to="/account/login"/>)}/>*/}
            {/*<Route path="/shop/checkout/payment"*/}
            {/*       element={isLogIn ? (<Payment/>) : (<Navigate replace to="/account/login"/>)}/>*/}
            {/*<Route path="/shop/checkout/review"*/}
            {/*       element={isLogIn ? (<Review/>) : (<Navigate replace to="/account/login"/>)}/>*/}
            {/*<Route path="/admin"*/}
            {/*       element={<AdminPage/>}/>*/}
            <Route path="/" element={<Navigate to="home"/>}/>
            <Route path="*" element={<Navigate to="home"/>}/>
        </Routes>
    </AnimatePresence>
}