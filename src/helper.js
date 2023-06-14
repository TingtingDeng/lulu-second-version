import smartFilterJSON from "./smartFilterWithoutColor.json"
import {StyleSheet} from '@react-pdf/renderer'



export const smartFilter = smartFilterJSON

//OrderHistory constants
export const backendUrl = 'http://localhost:3000/'
export const frontendUrl = 'http://localhost:3001/'

export const orderHistoryFilter = [
    {
        label: 'Last 6 Months',
        value: 1
    },
    {
        label: 'Last Year',
        value: 2
    },
    {
        label: 'All Time',
        value: 3
    }
]

export const msInADay = 24 * 60 * 60 * 1000
export const daysIn6Months = 183
export const daysIn12Months = 366
export const daysForAllTime = 365 * 52

export const pdfStyle = StyleSheet.create({
    btn: {
        textDecoration: "none",
        backgroundColor: "#d31334",
        flexDirection: 'column',
        alignItems: 'center',
        border: 'none',
        borderRadius: 4,
        // width: 150,
        padding: 10,
        color: 'white',
        justifyContent: 'center',

//transition: 250ms ease-in-out;
    },

    'btn:hover': {
        cursor: 'pointer',
        backgroundColor: 'darkred',
    },


    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    table: {
        fontSize: 10,
        width: 550,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "stretch",
        flexWrap: "nowrap",
        alignItems: "stretch"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "stretch",
        flexWrap: "nowrap",
        alignItems: "stretch",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 35
    },
    cell: {
        // borderColor: "#cc0000",
        borderStyle: "solid",
        borderWidth: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        alignSelf: "stretch"
    },
    header: {
        // backgroundColor: "#eee"
    },
    headerText: {
        fontSize: 11,
        fontWeight: 1200,
        // color: "#1a245c",
        // margin: 3,
        textAlign: "right",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: "stretch"

    },
    tableText: {
        margin: 2,
        fontSize: 10,
        textAlign: "center",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: "stretch"
        // color: '#888888',
    },
    totalsTableText: {
        margin: 2,
        fontSize: 10,
        textAlign: "right",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: "stretch"
        // color: '#888888',
    },
    logo: {
        height: 50,
        width: 50
    },
    luluAddr: {
        fontSize: 8,
        marginBottom: 5
    },
    addrTable: {
        fontSize: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "stretch",
        flexWrap: "nowrap",
        alignItems: "stretch"
    },
    userAddr: {
        fontSize: 10,
        marginBottom: 5,
        marginTop: 10,
        width: 300
    },
    longCenterTableText: {
        textAlign: "center",
        flexGrow: 5,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: "stretch"
    },
    longLeftTableText: {
        textAlign: "left",
        flexGrow: 5,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: "stretch"
    },
    longRightTableText: {
        textAlign: "left",
        flexGrow: 5,
        flexShrink: 1,
        flexBasis: 'auto',
        alignSelf: "stretch"
    },
    break: {
        width: 900,
        height: 0.5,
        backgroundColor: "gray",
        marginBottom: 10,
        // border:'1px solid gray'
    },
    box: {
        backgroundColor: "#fafafa"
    },
    // footer:{
    //     textAlign: "center",
    //     alignSelf: "stretch",
    //     fontSize: 4,
    //     marginBottom: 5,
    //     marginTop: 10,
    //     width:300,
    //     display:"flex",
    //     flexDirection:"column",
    //     justifyContent:"center",
    // },
    footer1: {
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: 7,
        marginBottom: 5,
        marginTop: 10,
        // width:300,
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        color: 'grey',
    },
    footer2: {
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: 7,
        marginBottom: 5,
        marginTop: 10,
        // width:300,
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        color: 'grey',
    },
    footer3: {
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: 7,
        marginBottom: 5,
        marginTop: 10,
        // width:300,
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        color: 'grey',
    },
    footerPage: {
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: 7,
        marginBottom: 5,
        marginTop: 10,
        // width:300,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        color: 'grey',
    },

})

export const sideBarItems = ['Member Hub', 'Profile', 'Wish List', 'Closet', 'Communications']

//Action Types

export const actionType = {
    'IS_LOADING_FETCH': 'IS_LOADING_FETCH',
    'FETCH_ALL_PRODUCT': 'FETCH_ALL_PRODUCT',
    'UPDATE_VIEWING_PRODUCT': 'UPDATE_VIEWING_PRODUCT',
    'UPDATE_SELECTED_FILTER': 'UPDATE_SELECTED_FILTER',
    'SORT_PRODUCT': 'SORT_PRODUCT',
    'CLICK_FILTER_SORT': 'CLICK_FILTER_SORT',
    'FETCH_ONE_PRODUCT': 'FETCH_ONE_PRODUCT',
    'UPDATE_SMART_FILTER': 'UPDATE_SMART_FILTER',
    'REMOVE_AND_SELECT_ONE_FILTER': 'REMOVE_AND_SELECT_ONE_FILTER',
    'SAVE_SELECTED_ITEM': 'SAVE_SELECTED_ITEM',
    'SORT_ALSO_LIKE': 'SORT_ALSO_LIKE',
    'LOG_IN_SUCCESS': 'LOG_IN_SUCCESS',
    'LOG_IN_FAIL': 'LOG_IN_FAIL',
    'LOG_OUT': 'LOG_OUT',
    'UPDATE_LOCALSTORAGE': 'UPDATE_LOCALSTORAGE',
    'INVALID_TOKEN': 'INVALID_TOKEN',
    'VALID_TOKEN': 'VALID_TOKEN',
    'IS_TOKEN': 'IS_TOKEN',
    'UPDATE_TOKEN': 'UPDATE_TOKEN',
    'UPDATE_IS_LOGIN': 'UPDATE_IS_LOGIN',
    'UPDATE_ERROR_MSG': 'UPDATE_ERROR_MSG',
    'ADD_TO_CART': 'ADD_TO_CART',
    // 'REMOVE_FROM_CART':'REMOVE_FROM_CART',
    'UPDATE_SUBTOTAL': 'UPDATE_SUBTOTAL',
    'UPDATE_CART_ITEM_COLOR_AND_SIZE': 'UPDATE_CART_ITEM_COLOR_AND_SIZE',
    'AUTO_UPDATE_CART_DETAIL': 'AUTO_UPDATE_CART_DETAIL',
    'UPDATE_CART_ITEM_QUANTITY': 'UPDATE_CART_ITEM_QUANTITY',
    'REMOVE_CART_ITEM': 'REMOVE_CART_ITEM',
    'VALIDATE_CART': 'VALIDATE_CART',
    'CLEAR_CART': 'CLEAR_CART',
    'SAVE_CART_ITEM': 'SAVE_CART_ITEM',
    'REMOVE_SAVED_ITEM': 'REMOVE_SAVED_ITEM',
    'UNDO_REMOVE_CART_ITEM': 'UNDO_REMOVE_CART_ITEM',
    'AUTO_REMOVE_INVALID_ITEM': 'AUTO_REMOVE_INVALID_ITEM',
    'FETCH_ALL_ORDERS': 'FETCH_ALL_ORDERS',
    'FETCH_ORDER_DISPLAY': 'FETCH_ORDER_DISPLAY',
    'FETCH_ALL_ORDER_STATUS': 'FETCH_ALL_ORDER_STATUS',
    'CREATE_CART_DB': 'CREATE_CART_DB',
    'SAVE_CART_ID': 'SAVE_CART_ID',
    'CREATE_ORDER_DB': 'CREATE_ORDER_DB',
    'ORDER_PRODUCT_DETAIL': 'ORDER_PRODUCT_DETAIL',
    'ORDER_ID': 'ORDER_ID',
    'FETCH_ORDER': 'FETCH_ORDER',
    // payment
    'GET_ALL_CARDS': 'GET_ALL_CARDS',
    'CURRENT_CARD': 'CURRENT_CARD',
    'UPDATE_SHIPPING_ADDRESS_ID': 'UPDATE_SHIPPING_ADDRESS_ID',
    'UPDATE_SHIPPING_ADDRESS': 'UPDATE_SHIPPING_ADDRESS',
    'UPDATE_BILLING_ADDRESS': 'UPDATE_BILLING_ADDRESS',
    'CHANGE_ORDER_STATUS': 'CHANGE_ORDER_STATUS',
    'CHANGE_ORDER_DETAIL': 'CHANGE_ORDER_DETAIL',
    'FETCH_PRODUCT_PER_PAGE' : 'FETCH_PRODUCT_PER_PAGE',
}

