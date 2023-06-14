import {actionType, backendUrl, basicUrl, filterData} from "../helper";
import axios from "axios";
import {useSelector} from "react-redux";

const fetchAllSortingAction = (sortingIndex = 1, filter = {...filterData}, pageNum = 1) => dispatch => {
    // console.log(`start`)
    let axios = require('axios');
    let data = JSON.stringify(filter)
    console.log(pageNum)
    let config = {
        method: 'post',
        // url: 'http://api-lulu.hibitbyte.com/product/allProducts/' + "?sortingId=" + sortingIndex + "&page=" + pageNum,
        url: 'http://localhost:3000/product'  + "?pageNum=" + 1, // Todo:removed sorting, should be added back in the future
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJreHVAbWFyazJ3aW4uY29tIiwiaXAiOiIxIiwiYnJvd3NlciI6IkNocm9tZS8xMDEuMC4wLjA7IEJsaW5rLzEwMS4wLjAuMCIsImRldmljZSI6Ik1hYyBPUyAxMC4xNS43IiwiaWF0IjoxNjU4MTYxMDg1LCJleHAiOjE2NjA3NTMwODV9.JOp9Ytw0ptPa-y0IgZqrD7FuOiGRGerOxo7Xg5R-SpQ',
            'Content-Type': 'application/json'
        },
        data: data
    };
    // console.log('before axios')
    axios(config)
        .then(res => {
            // console.log(`first then`)
            let result = res.data.data
            console.log(result)
            dispatch({
                type: actionType.FETCH_ALL_PRODUCT,
                payload: result
            })
            dispatch({
                type: actionType.UPDATE_VIEWING_PRODUCT,
                payload: 45
            })
            dispatch({
                type: actionType.IS_LOADING_FETCH,
                payload: false
            })
            // console.log(res.data);
        })
        .catch(e => {
            // console.log(e)
            dispatch({
                type: actionType.IS_LOADING_FETCH,
                payload: false
            })
        });
}
// old lazy loading, to be deleted after lazy loading fixed
const updateViewingProductsAction = (pageNum) => dispatch => {
    dispatch({
        type: actionType.UPDATE_VIEWING_PRODUCT,
        payload: (pageNum + 1) * 45
    })
}

// update one filter by given category and filter
const updateSelectedFilterAction = (category, filter) => {
    // console.log(`[action]update filter of `,category, filter)
    return {
        type: actionType.UPDATE_SELECTED_FILTER,
        payload: {category, filter}
    }
}

// sorting option of high to low and low to high
const sortProductAction = (isHighLow) => {
    // console.log(`[action] sort product from High to Low`, isHighLow)
    return {
        type: actionType.SORT_PRODUCT,
        payload: isHighLow,
    }
}

const filterSortBtnClickAction = (btnClick) => {
    return {
        type: actionType.CLICK_FILTER_SORT,
        payload: btnClick
    }
}

// fetching one product when product detail page is loaded
const fetchOneProduct = (productId) => dispatch => {
    // console.log(`[action]`)
    let axios = require('axios');

    let config = {
        method: 'get',
        url: 'http://localhost:3000/product/' + productId,
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJreHVAbWFyazJ3aW4uY29tIiwiaXAiOiIxIiwiYnJvd3NlciI6IkNocm9tZS8xMDEuMC4wLjA7IEJsaW5rLzEwMS4wLjAuMCIsImRldmljZSI6Ik1hYyBPUyAxMC4xNS43IiwiaWF0IjoxNjU4MTYxMDg1LCJleHAiOjE2NjA3NTMwODV9.JOp9Ytw0ptPa-y0IgZqrD7FuOiGRGerOxo7Xg5R-SpQ'
        }
    };

    axios(config)
        .then(res => {
            // console.log(JSON.stringify(res.data));
            // console.log('fetchOneProduct action works')
            dispatch({
                type: actionType.FETCH_ONE_PRODUCT,
                payload: res.data.data
            })

        })
        .catch(function (error) {
            // console.log(error);
        });
}

// trigger reducer to update smart filter from smartFilter base to include all true filter in fetch, one time use only
// const updateSmartFilterAction = () => {
//     return{
//         type: actionType.UPDATE_SMART_FILTER,
//         payload: {}
//     }
// }

