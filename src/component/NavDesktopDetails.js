import {
    accessoriesMenuActivities,
    accessoriesMenuBags,
    accessoriesMenuFeatures,
    accessoriesMenuMain1,
    accessoriesMenuMain2,
    communityMenuFeatures,
    communityMenuMain1,
    communityMenuMain2,
    menMenuAccessories,
    menMenuActivities,
    menMenuFeatures,
    menMenuMain1,
    menMenuMain2,
    womenMenuAccessories,
    womenMenuActivities,
    womenMenuFeatures,
    womenMenuMain1,
    womenMenuMain2
} from "../helper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import actions from "../actions";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import "./NavDesktopDetail.scss"
import {useState} from "react";

export const NavDesktopDetails = ({isOpen, handleOpen, type, isClick, isOnTop}) => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    // const [isOnTop, setIsOnTop] = useState(true)
    //
    // const setFixed = () => {
    //     let navTopPixel = (isClick ? 34 : 34 + 34)
    //     window.scrollY >= navTopPixel ? setIsOnTop(false) : setIsOnTop(true)
    // }
    // window.addEventListener("scroll", setFixed)

    return <div style={!isOnTop ? {position: "fixed", top: `-34px`, left: `-8px`} : {}}>
        {/*<div className="placeHolderNavBar" style={isOnTop ? {} : {height: `90px`}}></div>*/}
        <div className="navDesktop-details" style={isOpen ? {maxHeight: '1000px'} : {maxHeight: 0}}
             onMouseEnter={() => handleOpen(true)} onMouseLeave={() => handleOpen(false)} >
            <div className="menuRowContainer">
                {/* <div className="searchMask"
                        style={{
                            display: isOpen ? "block" : "none",
                            zIndex: '2'
                        }}>
                    </div> */}
                {type === 'women' && isOpen &&
                    <div className="menuRow">
                        <div className="menuRow-main">
                            <div className="contentColumn">{womenMenuFeatures.map((item, index) => <div
                                className="list" key={index} onClick={() => {
                                navigate('/home')
                                handleOpen(false)
                            }}>{item}</div>)}</div>
                            <div className="clothes">
                                <div className="title">WOMEN'S CLOTHES <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                <div className="clothes-main">
                                    <div className="contentColumn"> {womenMenuMain1.map((item, index) => <div
                                        className="list" key={index} onClick={() => {
                                        navigate(`/home`)
                                        dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                        handleOpen(false)
                                    }}>{item}</div>)}</div>
                                    <div className="contentColumn"> {womenMenuMain2.map((item, index) => <div
                                        className="list" key={index} onClick={() => {
                                        navigate(`/home`)
                                        dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                        handleOpen(false)
                                    }}>{item}</div>)}</div>
                                </div>
                            </div>
                            <div className="accessories">
                                <div className="title">ACCESSORIES <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                <div className="contentColumn"> {womenMenuAccessories.map((item, index) => <div
                                    className="list" key={index} onClick={() => {
                                    navigate(`/home`)
                                    dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                    handleOpen(false)
                                }}>{item}</div>)}</div>
                            </div>
                            <div className="post">
                                <img src={require("./images/Women.png")} alt=""/>
                                <div className="content">
                                    <h1>For moving and resting</h1>
                                    <h2>
                                        Spend your day your way in lightweight layers that stretch to fit any
                                        active and restorative poses.
                                    </h2>
                                    <div className="title">
                                        Shop lululemon Align™ <ArrowForwardIcon className="arrowIcon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menuRowBottomContainer">

                            <div className="title">ACTIVITY</div>

                            {womenMenuActivities.map((item, index) => <div className="list" key={index} onClick={() => {
                                navigate(`/home`)
                                dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Activity", item))
                                handleOpen(false)
                            }}>{item}</div>)}
                            <div className="shop" onClick={() => {
                                navigate(`/home`)
                                dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Gender", "Women"))
                            }}>SHOP ALL WOMEN <ArrowForwardIcon className="arrowIcon"/></div>
                        </div>
                    </div>}

                {type === 'men' && isOpen &&
                    <div className="menuRow">
                        <div className="menuRow-main">
                            <div className="contentColumn">{menMenuFeatures.map((item, index) => <div
                                className="list" key={index} onClick={() => {
                                navigate(`/home`)
                                handleOpen(false)
                            }}>{item}</div>)}</div>
                            <div className="clothes">
                                <div className="title">MEN'S CLOTHES <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                <div className="clothes-main">
                                    <div className="contentColumn"> {menMenuMain1.map((item, index) => <div
                                        className="list" key={index} onClick={() => {
                                        navigate(`/home`)
                                        dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                        handleOpen(false)
                                    }}>{item}</div>)}</div>
                                    <div className="contentColumn"> {menMenuMain2.map((item, index) => <div
                                        className="list" key={index} onClick={() => {
                                        navigate(`/home`)
                                        dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                        handleOpen(false)
                                    }}>{item}</div>)}</div>
                                </div>
                            </div>
                            <div className="accessories">
                                <div className="title">ACCESSORIES <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                <div className="contentColumn"> {menMenuAccessories.map((item, index) => <div
                                    className="list" key={index} onClick={() => {
                                    navigate(`/home`)
                                    dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                    handleOpen(false)
                                }}>{item}</div>)}</div>
                            </div>
                            <div className="post">
                                <img src={require("./images/Men.png")} alt=""/>
                                <div className="content">
                                    <h1>Every motion, multiplied</h1>
                                    <h2>
                                        Do more than you came for, in breathable fabric and seamless designs.
                                    </h2>
                                    <div className="title">
                                        Shop Workout<ArrowForwardIcon className="arrowIcon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menuRowBottomContainer">
                            <div className="title">ACTIVITY</div>
                            {menMenuActivities.map((item, index) => <div className="list" key={index} onClick={() => {
                                navigate(`/home`)
                                dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Activity", item))
                                handleOpen(false)
                            }}>{item}</div>)}
                            <div className="shop" onClick={() => {
                                navigate(`/home`)
                                dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Gender", "Men"))
                            }}>SHOP ALL MEN <ArrowForwardIcon className="arrowIcon"/></div>
                        </div>
                    </div>}

                {type === 'accessories' && isOpen &&
                    <div className="menuRow">
                        <div className="menuRow-main">
                            <div className="contentColumn">{accessoriesMenuFeatures.map((item, index) => <div
                                className="list" key={index} onClick={() => {
                                navigate(`/home`)
                                handleOpen(false)
                            }}>{item}</div>)}</div>
                            <div className="clothes">
                                <div className="title">ACCESSORIES <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                <div className="clothes-main">
                                    <div className="contentColumn"> {accessoriesMenuMain1.map((item, index) => <div
                                        className="list" key={index} onClick={() => {
                                        navigate(`/home`)
                                        dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                        handleOpen(false)
                                    }}>{item}</div>)}</div>
                                    <div className="contentColumn"> {accessoriesMenuMain2.map((item, index) => <div
                                        className="list" key={index} onClick={() => {
                                        navigate(`/home`)
                                        dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Category", item))
                                        handleOpen(false)
                                    }}>{item}</div>)}</div>
                                </div>
                            </div>
                            <div className="accessories">
                                <div className="title">BAGS <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                <div className="contentColumn"> {accessoriesMenuBags.map((item, index) => <div
                                    className="list" key={index} onClick={() => {
                                    navigate(`/home`)
                                    handleOpen(false)
                                }}>{item}</div>)}</div>
                            </div>
                            <div className="post">
                                <img src={require("./images/acc.png")} alt=""/>
                                <div className="content">
                                    <h1>Bright horizons.</h1>
                                    <h2>
                                        Top off your visibility in the Fast and Free Running Hat, featuring
                                        reflective detailing for
                                        empowered, after-hour runs.
                                    </h2>
                                    <div className="title">
                                        Shop Hats<ArrowForwardIcon className="arrowIcon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menuRowBottomContainer">
                            <div className="title">ACTIVITY</div>
                            {accessoriesMenuActivities.map((item, index) => <div className="list" key={index}
                                                                                 onClick={() => {
                                                                                     navigate(`/home`)
                                                                                     dispatch(actions.fetchAction.removeAndSelectOneFilterAction("Activity", item))
                                                                                     handleOpen(false)
                                                                                 }}>{item}</div>)}
                            <div className="shop">SHOP ALL ACCESSORIES <ArrowForwardIcon className="arrowIcon"/>
                            </div>
                        </div>
                    </div>}


                {type === 'community' && isOpen &&
                    <div className="menuRow">
                        <div className="menuRow-main community" style={{justifyContent: 'flex-start'}}>
                            <div className="contentColumn community_list" style={{paddingRight: '50px'}}>
                                <div className="title">TEAM CANADA <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                {communityMenuFeatures.map((item, index) => <div
                                    className="list" key={index}>{item}</div>)}
                            </div>
                            <div className="contentColumn community_list" style={{paddingRight: '20px'}}>
                                <div className="title">SWEATLIFE <ArrowForwardIcon className="arrowIcon"/>
                                </div>
                                {communityMenuMain1.map((item, index) => <div
                                    className="list" key={index}>{item}</div>)}
                            </div>
                            <div className="contentColumn community_list" style={{paddingRight: '20px'}}>
                                <div className="title">IMPACT <ArrowForwardIcon className="arrowIcon"/></div>
                                {communityMenuMain2.map((item, index) => <div
                                    className="list" key={index}>{item}</div>)}
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    </div>
}