export const modalActionType = {
    'TOGGLE_ADD_TO_BAG_PAGE': 'TOGGLE_ADD_TO_BAG_PAGE',
    'IS_LOADING':'IS_LOADING'

}

export const basicUrl = 'http://api-lulu.hibitbyte.com/product/'

export const productImageRatio = 374.078 / 311.75

export const sortOptions = [
    {
        value: 1,
        label: 'Featured'
    },
    {
        value: 2,
        label: 'New Arrival'
    },
    {
        value: 3,
        label: 'Top Rated'
    },
    {
        value: 4,
        label: 'Price Low to High'
    },
    {
        value: 5,
        label: 'Price High to Low'
    }
]
export const sortOptionsMobile = ['Featured', 'New Arrival', 'Top Rated', 'Price Low to High', 'Price High to Low']

//navBar constants

export const womenMenuFeatures = [`What's new`, `Bestseller`, `Plus Size clothes`, `Reflective running clothes`, `Align shop`, `Lounge wear`, `fall clothes shop`, `lululemon lab`, `we made too much`]
export const womenMenuMain1 = [`Leggings`, `Coats & Jackets`, `Dresses`, `Hoodies & Sweatshirts`, `Joggers`, `Pants`, `Shirts`, `Shoes`]
export const womenMenuMain2 = [`Shorts`, `Skirts`, `Socks`, `Sports Bras`, `Sweaters`, `Swimsuits`, `Tank Tops`, `Underwear`]
export const womenMenuAccessories = [`Bags`, `Gloves & Mittens`, `Hair Accessories`, `Hats`, `Water Bottles`, `Yoga Accessories`, `Yoga Mats`]
export const womenMenuActivities = [`Tennis`, `Running`, `Yoga`, `Workout`, `Hiking`, `Work`]

export const menMenuFeatures = [`What's new`, `Bestseller`, `ABC Pants Shop`, `Metal Vent Tech Shirts`, `Bussiness Casual Clothes`, `Fall Clothes Shop`, `Fall Clothes Shop`, `lululemon lab`, `We Made Too Much`]
export const menMenuMain1 = [`Joggers`, `Button Down Shirts`, `Coats and Jackets`, `Hoodies & Sweatshirts`, `Pants`, `Polo Shirts`, `Shirts`, 'Shoes']
export const menMenuMain2 = [`Shorts`, `Sweaters`, `Swim Trunks`, `Tank Tops`, `Trousers`, `T-Shirts`, `Underwear`]
export const menMenuAccessories = [`Bags`, `Gloves & Mittens`, `Hair Accessories`, `Hats`, `Water Bottles`, `Yoga Accessories`, `Yoga Mats`]
export const menMenuActivities = [`Workout`, `Running`, `Casual`, `Golf`, `Tennis`, `Hiking`]

export const accessoriesMenuFeatures = [`What's new`, `Bestseller`, 'Reflective Accessories', `Women's Socks`, `Men's Socks`, 'Mini Bags', 'Travel Accessories', 'We Made Too Much']
export const accessoriesMenuMain1 = ['Backpacks', 'Bags', 'Beanies', 'Belt Bags', 'Crossbody Bags', `Gloves & Mittens`, `Hair Accessories`]
export const accessoriesMenuMain2 = ['Hats', 'Keychains', 'Scarves & Wraps', 'Wallets & Pouches', 'Water Bottles', `Yoga Accessories`, `Yoga Mats`]
export const accessoriesMenuBags = ['Shop All Selfcare', 'Learn More']
export const accessoriesMenuActivities = ['Yoga', 'Running', 'Hiking', `Workout`, `Tennis`, 'Casual']

export const communityMenuFeatures = ['Team Canada Partnership']
export const communityMenuMain1 = ['At Home Workouts', 'Run Training Plan', 'Mindfulness Tools']
export const communityMenuMain2 = ['Diversity And Inclusion']
export const burgerMenuList1 = ['Women', 'Men', 'Accessories', 'Community']
export const burgerMenuList2 = ['MIRROR', 'Shoes']
export const burgerMenuLinks = ['Lululemon Apps', ' Track My Order', 'Store Locator']

// ##### z-index chart
//1000--<BurgerMenuSidebar/>  .burgerMenuSideBar ---NavBar.scss

//priceTag in ProductDetailImg
export const priceTag = require('./component2/images/priceTag.png')
//textStyle in model detail in ProductDetailImg
export const textStyle = {
    textAlign: 'center',
    margin: 0
}

export const space = " "

//LogInPage consts
export const perks = ['Fast Track Refunds',
    'Check out faster',
    'Track Orders',
    'Wish List',
    'Tailored Suggestions']
export const logInUrl = 'http://api-lulu.hibitbyte.com/auth/login'

//Select dropdown style in ProductHeader
export const customSelectStyles = {
    control: () => ({
        borderStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        width: '150px'
    }),
    option: (provided, state) => ({
        ...provided,
        color: 'black',
        backgroundColor: state.isFocused ? '#fafafa' : state.isSelected ? '#fafafa' : 'white'
    }),
    indicatorSeparator: () => ({
        borderStyle: 'none'
    }),

    menuList: () => ({
        backgroundColor: 'white',
        boxShadow: 'none'
    }),
    menuPortal: provided => ({...provided, zIndex: 2, width: 150, textAlign: 'center'})
}