// remove all existing filter and select one filter by given category and filter
const removeAndSelectOneFilterAction = (category, filter) => {
    // console.log(`[action]update filter of `,category, filter)
    return {
        type: actionType.REMOVE_AND_SELECT_ONE_FILTER,
        payload: {category, filter}
    }
}

const saveSelectedItem = (item) => {
    // console.log("[action] selected item", item)
    return {
        type: actionType.SAVE_SELECTED_ITEM,
        payload: {item}
    }
}

const sortAlsoLikeAction = (productId, color) => {
    // console.log(`alsoLikeUpdate`)
    return {
        type: actionType.SORT_ALSO_LIKE,
        payload: {productId, color}
    }
}

const updateLocalstorageState = (updateStorage) => {
    // console.log('[action] update local')
    return {
        type: actionType.UPDATE_LOCALSTORAGE,
        payload: updateStorage
    }
}

const createCartDB = (cartItems) => async dispatch => {
    console.log(cartItems)
    let axios = require('axios');
    let data = JSON.stringify({
        "userId": 1,
        "orderItems": cartItems
    });

    let config = {
        method: 'post',
        url: backendUrl + `cart/create`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    await axios(config)
        .then(res => {
            // console.log('first then')
            // console.log('res', res)
            let result = res.data.data
            let cartId = res.data.data.newCartId
            dispatch({
                type: actionType.CREATE_CART_DB,
                payload: result
            })
            dispatch({
                type: actionType.SAVE_CART_ID,
                payload: cartId
            })
        }).catch((e) => {
            console.log(e)
        });

}

const createOrderDB = (cartId) => async dispatch => {
    // console.log('dispathced185')

    try {
        let axios = require('axios');
        let data = JSON.stringify({
            "cartId": cartId
        });

        let config = {
            method: 'post',
            url: backendUrl + `order`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        dispatch({
            type: actionType.IS_LOADING_FETCH, payload: true
        })


        let res = await axios(config)
        // console.log('create order axios', res)
        let result = res.data.data
        let orderId = result.order.id
        let productInfo = result.cart.cartItem
        let itemInfo = productInfo.map(item => {
            console.log(item)
            const images = JSON.parse(item.product.images)
            const img = images.find(img => img.colorId === item.colorId)
            const imgUrl = img?.mainCarousel?.media?.split(" | ")[0]
            return {
                name: item.product.name,
                color: img.colorAlt,
                imgUrl: imgUrl,
                size: item.size,
                quantity: item.quantity,
                price: item.product.price
            }
        })

        dispatch({
            type: actionType.CREATE_ORDER_DB,
            payload: result
        })

        dispatch({
            type: actionType.ORDER_PRODUCT_DETAIL,
            payload: itemInfo
        })

        dispatch({
            type: actionType.ORDER_ID,
            payload: orderId
        })
    } catch (e) {
        console.log(e)
    }
}

const fetchProductPerPage = (pageNum) => async dispatch => {
    let axios = require('axios');

    let config = {
        method: 'get',
        url: `http://localhost:3000/product?pageNum=${pageNum}`,
        headers: {}
    };

    await axios(config)
        .then( res => {
            console.log('product per page',res.data.data)
            dispatch({
                type: actionType.FETCH_PRODUCT_PER_PAGE,
                payload: res.data.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });


}

// const fetchOrderAction = (id) => async dispatch => {
//     await axios.get(    `${backendUrl}order/${id}`)
//         .then(res => {
//             let order = res.data
//             dispatch(
//                 {   type: actionType.FETCH_ORDER,
//                     payload: order
//                 }
//             )}).catch (err => {
//             console.log(err)
//         })
// }



export default {
    fetchAllSortingAction,
    updateViewingProductsAction,
    updateSelectedFilterAction,
    sortProductAction,
    filterSortBtnClickAction,
    fetchOneProduct,
    // updateSmartFilterAction,
    removeAndSelectOneFilterAction,
    saveSelectedItem,
    sortAlsoLikeAction,
    updateLocalstorageState,
    createCartDB,
    createOrderDB,
    // fetchOrderAction
    fetchProductPerPage,
}
