import {useEffect, useState} from "react";
import "./ShopBag.scss"
import actions from "../actions";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CloseIcon} from "../component/FilterIcons";
import {space} from "../helper";
import * as React from "react";
import {ToastContainer, toast} from 'react-toastify';

export const ShopBag = ({setIsShopBagOpen}) => {
    // let [isCartEmpty, setCartEmpty] = useState(true)
    let cart = useSelector(state => state.fetchReducer.cartDetail)
    let cartErrorMsg = useSelector(state => state.fetchReducer.cartErrorMsg)
    let dispatch = useDispatch()
    // console.log('cart in shopBag', cart)

    // if (!localStorage.getItem('cart')) {
    //     localStorage.setItem('cart', '[]');}
    // let cart = JSON.parse(localStorage.getItem('cart'))
    // useEffect(()=>{if (cart?.length !== 0 ) { setCartEmpty(false)}},)

    // const initialNum = 0
    // const sumNum = cart?.reduce((sum, item) => {
    //     return sum + item.num
    // }, initialNum)

    // const sumTotal = cart?.reduce((subtotal, item) => {
    //     return subtotal + (parseFloat(item.price.split('$')[1]) * item.num)
    // }, initialNum)

    let navigate = useNavigate()
    const cbCheck = () =>
        // cartErrorMsg === "" ?
        //     navigate('/account/login')
        //     :
            navigate('/shop/mybag')

    let sumNum = useSelector(state =>
        state.fetchReducer.cart).reduce((accumulator, curValue) =>
        accumulator + curValue.quantity, 0)
    // console.log(sumNum)
    let sumTotal = useSelector(state => state.fetchReducer.subtotal)


    return <div className="shopBagList" onMouseEnter={() => {
        setIsShopBagOpen(true)
        let oldTimer = JSON.parse(localStorage.getItem('timer'))
        oldTimer.forEach(timer => clearTimeout(timer))
        localStorage.setItem('timer', '[]')
    }} onMouseLeave={() => setIsShopBagOpen(false)}
                style={{}}>
        <div className="shopBagListContent">
            <h2 className='shopBagListContent_Title'>Items In Your Bag</h2>
            <hr/>
            {cart.length === 0 ?
                <h2 className="empty">Give your bag some love!</h2>
                :
                cart.map((item, index) => {
                    return <>
                        <div className="shopItem" key={index}>
                            <img
                                onClick={() => navigate(`/product/${item.productId}?color=${item.colorId}`)}
                                src={item?.img}/>
                            <div className="itemDetails">
                                <h3 className="productName"
                                    onClick={() => navigate(`/product/${item.productId}?color=${item.colorId}`)}>
                                    {item?.name}
                                </h3>
                                <div className="productColor">
                                    <h3>{item?.colorAlt}</h3>
                                </div>
                                <div className="productSize">
                                    <h3>Size</h3>
                                    <h3>{item?.size}</h3>
                                </div>
                                <div className="productQuantity">
                                    <h3>Quantity</h3>
                                    <h3>{item?.quantity}</h3>
                                </div>
                            </div>
                            <div className="removeBtnNItemTotal">
                                <div className='removeIcon'
                                     onClick={() => {
                                         dispatch(actions.cartAction.removeCartItemAction(item.productId, item.colorId, item.size))
                                         const notify = () => {
                                             toast.error(
                                                 // `Removed Product ${removedCartItemForRemove.name}`
                                                 <div onClick={() => {
                                                     dispatch(actions.cartAction.undoRemoveCart())
                                                 }}>
                                                     Removed {item.name}. <span
                                                     style={{fontWeight: 600}}>Click to Undo!</span>
                                                 </div>
                                                 , {
                                                     position: "bottom-left",
                                                     autoClose: 10000,
                                                     hideProgressBar: false,
                                                     closeOnClick: true,
                                                     pauseOnHover: true,
                                                     draggable: true,
                                                     progress: undefined,
                                                 })
                                         };
                                         notify()
                                     }}>
                                    <CloseIcon/>
                                </div>
                                <div className="itemTotal">
                                    ${item?.price?.split(' ')[0].replace(/^\D+/g, '') * item.quantity}
                                </div>
                            </div>

                        </div>
                    </>
                })
            }
            {/*{!isCartEmpty && cart?.map((item, index) => item != null && <div className="shopItem" key={index}>*/}
            {/*        <img src={item?.src} alt="img"/>*/}
            {/*        <div className="itemDetails">*/}
            {/*            <h3 className="productName">{item?.product}</h3>*/}
            {/*            <div className="productColor"><h3>{item?.color}</h3></div>*/}
            {/*            <div className="productSize"><h3>Size:</h3> <h3>{item?.size}</h3></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
            <hr/>
            <div className='shopBagListContent_Summary'>
                <div className='shopBagListContent_Summary_Subtotal'>
                    <div className='shopBagListContent_Summary_Subtotal_Title'>Subtotal
                        <div
                            className='shopBagListContent_Summary_Subtotal_Title_NoOfItem'>{space}({sumNum} {sumNum > 1 ? 'Items' : 'Item'})
                        </div>
                    </div>
                    <div className='shopBagListContent_Summary_Subtotal_Price'>${sumTotal}</div>
                </div>
                <div className='shopBagListContent_Shipping'>
                    <div className='shopBagListContent_Shipping_Title'>Shipping</div>
                    <div className='shopBagListContent_Shipping_Price'>FREE</div>
                </div>
            </div>
            <h3 className="checkOut" onClick={cbCheck} style={{cursor: "pointer"}}>VIEW BAG & CHECKOUT</h3>
        </div>
    </div>
}