//Icons in LogInPage
export const RefundIcon = () => {
    return <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                className="perk-icons_icons__1Q2cU" focusable="false" role="img" aria-hidden="true">
        <g fill="none" fillRule="evenodd">
            <path d="M-1188-263H252v1709h-1440z" fill="#FFF"></path>
            <g fill="currentColor" fillRule="nonzero">
                <path
                    d="M20.25 14.5H6V14c0-.552.336-1 .75-1H21v.5c0 .552-.336 1-.75 1zM20.417 17.5H14V17c0-.274.062-.53.173-.71a.817.817 0 01.145-.182.386.386 0 01.227-.108H21v.5c0 .268-.061.546-.178.726a.767.767 0 01-.156.18.416.416 0 01-.25.094z"></path>
                <path
                    d="M22.25 3.25H1.75a1.5 1.5 0 00-1.5 1.5v14.5a1.5 1.5 0 001.5 1.5h20.5a1.5 1.5 0 001.5-1.5V4.75a1.5 1.5 0 00-1.5-1.5zm-20.5 1.5h20.5v14.5H1.75V4.75z"></path>
                <path
                    d="M8.25 6.25h-3.5a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 001.5 1.5h3.5a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-1.5-1.5zm-3.5 1.5h3.5v1.5h-3.5v-1.5z"></path>
            </g>
        </g>
    </svg>
}

export const ClockIcon = () => {
    return <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                className="perk-icons_icons__1Q2cU" focusable="false" role="img" aria-hidden="true">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-933.000000, -263.000000)">
                <g transform="translate(845.000000, 263.000000)">
                    <g transform="translate(88.000000, 0.000000)">
                        <path
                            d="M6.97105576,19.6213781 C8.62037025,21.6809944 11.15615,23 14,23 C18.9705627,23 23,18.9705627 23,14 C23,9.02943725 18.9705627,5 14,5 C11.2263995,5 8.74583714,6.25464569 7.09489512,8.22735496"
                            stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                        <path
                            d="M8.10557053,11.5 L0,11.5 L0,11 C0,10.4477152 0.44771525,10 1,10 L9.10557053,10 L9.10557053,10.5 C9.10557053,11.0522848 8.65785523,11.5 8.10557053,11.5 Z"
                            fill="currentColor" fillRule="nonzero"></path>
                        <path
                            d="M9.10557053,14.5 L1,14.5 L1,14 C1,13.4477152 1.44771525,13 2,13 L10.1055705,13 L10.1055705,13.5 C10.1055705,14.0522848 9.65785523,14.5 9.10557053,14.5 Z"
                            fill="currentColor" fillRule="nonzero"></path>
                        <path
                            d="M18.4098497,11.8374658 L14.3988437,11.8374658 L14.3988437,11.3374658 C14.3988437,10.7851811 14.8465589,10.3374658 15.3988437,10.3374658 L19.4098497,10.3374658 L19.4098497,10.8374658 C19.4098497,11.3897506 18.9621344,11.8374658 18.4098497,11.8374658 Z"
                            fill="currentColor" fillRule="nonzero"
                            transform="translate(16.904347, 11.087466) rotate(-45.000000) translate(-16.904347, -11.087466) "></path>
                        <path
                            d="M8.10557053,17.5 L-2.56328292e-12,17.5 L-2.56328292e-12,17 C-2.56328292e-12,16.4477152 0.44771525,16 1,16 L9.10557053,16 L9.10557053,16.5 C9.10557053,17.0522847 8.65785523,17.5 8.10557053,17.5 Z"
                            fill="currentColor" fillRule="nonzero"></path>
                        <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                        <polyline
                            points="18.8855674 5.71874818 20.6450284 4.05909026 22.8855674 6.17253763 20.8855674 8.05909026"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            transform="translate(20.885567, 6.059090) rotate(-360.000000) translate(-20.885567, -6.059090) "></polyline>
                        <polyline
                            points="12.673041 5 12.673041 2.9079495 11.7092258 1.94413429 11.7092258 1.04251661 16 1.04251661 16 1.94413429 15.0747376 2.86939674 15.0747376 5"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="1.5"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </svg>
}

export const LocationIcon = () => {
    return <svg height="24" width="18" version="1.1" viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg"
                className="perk-icons_icons__1Q2cU" focusable="false" role="img" aria-hidden="true">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="currentColor" transform="translate(-261.000000, -263.000000)">
                <g transform="translate(170.000000, 263.000000)">
                    <g transform="translate(88.000000, 0.000000)">
                        <path
                            d="M12,20.88 C11.6045164,20.8748297 11.2851704,20.5554836 11.28,20.16 C11.28,18.8544 9.68639999,17.0112 8.51519999,15.6576 L8.15999998,15.2064 C6.60479998,13.3824 4.67519997,11.1168 4.67519997,7.75679998 C4.82626655,3.85095989 8.09273567,0.794264014 12,0.902399954 C15.9220322,0.772736192 19.2121785,3.83553215 19.3632,7.75679998 C19.3632,11.1168 17.4432,13.3824 15.8784,15.2064 L15.4848,15.6576 C14.3136,17.0112 12.72,18.8544 12.72,20.16 C12.7148296,20.5554836 12.3954836,20.8748297 12,20.88 Z M12,2.34239996 C8.87292271,2.21211737 6.22714606,4.63062309 6.07679998,7.75679998 C6.07679998,10.56 7.67039998,12.48 9.21599999,14.2656 L9.60959999,14.7168 C10.5018573,15.6903894 11.3020714,16.7444868 12,17.8656 C12.6979286,16.7444868 13.4981427,15.6903894 14.3904,14.7168 L14.784,14.2656 C16.3296,12.48 17.9232,10.56 17.9232,7.75679998 C17.7728539,4.63062309 15.1270773,2.21211737 12,2.34239996 Z M12,11.28 C10.2768716,11.28 8.87999999,9.88312841 8.87999999,8.15999998 C8.87999999,6.43687156 10.2768716,5.03999997 12,5.03999997 C13.7231284,5.03999997 15.12,6.43687156 15.12,8.15999998 C15.1147291,9.8809404 13.7209404,11.2747291 12,11.28 L12,11.28 Z M12,6.47999998 C11.0721616,6.47999998 10.32,7.2321616 10.32,8.15999998 C10.32,9.08783837 11.0721616,9.83999999 12,9.83999999 C12.9278384,9.83999999 13.68,9.08783837 13.68,8.15999998 C13.6747554,7.23434271 12.9256573,6.48524462 12,6.47999998 L12,6.47999998 Z M20.4,20.16 C20.4,18.8352 18.9888,17.7216 16.56,17.0976 C16.3008177,17.0290358 16.0247724,17.0719757 15.7986636,17.2160289 C15.5725548,17.3600821 15.4169849,17.5921228 15.3696,17.856 L15.2928,18.2976 C17.664,18.7296 18.9504,19.584 18.9504,20.16 C18.9504,21.0432 16.2432,22.32 11.9904,22.32 C7.73759998,22.32 5.03999997,21.0432 5.03999997,20.16 C5.03999997,19.584 6.32639998,18.7296 8.69759999,18.2976 L8.62079999,17.856 C8.57341508,17.5921228 8.41784523,17.3600821 8.19173642,17.2160289 C7.96562761,17.0719757 7.68958227,17.0290358 7.43039998,17.0976 C5.01119997,17.7216 3.59039996,18.8352 3.59039996,20.16 C3.59039996,22.5216 7.81439998,23.76 11.9904,23.76 C16.1664,23.76 20.4,22.5216 20.4,20.16 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
}
export const HeartIcon = () => {
    return <svg height="21" width="24" viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg"
                className="perk-icons_icons__1Q2cU" focusable="false" role="img" aria-hidden="true">
        <path
            d="m12 22.75c-.1501298.0015167-.2969783-.0439364-.42-.13-.32-.21-7.79000004-5.27-10.24000005-9.76-1.46-2.68-1.79-6.46000002.75000001-8.86000003 2.48644548-2.3095024 6.33355456-2.3095024 8.82000004 0l1.09 1 1.08-1c2.4864455-2.3095024 6.3335546-2.3095024 8.82 0 2.5400001 2.41000001 2.21 6.19000003.75 8.87000003-2.45 4.49-9.9 9.55-10.22 9.76-.1269991.0845484-.2775728.126569-.43.12zm-5.50000002-19.00008131c-1.25081355-.00712629-2.45683499.46526193-3.37000002 1.32008128-2.00000001 1.87000001-1.66 4.90000002-.47 7.07000003 2.00000001 3.59 7.73000004 7.82 9.34000004 9 1.6-1.14 7.36-5.36 9.32-8.95 1.28-2.34000001 1.54-5.68000002-1-7.49000003-1.9684927-1.32808967-4.5950573-1.11197993-6.32.52l-.88.84000001 1.45 1.4-.35.36c-.3900374.3877236-1.0199625.3877236-1.41 0l-2.94000001-2.75000001c-.91316502-.85481935-2.11918646-1.32720757-3.37000001-1.32008128z"
            fill="currentColor" fillRule="evenodd" transform="translate(0 -2)"></path>
    </svg>
}

