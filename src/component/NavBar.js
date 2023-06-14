import "./NavBar.css"
import React, {useState} from 'react';
import {useWindowSize} from "../customHooks";
import {useLocation,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from '@mui/icons-material/Search';
import {
    CanIcon,
    CartIcon,
    GiftIcon,
    LogoIcon,
    MenuIcon,
    SignInIcon,
    space,
    StoreLocatorIcon,
    WishListIcon
} from "../helper";
import Main from "./Main";


export const NavBar = () => {
    // useState for nav detail and main
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const isHeaderOpen = (isOpen) => {
        setIsOpen(isOpen)
    }

    const [isClick, setClick] = useState(false)
    const {width, height} = useWindowSize()
    const navigate = useNavigate()

    let firstName = JSON.parse(localStorage.getItem('token'))?.user?.firstName
    let isLogin = useSelector(state => state?.tokenReducer?.isLogin)

    //set pop up sign out button
    const [isNameClicked, setIsNameClicked] = useState(false)
    const dispatch = useDispatch()

    const toggleIsNameClicked = () => {
        setIsNameClicked(state => !state)
        console.log('isNameClicked', isNameClicked)
    }

    const viewOrders = () => {

    }

   const PopUpSignOut = () => {
        return <>
            <div className='signOutBtn userBtn'
                 onBlur={toggleIsNameClicked}
                 style={{
                     display: isNameClicked ? "flex" : "none",
                     height: isNameClicked ? `20px` : 0,
                     padding: isNameClicked ? `10px` : 0
                 }}
                 onClick={signOut}>
                Sign Out
            </div>
            <div className='viewOrderBtn userBtn'
                 onBlur={toggleIsNameClicked}
                 style={{
                     display: isNameClicked ? "flex" : "none",
                     height: isNameClicked ? `20px` : 0,
                     padding: isNameClicked ? `10px` : 0
                 }}
                 onClick={viewOrders}>
                View Orders
            </div>
        </>
   }

   const signOut = async () => {
        localStorage.removeItem('token')
       dispatch(actions.tokenAction.updateTokenAction(null))
       dispatch(actions.tokenAction.updateIsLoginAction(false))
       setIsNameClicked(state=> !state)
       navigate(`/account/login`)
   }

   const isLogIn = useSelector(state => state?.tokenReducer?.isLogin)
   const location = useLocation()





    const handleOpen = (isOpen) => {
        setIsOpen(isOpen)
        isHeaderOpen(isOpen)
    }


    return (
        <>
            <header className="luluNav">
                <div className="popUp"
                     style={{display: isClick ? "none" : isLogin ? "none" : location.pathname === "/account/login" ? "none" : "flex"}}>
                    <div className="popupContent">
                        <p>Get the latest gear, tips, and inspiration.</p>
                        <a href="#" onClick={() => {
                            navigate(`/account/login`)
                            setClick(true)
                        }}>Sign Up</a>
                    </div>
                    <button className="closePop" onClick={() => setClick(true)}>
                        <CloseIcon className="close"/>
                    </button>
                </div>



            <div className="mainNav" style={{width: '100vw'}}>
                <div className="topNav-desktop_container">
                    <div className="topNav-desktop" style={{width: '100vw'}}>
                        <div className="storeLocator">
                            <button type="button">
                                <StoreLocatorIcon/>
                                <span className='iconDes'>Store Locator</span>
                            </button>
                        </div>
                        <div className="signIn">
                            <button type="button" onClick={() => {
                                !isLogIn &&
                                navigate(`/account/login`)
                            }}><SignInIcon/>
                                {isLogIn ?
                                    <span className='iconDes'
                                          onClick={toggleIsNameClicked}
                                    >
                                                Hello,{space}{firstName}
                                            </span>
                                    :
                                    <span className='iconDes'>Sign In</span>
                                }
                            </button>

                            <PopUpSignOut/>

                        </div>
                        <div className="wishList">
                            <button type="button"><WishListIcon/> <span
                                className='iconDes'>
                                        Wish List</span></button>
                        </div>
                        <div className="giftCards">
                            <button type="button"><GiftIcon/> <span
                                className='iconDes'> Gift
                                            Cards</span></button>
                        </div>
                        <div className="Can">
                            <button type="button"><CanIcon/><span
                                className="iconDes">CAN</span></button>
                        </div>
                    </div>
                </div>
                <div className="navDesktop">
                    <Main
                        isHeaderOpen={isHeaderOpen}
                          isClick={isClick}
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}

                          // type={type} setType={setType}
                    />

                </div>

            </div>
                <div style={{
                    display: isOpen ? "block" : "none",
                    background: 'rgba(0, 0, 0, .5)',
                    transition: 'all 0.2s',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2
                }}>
                </div>
            </header>
        </>
    );
};

export default NavBar;