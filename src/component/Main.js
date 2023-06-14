import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import actions from "../actions";
import {ShopBag} from "../component3/ShopBag";
import {NavDesktopDetails} from "./NavDesktopDetails";
const Main = (isClick) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const isHeaderOpen = (isOpen) => {
        setIsOpen(isOpen)
    }
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleOpen = (isOpen) => {
        setIsOpen(isOpen)
        isHeaderOpen(isOpen)
    }
    const [isShopBagOpen, setIsShopBagOpen] = useState(false)
    const toggleShopBag = () => {
        setIsShopBagOpen(!isShopBagOpen)
        console.log('toggle')
    }
    const cbCheck = () => navigate('/shop/mybag')
    const isLogin = useSelector(state => state?.tokenAction?.isLogin)

    const [isOnTop, setIsOnTop] = useState(true)
    const setFixed = () => {
        const navTopPixel = (isClick || isLogin ? 34 : 34 + 34)
        window.scrollY >= navTopPixel ? setIsOnTop(false) : setIsOnTop(true)
    }


    window.addEventListener("scroll" , setFixed)

    let sumNum = useSelector(state => state?.fetchReducer?.cart).reduce((accumulator, curValue) => accumulator + curValue.quantity, 0)


    return (<>
            <div className="placeHolderNavBar" style={isOnTop ? {} : {height: `90px`}}></div>
            <div className='main' style={
                isOnTop ?
                    {
                        display: 'flex',
                        backgroundColor: 'white',
                        width: '100vw',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }
                    :
                    {
                        display: 'flex',
                        top: `0`,
                        position: 'fixed',
                        backgroundColor: 'white',
                        width: '100vw',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }
            }>

                <div className="navDesktop" onMouseLeave={() => {
                    handleOpen(false)
                    // console.log('isOpen navDesktop', isOpen)
                }}>
                    <div className="navPrimary">
                        <div className="navPrimaryContainer">
                            <img className="navLogo" onClick={() => navigate('/home')}
                                 src={require("./images/Logo.png")} alt="logo"/>
                            <ul className="menuList">
                                <div className="navList" onMouseEnter={() => {
                                    setType("women")
                                    handleOpen(true)
                                }} onClick={() => {
                                    navigate(`/home`)
                                    dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Gender", "Women"))
                                }}><h2>WOMEN</h2>
                                </div>
                                <div className="navList" onMouseEnter={() => {
                                    setType("men")
                                    handleOpen(true)
                                }} onClick={() => {
                                    navigate(`/home`)
                                    dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Gender", "Men"))
                                }}><h2 style={{width: `35px`}}>MEN</h2>
                                </div>
                                <div className="navList" onMouseEnter={() => {
                                    setType("accessories")
                                    handleOpen(true)
                                }} onClick={() => {
                                    navigate(`/home`)
                                    handleOpen(false)
                                }}><h2>ACCESSORIES</h2>
                                </div>
                                <div className="navList" onMouseEnter={() => {
                                    setType("community")
                                    handleOpen(true)
                                }} onClick={() => {
                                    navigate(`/home`)
                                    handleOpen(false)
                                }}><h2>COMMUNITY</h2>
                                </div>
                                <div className="navList" onMouseEnter={() => {
                                    handleOpen(false)
                                }} onClick={() => {
                                    window.location.href = 'https://shop.lululemon.com/story/mirror-home-gym'
                                }}><h2>MIRROR</h2></div>
                                <div className="navList" onMouseEnter={() => {
                                    handleOpen(false)
                                }} onClick={() => {
                                    window.location.href = 'https://shop.lululemon.com/story/footwear'
                                }}><h2>SHOES</h2></div>
                            </ul>
                        </div>
                        <div className="navSecondary">
                            <div className="navSecondaryMain">
                                <div className="searchBox">
                                    <div className="searchMask" onClick={() => setIsSearchOpen(false)}
                                         style={{display: isSearchOpen ? "block" : "none"}}></div>
                                    <div className="searchForm">
                                        <SearchIcon className="icon"/>
                                        <input className="inputSearch" type="text" placeholder="Search"
                                               onClick={() => {
                                                   handleOpen(false)
                                                   setIsSearchOpen(true)
                                               }}/>
                                    </div>
                                    <div className="searchSelections"
                                         style={{display: isSearchOpen ? "flex" : "none"}}>
                                        <span className="searchHeader">TRENDING SEARCHES</span>
                                        <div className="searchItem">align</div>
                                        <div className="searchItem">belt bag</div>
                                        <div className="searchItem">bag</div>
                                        <div className="searchItem">scuba</div>
                                        <div className="searchItem">everywhere belt bag</div>
                                    </div>

                                </div>
                                <div className="shopBag"
                                     onClick={cbCheck}>
                                    {/*<WorkOutlineIcon className="icon"/>*/}
                                    <svg className="icon"
                                         onMouseLeave={() => {
                                             let timerId = setTimeout(() => {
                                                 setIsShopBagOpen(false)
                                             }, 1000)
                                             let oldTimer = JSON.parse(localStorage.getItem('timer'))
                                             oldTimer ? localStorage.setItem('timer', JSON.stringify([...oldTimer, timerId])) : localStorage.setItem('timer', JSON.stringify([timerId]))

                                         }}
                                         onMouseEnter={() => {
                                             setIsShopBagOpen(true)
                                             let oldTimer = JSON.parse(localStorage.getItem('timer'))
                                             oldTimer.forEach(timer => clearTimeout(timer))
                                             localStorage.setItem('timer', '[]')
                                             // console.log('mouseOver', isShopBagOpen)
                                         }}
                                    >
                                        <path
                                            d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 00-.75.75v12A4.75 4.75 0 008 23.75h8A4.75 4.75 0 0020.75 19V7a.76.76 0 00-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0116 22.25H8A3.26 3.26 0 014.75 19V7.75H7l-.24 2.16.49.06a1 1 0 001.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 001.12.87l.49-.06L17 7.75h2.28L19.25 19z"></path>
                                    </svg>
                                    <span>
                                        {sumNum}
                                    </span>
                                    {sumNum > 0 && <div className="cartNotification"></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*{ isShopBagOpen||isMouseOverShopBag && <ShopBag isShopBagOpen={isShopBagOpen} isMouseOverShopBag={isMouseOverShopBag}/>}*/}
            {isShopBagOpen && <ShopBag setIsShopBagOpen={setIsShopBagOpen}/>}
            <NavDesktopDetails isOpen={isOpen} isClick={isClick} handleOpen={handleOpen} type={type} isOnTop={isOnTop}/>
        </>
    )
}

export default Main;