export const BagIcon = () => {
    return <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                className="perk-icons_icons__1Q2cU" focusable="false" role="img" aria-hidden="true">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="currentColor" transform="translate(-1158.000000, -263.000000)">
                <g transform="translate(1069.000000, 263.000000)">
                    <g transform="translate(88.000000, 0.000000)">
                        <path
                            d="M22,6.24999995 L18.65,6.24999995 C18.18,3.11999996 17.43,0.249999951 15,0.249999951 C12.57,0.249999951 11.82,3.11999996 11.35,6.24999995 L7.99999998,6.24999995 C7.58803792,6.25538579 7.25538579,6.58803791 7.24999996,6.99999998 L7.24999996,9.99999999 L7.74999996,9.99999999 C8.30228473,9.99999999 8.74999996,9.55228474 8.74999996,8.99999999 L8.74999996,7.74999995 L21.25,7.74999995 L21.25,20 C21.25,21.2426407 20.2426407,22.25 19,22.25 L14,22.25 C14.4907828,21.6029657 14.7544057,20.8120971 14.75,20 L14.75,16 C14.7446142,15.588038 14.4119621,15.2553858 14,15.25 L11.29,15.25 C10.96,13.65 10.23,11.25 7.99999998,11.25 C5.76999997,11.25 4.99999997,13.65 4.70999997,15.25 L1.99999996,15.25 C1.58803789,15.2553858 1.25538577,15.588038 1.24999996,16 L1.24999996,20 C1.24999996,22.0710679 2.92893215,23.75 4.99999997,23.75 L19,23.75 C21.0710678,23.75 22.75,22.0710679 22.75,20 L22.75,6.99999998 C22.7446142,6.58803791 22.4119621,6.25538579 22,6.24999995 Z M15,1.74999996 C16,1.74999996 16.62,3.07999996 17.12,6.24999996 L12.88,6.24999996 C13.38,3.07999996 14,1.74999996 15,1.74999996 Z M7.99999998,12.75 C8.59999999,12.75 9.21999999,13.08 9.73999999,15.25 L6.25999998,15.25 C6.77999998,13.08 7.39999998,12.75 7.99999998,12.75 Z M4.99999997,22.25 C3.75735928,22.25 2.74999996,21.2426407 2.74999996,20 L2.74999996,16.75 L13.25,16.75 L13.25,20 C13.25,21.2426407 12.2426407,22.25 11,22.25 L4.99999997,22.25 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
}
export const AlertIcon = () => {
    return <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                className="iconBlock-1wZMf"
                focusable="false" role="img" aria-hidden="true">
        <g fill="none" fillRule="evenodd">
            <g fill="currentColor" fillRule="evenodd" transform="translate(8 5)">
                <path
                    d="m5.17 12.15c0 .6351275-.51487254 1.15-1.15 1.15s-1.15-.5148725-1.15-1.15.51487254-1.15 1.15-1.15 1.15.5148725 1.15 1.15z"></path>
                <path
                    d="m4.01920762 10c-.35740231-.00038235-1.51472275-.16673774-1.74515309-.40104854-.22387252-.24382345-.31678584-.55759207-.25569563-.86348505l1.83597871-7.73546641c.3574023.00038235 1.64117752.19579794 1.87160786.43010875.22387252.24382345.31678584.55759207.25569563.86348505z"
                    transform="matrix(-.97029573 .2419219 -.2419219 -.97029573 9.211753 9.868939)"></path>
            </g>
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"></circle>
        </g>
    </svg>
}

export const InfoIcon = () => {
    return <svg className="i" height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                focusable="false" role="img" aria-hidden="true">
        <g fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="11"></circle>
            <g fill="currentColor" transform="translate(10.25 6)">
                <path
                    d="m3.3 1.15c0 .63512746-.51487254 1.15-1.15 1.15s-1.15-.51487254-1.15-1.15.51487254-1.15 1.15-1.15 1.15.51487254 1.15 1.15z"></path>
                <path
                    d="m2.06769231 9.88461538h1.16307692v.53846152c0 .5947682-.48215488 1.0769231-1.07692308 1.0769231h-1.07692307c-.2408456-.0003004-.46933342-.1066654-.62461539-.2907692-.15086279-.1915781-.21347505-.4381139-.17230769-.6784616l.88307692-4.41538458h-1.16307692v-.53846154c0-.5947682.48215489-1.07692308 1.07692308-1.07692308h1.07692307c.24084561.00030042.46933342.10666544.62461539.29076923.15086279.19157811.21347505.43811387.17230769.67846154z"></path>
            </g>
        </g>
    </svg>
}

//Icons in NavBar
export const LogoIcon = () => {
    return <svg className="icon">
        <path
            d="M13.499 0C20.956 0 27 6.045 27 13.5 27 20.957 20.956 27 13.499 27 6.044 27 0 20.958 0 13.5 0 6.044 6.044 0 13.499 0zm7.076 20.18c-.425 0-.825-.127-1.22-.391-2.184-1.454-1.438-3.198.053-5.897.63-1.145 1.282-2.324 1.572-3.542.311-1.31.594-3.22-.542-4.664-.534-.677-1.347-1.2-2.413-1.554-1.112-.367-2.54-.566-4.25-.589l-.118-.003-.434.003c-1.709.023-3.139.222-4.248.589-1.068.354-1.88.876-2.415 1.554-1.136 1.445-.853 3.354-.54 4.664.288 1.218.941 2.4 1.57 3.541 1.491 2.7 2.238 4.444.052 5.898-.394.264-.792.39-1.218.39-.85 0-1.83-.425-2.352-.685l.127.223c1.08 1.621 2.468 2.483 4.01 2.483.676 0 1.39-.164 2.12-.488.775-.343 1.455-.971 1.917-1.769.46-.798.643-1.657.512-2.421-.158-.685-.516-1.606-.927-2.673-1.077-2.783-2.548-6.588-1.278-8.449.536-.785 1.5-1.169 2.945-1.174 1.447.005 2.41.389 2.946 1.174 1.272 1.861-.2 5.666-1.275 8.445-.413 1.068-.77 1.99-.928 2.67-.132.771.05 1.63.512 2.428s1.142 1.426 1.917 1.77c.73.323 1.444.487 2.12.487 1.542 0 2.93-.862 4.015-2.49l.122-.216c-.52.26-1.5.686-2.352.686z"/>
    </svg>
}

export const SignInIcon = () => {
    return <svg className="icon">
        <path
            d="M12,13.75 L12,13.75 C9.65999999,13.75 7.76999998,10.95 7.76999998,8.62999999 C7.71175143,7.47763224 8.13358132,6.35263811 8.93513297,5.52266265 C9.73668462,4.69268718 10.8463026,4.23192677 12,4.24999997 C13.1554201,4.22912544 14.267694,4.6886559 15.0714553,5.51895648 C15.8752166,6.34925707 16.2983847,7.47586719 16.24,8.62999999 C16.24,11 14.35,13.75 12,13.75 Z M12,12.25 L12,12.25 C13.41,12.25 14.74,10.25 14.74,8.62999999 C14.74,7.11673977 13.5132602,5.88999997 12,5.88999997 C10.4867398,5.88999997 9.25999999,7.11673977 9.25999999,8.62999999 C9.25999999,10.21 10.59,12.25 12,12.25 Z M23.7501408,12 C23.747319,8.7629512 22.410448,5.67014679 20.0543953,3.45034774 C17.6983426,1.23054869 14.5314731,0.0800698922 11.3,0.269999951 C4.8806643,0.734792781 0.00124133673,6.23079737 0.299999951,12.66 C0.413907928,14.9916244 1.22565688,17.2352567 2.62999996,19.1 L3.06999996,18.77 C3.46928704,18.4617435 3.57647527,17.9043647 3.31999996,17.47 C2.28627997,15.8334527 1.7415763,13.9356635 1.74999996,12 C1.75531618,7.64352733 4.5138165,3.76638452 8.62777135,2.33311627 C12.7417262,0.899848016 17.3121896,2.22363975 20.023312,5.63372741 C22.7344344,9.04381506 22.9938046,13.7950557 20.67,17.48 C20.4216737,17.914482 20.5327583,18.4656326 20.93,18.77 L21.37,19.1 C22.9257403,17.0611585 23.7626233,14.5645747 23.7501408,12 L23.7501408,12 Z M12,23.75 C9.12349179,23.7381218 6.3514487,22.6705827 4.20999997,20.75 L4.20999997,20.75 L4.14999997,20.7 C3.93442391,20.4571068 3.89441976,20.1050702 4.04999997,19.82 C4.46211838,18.7967568 5.07791707,17.8679555 5.85999997,17.09 C7.12700092,15.8326592 8.85592887,15.1526624 10.64,15.21 L13.36,15.21 C15.1440711,15.1526624 16.8729991,15.8326592 18.14,17.09 C18.8811288,17.8219195 19.4721905,18.6915275 19.88,19.65 C20.1217798,19.9394903 20.1217798,20.3605098 19.88,20.65 C19.8451679,20.694854 19.804854,20.7351679 19.76,20.77 C17.6213862,22.673289 14.8628441,23.7326261 12,23.75 L12,23.75 Z M5.61999997,20 C9.3534983,22.9739077 14.6465017,22.9739077 18.38,20 C18.0600887,19.3168758 17.6197219,18.6969748 17.08,18.17 C16.0934533,17.1947323 14.7460705,16.6731647 13.36,16.73 L10.64,16.73 C9.25392947,16.6731647 7.90654674,17.1947323 6.91999998,18.17 C6.38255867,18.6989212 5.94250003,19.3183884 5.61999997,20 Z"/>
    </svg>
}

export const StoreLocatorIcon = () => {
    return <svg>
        <path
            d="M12,20.88 C11.6045164,20.8748297 11.2851704,20.5554836 11.28,20.16 C11.28,18.8544 9.68639999,17.0112 8.51519999,15.6576 L8.15999998,15.2064 C6.60479998,13.3824 4.67519997,11.1168 4.67519997,7.75679998 C4.82626655,3.85095989 8.09273567,0.794264014 12,0.902399954 C15.9220322,0.772736192 19.2121785,3.83553215 19.3632,7.75679998 C19.3632,11.1168 17.4432,13.3824 15.8784,15.2064 L15.4848,15.6576 C14.3136,17.0112 12.72,18.8544 12.72,20.16 C12.7148296,20.5554836 12.3954836,20.8748297 12,20.88 Z M12,2.34239996 C8.87292271,2.21211737 6.22714606,4.63062309 6.07679998,7.75679998 C6.07679998,10.56 7.67039998,12.48 9.21599999,14.2656 L9.60959999,14.7168 C10.5018573,15.6903894 11.3020714,16.7444868 12,17.8656 C12.6979286,16.7444868 13.4981427,15.6903894 14.3904,14.7168 L14.784,14.2656 C16.3296,12.48 17.9232,10.56 17.9232,7.75679998 C17.7728539,4.63062309 15.1270773,2.21211737 12,2.34239996 Z M12,11.28 C10.2768716,11.28 8.87999999,9.88312841 8.87999999,8.15999998 C8.87999999,6.43687156 10.2768716,5.03999997 12,5.03999997 C13.7231284,5.03999997 15.12,6.43687156 15.12,8.15999998 C15.1147291,9.8809404 13.7209404,11.2747291 12,11.28 L12,11.28 Z M12,6.47999998 C11.0721616,6.47999998 10.32,7.2321616 10.32,8.15999998 C10.32,9.08783837 11.0721616,9.83999999 12,9.83999999 C12.9278384,9.83999999 13.68,9.08783837 13.68,8.15999998 C13.6747554,7.23434271 12.9256573,6.48524462 12,6.47999998 L12,6.47999998 Z M20.4,20.16 C20.4,18.8352 18.9888,17.7216 16.56,17.0976 C16.3008177,17.0290358 16.0247724,17.0719757 15.7986636,17.2160289 C15.5725548,17.3600821 15.4169849,17.5921228 15.3696,17.856 L15.2928,18.2976 C17.664,18.7296 18.9504,19.584 18.9504,20.16 C18.9504,21.0432 16.2432,22.32 11.9904,22.32 C7.73759998,22.32 5.03999997,21.0432 5.03999997,20.16 C5.03999997,19.584 6.32639998,18.7296 8.69759999,18.2976 L8.62079999,17.856 C8.57341508,17.5921228 8.41784523,17.3600821 8.19173642,17.2160289 C7.96562761,17.0719757 7.68958227,17.0290358 7.43039998,17.0976 C5.01119997,17.7216 3.59039996,18.8352 3.59039996,20.16 C3.59039996,22.5216 7.81439998,23.76 11.9904,23.76 C16.1664,23.76 20.4,22.5216 20.4,20.16 Z"/>
    </svg>
}

export const WishListIcon = () => {
    return <svg>
        <path
            d="m12 22.75c-.1501298.0015167-.2969783-.0439364-.42-.13-.32-.21-7.79000004-5.27-10.24000005-9.76-1.46-2.68-1.79-6.46000002.75000001-8.86000003 2.48644548-2.3095024 6.33355456-2.3095024 8.82000004 0l1.09 1 1.08-1c2.4864455-2.3095024 6.3335546-2.3095024 8.82 0 2.5400001 2.41000001 2.21 6.19000003.75 8.87000003-2.45 4.49-9.9 9.55-10.22 9.76-.1269991.0845484-.2775728.126569-.43.12zm-5.50000002-19.00008131c-1.25081355-.00712629-2.45683499.46526193-3.37000002 1.32008128-2.00000001 1.87000001-1.66 4.90000002-.47 7.07000003 2.00000001 3.59 7.73000004 7.82 9.34000004 9 1.6-1.14 7.36-5.36 9.32-8.95 1.28-2.34000001 1.54-5.68000002-1-7.49000003-1.9684927-1.32808967-4.5950573-1.11197993-6.32.52l-.88.84000001 1.45 1.4-.35.36c-.3900374.3877236-1.0199625.3877236-1.41 0l-2.94000001-2.75000001c-.91316502-.85481935-2.11918646-1.32720757-3.37000001-1.32008128z"/>
    </svg>
}

export const GiftIcon = () => {
    return <svg className="gift">
        <path
            d="M14.5,2.75a.5.5,0,0,1,.5.5v9.5a.5.5,0,0,1-.5.5H1.5a.5.5,0,0,1-.5-.5V3.25a.5.5,0,0,1,.5-.5h13m0-1H1.5A1.5,1.5,0,0,0,0,3.25v9.5a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V3.25a1.5,1.5,0,0,0-1.5-1.5Z"/>
        <path
            d="M7.32,8.79H7.24c-.5-.08-3-.54-3.72-1.28a2.22,2.22,0,0,1,0-3.08,2.18,2.18,0,0,1,3.05,0h0c.71.73,1.16,3.28,1.24,3.79a.46.46,0,0,1-.14.43A.47.47,0,0,1,7.32,8.79ZM5,4.77a1.08,1.08,0,0,0-.8.35,1.2,1.2,0,0,0,0,1.68,7,7,0,0,0,2.45.85,7.23,7.23,0,0,0-.84-2.53h0A1.1,1.1,0,0,0,5,4.77Z"/>
        <path
            d="M8.66,8.79a.47.47,0,0,1-.35-.15.46.46,0,0,1-.14-.43c.08-.51.53-3.06,1.25-3.79a2.17,2.17,0,0,1,3,0,2.22,2.22,0,0,1,0,3.08c-.72.74-3.22,1.2-3.71,1.28Zm2.28-4a1.1,1.1,0,0,0-.81.35,7.44,7.44,0,0,0-.84,2.54,7.12,7.12,0,0,0,2.46-.86,1.21,1.21,0,0,0,0-1.68A1.11,1.11,0,0,0,10.94,4.77Z"/>
        <path
            d="M8.25,9l-2.74,2.8-.36.36-.23-.24a.68.68,0,0,1,0-1L7.54,8.24a.5.5,0,0,1,.71,0A.54.54,0,0,1,8.25,9Z"/>
        <path
            d="M7.73,9l2.74,2.8.36.36.23-.24a.7.7,0,0,0,0-1L8.44,8.24a.5.5,0,0,0-.71,0A.54.54,0,0,0,7.73,9Z"/>
        <rect height="1" width="16" y="8.36"></rect>
        <rect height="12" width="1" x="7.49" y="2"></rect>
    </svg>
}
export const CartIcon = () => {
    return <svg>
        <path
            d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 00-.75.75v12A4.75 4.75 0 008 23.75h8A4.75 4.75 0 0020.75 19V7a.76.76 0 00-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0116 22.25H8A3.26 3.26 0 014.75 19V7.75H7l-.24 2.16.49.06a1 1 0 001.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 001.12.87l.49-.06L17 7.75h2.28L19.25 19z"/>
    </svg>
}

export const CanIcon = () => {
    return <svg className="can">
        <path
            d="M8.5,0.1c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0C3.3,0.3,0.1,3.8,0.1,8c0,4.1,3.1,7.5,7.1,7.9h0c0.3,0,0.5,0,0.8,0 c0.3,0,0.6,0,0.8,0c4-0.4,7.1-3.8,7.1-7.9C15.9,3.8,12.7,0.3,8.5,0.1z M5.2,1.6C4.2,3,3.6,5,3.5,7.4H1.1C1.3,4.8,3,2.6,5.2,1.6z M1.1,8.6h2.4c0.1,2.3,0.7,4.4,1.7,5.7C2.9,13.3,1.3,11.2,1.1,8.6z M7.4,14.7c-1.5-0.5-2.6-3.1-2.7-6.1h2.7V14.7z M7.4,7.4H4.7 c0.1-3,1.3-5.5,2.7-6.1V7.4z M14.9,7.4h-2.4C12.4,5,11.8,3,10.8,1.6C13.1,2.6,14.7,4.8,14.9,7.4z M8.6,1.3c1.4,0.5,2.6,3.1,2.7,6.1 H8.6V1.3z M8.6,14.7V8.6h2.7C11.2,11.6,10.1,14.2,8.6,14.7z M10.8,14.3c1-1.4,1.6-3.4,1.7-5.7h2.4C14.7,11.1,13.1,13.3,10.8,14.3z"></path>
    </svg>
}

export const MenuIcon = () => {
    return <svg>
        <path
            d="M21,6.74999997 L1.99999996,6.74999997 L1.99999996,6.24999997 C1.99999996,5.69771522 2.44771521,5.24999997 2.99999996,5.24999997 L22,5.24999997 L22,5.74999997 C22,6.30228473 21.5522848,6.74999997 21,6.74999997 Z M22,11.75 L22,11.25 L2.99999996,11.25 C2.44771521,11.25 1.99999996,11.6977152 1.99999996,12.25 L1.99999996,12.75 L21,12.75 C21.5522848,12.75 22,12.3022848 22,11.75 Z M22,17.75 L22,17.25 L2.99999996,17.25 C2.44771521,17.25 1.99999996,17.6977153 1.99999996,18.25 L1.99999996,18.75 L21,18.75 C21.5522848,18.75 22,18.3022848 22,17.75 Z"/>
    </svg>
}

//Footer Consts
export const list1 = ['MY ACCOUNT', ['Sign In', 'Register', 'Order Status', 'Returns']]
export const list2 = ['HELP',['COVID-19 FAQ','Services','Ordering','Shipping Policy','Returns','Sizing','Our Products']]
export const list3 = ['ABOUT US',['Our Business','Media','Investors','Strategic Sales','Affiliates and Creators','Sweat Collective','Team Canada']]
export const list4 = ['CONTACT US',['Live Chat','1.877.263.9300','Email Sign Up']]
export const list5 = ['CAREERS', 'COMMUNITY','SUSTAINABILITY','SOCIAL IMPACT','DIVERSITY AND INCLUSION','LULULEMON APPS','GIFT CARDS','STORE LOCATOR']
export const list6 = ['Privacy Policy (Last Updated: 9/10/20)','UK Modern Slavery Act','California Transparency Act','Accessibility Statement' ]
export const list7 = ['Privacy Policy (Last Updated: 9/10/20)',' Terms of Use','© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7']

//filter data
export const filterData = Object.freeze({
    "Gender": [
        {
            "name": "Men",
            "isChecked": false
        },
        {
            "name": "Women",
            "isChecked": false
        }
    ],
    "Category": [
        {
            "name": "Leggings",
            "isChecked": false
        },
        {
            "name": "Shirts",
            "isChecked": false
        },
        {
            "name": "Coats & Jackets",
            "isChecked": false
        },
        {
            "name": "Joggers",
            "isChecked": false
        },
        {
            "name": "Hoodies & Sweatshirts",
            "isChecked": false
        },
        {
            "name": "Accessories",
            "isChecked": false
        },
        {
            "name": "Bags",
            "isChecked": false
        },
        {
            "name": "Bodysuits",
            "isChecked": false
        },
        {
            "name": "Button Down Shirts",
            "isChecked": false
        },
        {
            "name": "Capris",
            "isChecked": false
        },
        {
            "name": "Dresses",
            "isChecked": false
        },
        {
            "name": "Hair Accessories",
            "isChecked": false
        },
        {
            "name": "Hats",
            "isChecked": false
        },
        {
            "name": "Long Sleeve Shirts",
            "isChecked": false
        },
        {
            "name": "Pants",
            "isChecked": false
        },
        {
            "name": "Polo Shirts",
            "isChecked": false
        },
        {
            "name": "Shoes",
            "isChecked": false
        },
        {
            "name": "Short Sleeve Shirts",
            "isChecked": false
        },
        {
            "name": "Shorts",
            "isChecked": false
        },
        {
            "name": "Socks",
            "isChecked": false
        },
        {
            "name": "Sports Bras",
            "isChecked": false
        },
        {
            "name": "Sweaters",
            "isChecked": false
        },
        {
            "name": "Sweatpants",
            "isChecked": false
        },
        {
            "name": "T-Shirts",
            "isChecked": false
        },
        {
            "name": "Tank Tops",
            "isChecked": false
        },
        {
            "name": "Team Canada",
            "isChecked": false
        },
        {
            "name": "Track Pants",
            "isChecked": false
        },
        {
            "name": "Trousers",
            "isChecked": false
        },
        {
            "name": "Underwear",
            "isChecked": false
        },
        {
            "name": "Water Bottles",
            "isChecked": false
        },
        {
            "name": "Yoga Accessories",
            "isChecked": false
        },
        {
            "name": "Yoga Mats",
            "isChecked": false
        },
        {
            "name": "Hoodies",
            "isChecked": false
        }
    ],
    "Type": [
        {
            "name": "Athletic Jackets",
            "isChecked": false
        },
        {
            "name": "Athletic Shorts",
            "isChecked": false
        },
        {
            "name": "Bomber Jackets",
            "isChecked": false
        },
        {
            "name": "Bucket Hats",
            "isChecked": false
        },
        {
            "name": "Cardigans",
            "isChecked": false
        },
        {
            "name": "Chino Shorts",
            "isChecked": false
        },
        {
            "name": "Crewneck Sweatshirts",
            "isChecked": false
        },
        {
            "name": "Half Zip Sweatshirts",
            "isChecked": false
        },
        {
            "name": "High Neck Bras",
            "isChecked": false
        },
        {
            "name": "Hoodies",
            "isChecked": false
        },
        {
            "name": "Keychains",
            "isChecked": false
        },
        {
            "name": "Liner Shorts",
            "isChecked": false
        },
        {
            "name": "Longline Bras",
            "isChecked": false
        },
        {
            "name": "Onesies",
            "isChecked": false
        },
        {
            "name": "Puffer Jackets",
            "isChecked": false
        },
        {
            "name": "Pullover Sweaters",
            "isChecked": false
        },
        {
            "name": "Racerback Bras",
            "isChecked": false
        },
        {
            "name": "Rain Jackets",
            "isChecked": false
        },
        {
            "name": "Rompers",
            "isChecked": false
        },
        {
            "name": "Strappy Bras",
            "isChecked": false
        },
        {
            "name": "Sweat Shorts",
            "isChecked": false
        }
    ],
    "Activity": [
        {
            "name": "On the Move",
            "isChecked": false
        },
        {
            "name": "Bike",
            "isChecked": false
        },
        {
            "name": "Casual",
            "isChecked": false
        },
        {
            "name": "Dance",
            "isChecked": false
        },
        {
            "name": "Golf",
            "isChecked": false
        },
        {
            "name": "Hiking",
            "isChecked": false
        },
        {
            "name": "Running",
            "isChecked": false
        },
        {
            "name": "Swim",
            "isChecked": false
        },
        {
            "name": "Tennis",
            "isChecked": false
        },
        {
            "name": "Thermal",
            "isChecked": false
        },
        {
            "name": "Training",
            "isChecked": false
        },
        {
            "name": "Travel",
            "isChecked": false
        },
        {
            "name": "Work",
            "isChecked": false
        },
        {
            "name": "Workout",
            "isChecked": false
        },
        {
            "name": "Yoga",
            "isChecked": false
        }
    ],
    "Size": [
        {
            "name": "0",
            "isChecked": false
        },
        {
            "name": "2",
            "isChecked": false
        },
        {
            "name": "4",
            "isChecked": false
        },
        {
            "name": "5",
            "isChecked": false
        },
        {
            "name": "5.5",
            "isChecked": false
        },
        {
            "name": "6",
            "isChecked": false
        },
        {
            "name": "6.5",
            "isChecked": false
        },
        {
            "name": "7",
            "isChecked": false
        },
        {
            "name": "7.5",
            "isChecked": false
        },
        {
            "name": "8",
            "isChecked": false
        },
        {
            "name": "8.5",
            "isChecked": false
        },
        {
            "name": "9",
            "isChecked": false
        },
        {
            "name": "9.5",
            "isChecked": false
        },
        {
            "name": "10",
            "isChecked": false
        },
        {
            "name": "10.5",
            "isChecked": false
        },
        {
            "name": "11",
            "isChecked": false
        },
        {
            "name": "12",
            "isChecked": false
        },
        {
            "name": "14",
            "isChecked": false
        },
        {
            "name": "16",
            "isChecked": false
        },
        {
            "name": "18",
            "isChecked": false
        },
        {
            "name": "20",
            "isChecked": false
        },
        {
            "name": "26",
            "isChecked": false
        },
        {
            "name": "27",
            "isChecked": false
        },
        {
            "name": "28",
            "isChecked": false
        },
        {
            "name": "29",
            "isChecked": false
        },
        {
            "name": "30",
            "isChecked": false
        },
        {
            "name": "31",
            "isChecked": false
        },
        {
            "name": "32",
            "isChecked": false
        },
        {
            "name": "33",
            "isChecked": false
        },
        {
            "name": "34",
            "isChecked": false
        },
        {
            "name": "35",
            "isChecked": false
        },
        {
            "name": "36",
            "isChecked": false
        },
        {
            "name": "37",
            "isChecked": false
        },
        {
            "name": "38",
            "isChecked": false
        },
        {
            "name": "39",
            "isChecked": false
        },
        {
            "name": "40",
            "isChecked": false
        },
        {
            "name": "42",
            "isChecked": false
        },
        {
            "name": "44",
            "isChecked": false
        },
        {
            "name": "46",
            "isChecked": false
        },
        {
            "name": "sizeDivider",
            "isChecked": false
        },
        {
            "name": "XS",
            "isChecked": false
        },
        {
            "name": "XS/S",
            "isChecked": false
        },
        {
            "name": "S",
            "isChecked": false
        },
        {
            "name": "S/M",
            "isChecked": false
        },
        {
            "name": "M",
            "isChecked": false
        },
        {
            "name": "M/L",
            "isChecked": false
        },
        {
            "name": "L",
            "isChecked": false
        },
        {
            "name": "L/XL",
            "isChecked": false
        },
        {
            "name": "XL",
            "isChecked": false
        },
        {
            "name": "XL/XXL",
            "isChecked": false
        },
        {
            "name": "XXL",
            "isChecked": false
        },
        {
            "name": "XXXL",
            "isChecked": false
        },
        {
            "name": "sizeDivider",
            "isChecked": false
        },
        {
            "name": "ONE SIZE",
            "isChecked": false
        }
    ],
    "SizeType": [
        {
            "name": "Plus Size",
            "isChecked": false
        },
        {
            "name": "Tall",
            "isChecked": false
        },
        {
            "name": "Short",
            "isChecked": false
        }
    ],
    "Colour": [
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Camo_filterSwatch.jpg",
            "alt": "Camo",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Khaki_filterSwatch.jpg",
            "alt": "Khaki",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Neon_filterSwatch.jpg",
            "alt": "Neon",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Printed_filterSwatch.jpg",
            "alt": "Printed",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Black_filterSwatch.jpg",
            "alt": "Black",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Blue_filterSwatch.jpg",
            "alt": "Blue",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Brown_filterSwatch.jpg",
            "alt": "Brown",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Burgundy_filterSwatch.jpg",
            "alt": "Burgundy",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Gold_filterSwatch.jpg",
            "alt": "Gold",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Green_filterSwatch.jpg",
            "alt": "Green",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Grey_filterSwatch.jpg",
            "alt": "Grey",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Navy_filterSwatch.jpg",
            "alt": "Navy",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Neutral_filterSwatch.jpg",
            "alt": "Neutral",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Olive_filterSwatch.jpg",
            "alt": "Olive",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Orange_filterSwatch.jpg",
            "alt": "Orange",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Pastel_filterSwatch.jpg",
            "alt": "Pastel",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Pink_filterSwatch.jpg",
            "alt": "Pink",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Purple_filterSwatch.jpg",
            "alt": "Purple",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Red_filterSwatch.jpg",
            "alt": "Red",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Tie_dye_filterSwatch.jpg",
            "alt": "Tie dye",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/White_filterSwatch.jpg",
            "alt": "White",
            "isChecked": false
        },
        {
            "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Yellow_filterSwatch.jpg",
            "alt": "Yellow",
            "isChecked": false
        }
    ],
    "Collection": [
        {
            "name": "ABC",
            "isChecked": false
        },
        {
            "name": "Align",
            "isChecked": false
        },
        {
            "name": "All Yours",
            "isChecked": false
        },
        {
            "name": "Always In Motion",
            "isChecked": false
        },
        {
            "name": "At Ease",
            "isChecked": false
        },
        {
            "name": "City Sweat",
            "isChecked": false
        },
        {
            "name": "Commission",
            "isChecked": false
        },
        {
            "name": "Dance Studio",
            "isChecked": false
        },
        {
            "name": "Define",
            "isChecked": false
        },
        {
            "name": "Drysense",
            "isChecked": false
        },
        {
            "name": "Energy",
            "isChecked": false
        },
        {
            "name": "Engineered Warmth",
            "isChecked": false
        },
        {
            "name": "Fast & Free",
            "isChecked": false
        },
        {
            "name": "Free to Be",
            "isChecked": false
        },
        {
            "name": "Fundamental",
            "isChecked": false
        }
    ],
    "Features": [
        {
            "name": "Seamless",
            "isChecked": false
        },
        {
            "name": "Anti Stink",
            "isChecked": false
        },
        {
            "name": "Waterproof",
            "isChecked": false
        },
        {
            "name": "Lightweight",
            "isChecked": false
        },
        {
            "name": "Insulated",
            "isChecked": false
        },
        {
            "name": "Reflective",
            "isChecked": false
        },
        {
            "name": "Down",
            "isChecked": false
        },
        {
            "name": "Primaloft",
            "isChecked": false
        },
        {
            "name": "ABC Technology",
            "isChecked": false
        }
    ],
    "Climate": [],
    "Fabric": [
        {
            "name": "Everlux™",
            "isChecked": false
        },
        {
            "name": "Nulu™",
            "isChecked": false
        },
        {
            "name": "Nulux™",
            "isChecked": false
        },
        {
            "name": "Luxtreme™",
            "isChecked": false
        },
        {
            "name": "Ultralu™",
            "isChecked": false
        },
        {
            "name": "Warpstreme™",
            "isChecked": false
        },
        {
            "name": "Luon™",
            "isChecked": false
        },
        {
            "name": "Wool",
            "isChecked": false
        },
        {
            "name": "Cotton",
            "isChecked": false
        },
        {
            "name": "Pima Cotton",
            "isChecked": false
        },
        {
            "name": "French Terry",
            "isChecked": false
        },
        {
            "name": "Swift",
            "isChecked": false
        },
        {
            "name": "Fleece",
            "isChecked": false
        },
        {
            "name": "Ripstop",
            "isChecked": false
        },
        {
            "name": "Softstreme™",
            "isChecked": false
        },
        {
            "name": "Utilitech™",
            "isChecked": false
        }
    ]
})

// lazy loading images
// credit to Jack for teaching our group about lazy loading
export const lazyLoading = () => {
    // const images = document.querySelectorAll('[data-src]')
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            })
        }, {
            rootMargin: '-200px 0px 0px 0px',
            threshold: 0
        })
    const cards = document.querySelectorAll(".galleryCard")
    cards.forEach(card => observer.observe(card))
    return () => {
        cards.forEach(card => observer.unobserve(card))
    }
}

// control all page transition for framer motion
export const initial = {opacity: 0, transition: {duration: 0.1}}
export const animate = {opacity: 1, transition: {duration: 0.5}}
export const exit = {opacity: 0, transition: {duration: 0.1}}

export const stripePublicAPIKey = 'pk_test_51Lv6y5IrmRleTCn7OV6oAETCRpdI38CFizKOqeHmtorV8T8MgZDYtwt0q5BJ3GXEF7ziFLP5QM0QFHX4cfLAwVMQ00dwJr20NN';

// orderStatus
export const orderStatusList = [
    {value: 'Order received', label: 'Order received'},
    {value: 'Order is being processed', label:'Order is being processed'},
    {value: 'Order is placed', label: 'Order is placed'},
    {value: 'Payment is failed', label: 'Payment is failed'},
    {value: 'Order shipped', label: 'Order shipped'},
    {value: 'Order delivered', label: 'Order delivered'},
    {value: 'Order refunded', label: "Order refunded"},
    {value: 'Order cancelled', label: 'Order cancelled'}
]

export const jasonM2WToken = 'PE%2BNQQDutOO4Z9rI1Bn9iYtbcmaMMTCm3SYqpL5DvpITd5vea/1Pq5hkV7bgYKhOMz%2BmQuZ7pUiXah75M2HnZg=='

