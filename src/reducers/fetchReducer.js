import {actionType, filterData, smartFilter} from "../helper";


const initState = {
    pageParams: {curPage: 0},
    product: null, // store all products of fetch, not limited by page Number
    viewProducts: null, // product that shows on page
    isLoadingFetch: null, // fetch request is loading
    smartFilter: smartFilter,
    selectedFilter: {...filterData}, // store selected filter, both update and use in fetch
    filterSortBtnClick: false,
    oneProduct: null, // store result of fetch one product
    selectedItem: [],
    alsoLikeProductLike: [],
    localstorageState: [],
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [], // store cart
    subtotal: 0, // store current subtotal (without tax)
    cartDetail:[], // store cart details such as img and price
    cartErrorMsg:"",
    savedItem: [],
    removedCartItem:[],
    createCartDb: {},
    cartId: null,
    createOrderDb: {},
    orderItemInfo:[],
    orderId: null,
    order:null,
    productPerPage: [],
}

export const fetchReducer = (state = initState, action) => {
    let products = state.product
    switch (action.type) {
        case actionType.IS_LOADING_FETCH:
            // console.log('[reducer] change sorting is loading to', action.payload)
            return {...state, isLoadingFetch: action.payload}

        case actionType.FETCH_ALL_PRODUCT:
            // console.log('[reducer] fetch all sortingProduct')
            if (action.payload.pageParams.curPage === state.pageParams.curPage && action.payload.pageParams.totalProducts === state.pageParams.totalProducts) {
                // console.log(`0`)
                products = state.product
            } else if (action.payload.pageParams.curPage === 1) {
                // console.log(`1`)
                products = action.payload.products
            } else {
                // console.log(`2`)
                state.product ? products = [...state.product, ...action.payload.products] : products = action.payload.products
            }
            // smartFilterBase setup, create empty structure of {productId : {all filter false}}
            // let smartFilter = {}
            // products.forEach(product => smartFilter[product.productId] = filterData)
            // console.log(smartFilter)
            return {...state, product: products, pageParams: action.payload.pageParams, smartFilter: smartFilter}

        case actionType.UPDATE_VIEWING_PRODUCT:
            // console.log('[reducer] fetch all sortingProduct')
            // return {...state, viewingProducts: state.product.slice(0, action.payload)}
            return {...state, viewingProducts: state.product.slice(0, action.payload)}

        case actionType.UPDATE_SELECTED_FILTER:
            let newState = {...state.selectedFilter}
            let selectedCategories = {...state.selectedFilter[action.payload.category]}
            let arrCategories = Object.entries(selectedCategories)
            let filterIndex = null
            action.payload.category !== 'Colour' && arrCategories.forEach(([num, {
                name,
                isChecked
            }], index) => name === action.payload.filter && (filterIndex = num))
            action.payload.category === 'Colour' && arrCategories.forEach(([num, {
                alt,
                isChecked,
                swatch
            }], index) => alt === action.payload.filter && (filterIndex = num))
            newState[action.payload.category][filterIndex].isChecked = !newState[action.payload.category][filterIndex].isChecked
            return {...state, selectedFilter: newState}
        case actionType.SORT_PRODUCT:
            // console.log('[reducer] sort product')
            // let products = state.product
            products = products.filter(a => a.price).sort((a, b) => {
                // console.log(a.price, b.price)
                return action.payload ?
                    (b.price.split(" ")[0].replace(/\D/g, '') - a.price.split(" ")[0].replace(/\D/g, ''))
                    : (a.price.split(" ")[0].replace(/\D/g, '') - b.price.split(" ")[0].replace(/\D/g, ''))
            })
            return {...state, product: products, viewingProducts: products.slice(0, 45)}
        case actionType.CLICK_FILTER_SORT:
            return {...state, filterSortBtnClick: action.payload}
        case actionType.FETCH_ONE_PRODUCT:
            // console.log('[reducer] fetched one product', action.payload)
            return {...state, oneProduct: action.payload}
        //    a 4 forEach reducer to create the Smart filter in the first place, one time use only, so hard to do...
        // case actionType.UPDATE_SMART_FILTER:
        //     let smartFilterNew = state.smartFilter
        //     console.log('[reducer] Update smart filter')
        //     console.log(state.selectedFilter)
        //     Object.entries(state.selectedFilter).forEach(([category, filters]) => {
        //         // console.log(category, filters)
        //         filters.forEach(({name, isChecked}) => {
        //             isChecked && (
        //                 state.product.forEach(({productId}) => {
        //                         !!smartFilterNew[productId] && (
        //                             smartFilterNew[productId][category].forEach((filter, index) => {
        //                                 filter.name === name && (
        //                                     smartFilterNew[productId][category][index].isChecked = true
        //                                 )
        //                                 filter.name === name && console.log(`updated`)
        //
        //                             })
        //                         )
        //                     }
        //                 )
        //             )
        //         })
        //     })
        //     console.log(smartFilterNew)
        //     return {...state, smartFilter: smartFilterNew}

        case actionType.REMOVE_AND_SELECT_ONE_FILTER:
            // console.log(`[reducer]update filter`)
            // console.log(filterData)
            let newState2 = {...filterData}
            const list = ['Activity', 'Category', 'Collection', 'Colour', 'Fabric', 'Features', 'Gender', 'Size', 'SizeType', 'Type']
            list.forEach(listItem => {
                listItem !== "Colour" && newState2[listItem].forEach(({name, isChecked}, index) => {
                    newState2[listItem][index].isChecked = false
                })
                listItem === "Colour" && newState2[listItem].forEach(({swatch, alt, isChecked}, index) => {
                    newState2[listItem][index].isChecked = false
                })
            })

            let selectedCategories2 = {...filterData[action.payload.category]}
            let arrCategories2 = Object.entries(selectedCategories2)
            let filterIndex2 = null
            action.payload.category !== 'Colour' && arrCategories2.forEach(([num, {
                name,
                isChecked
            }], index) => name === action.payload.filter && (filterIndex2 = num))
            action.payload.category === 'Colour' && arrCategories2.forEach(([num, {
                alt,
                isChecked,
                swatch
            }], index) => alt === action.payload.filter && (filterIndex2 = num))
            newState2[action.payload.category][filterIndex2].isChecked = true
            // console.log(newState2)
            // console.log(selectedCategories2)
            return {...state, selectedFilter: newState2}
        case actionType.SAVE_SELECTED_ITEM:
            // console.log("[reducer]selected item", action.payload)
            let reViewed = state.selectedItem
            let res = action.payload.item
            // console.log("selected itemssss", res)
            reViewed.unshift(res)
            // console.log("pushed selected item", reViewed)
            return {...state, selectedItem: reViewed}
        case actionType.SORT_ALSO_LIKE:
            let _ = require('lodash');
            let oneProductId = action.payload.productId
            // console.log(oneProductId)
            let productSmartFilter = smartFilter[oneProductId]
            // console.log(productSmartFilter)
            let newSmartFilter = Object.entries(smartFilter)
            let newAlsoLikeProductLike = []
            newSmartFilter.forEach(([productId, filter]) => {
                _.isEqual(filter.Gender, productSmartFilter.Gender) && _.isEqual(filter.Category, productSmartFilter.Category) && newAlsoLikeProductLike.push(productId)
            })
            // console.log(newAlsoLikeProductLike)
            return {...state, alsoLikeProductLike: newAlsoLikeProductLike}
        case actionType.UPDATE_LOCALSTORAGE:
            let updateStorage = [...action.payload]
            // console.log('[reducer] local storage', action.payload)
            return {...state, localstorageState: updateStorage}
        case actionType.ADD_TO_CART:
            let newCart = [...state.cart]
            let same = newCart.findIndex(({productId, colorId, size})=> productId === action.payload.productId && colorId === action.payload.colorId && size === action.payload.size)
            // console.log(same)
            same === -1 ?
                (newCart = [...newCart, {quantity: 1, productId: action.payload.productId, colorId: action.payload.colorId, size: action.payload.size }])
                :
                (newCart[same] = {quantity: newCart[same].quantity + 1, productId: action.payload.productId, colorId: action.payload.colorId, size: action.payload.size })
            // console.log(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))
            // newCart = mewCart.filter
            return {...state, cart: newCart}
        case actionType.AUTO_UPDATE_CART_DETAIL:
            // create cartDetail
            let newCartDetail = [...state.cart]
            let productForAddCartDetail = state.product ? [...state.product] : []
            newCartDetail = newCartDetail.map(({quantity, productId, colorId, size}) => {
                let product = productForAddCartDetail.filter(product => productId === product.id)[0]
                // console.log(product)
                // console.log(product)
                // console.log(colorId)
                // console.log(product?.images.findIndex((image) => colorId === image.colorId))
                let colorIndex = product?.images.findIndex((image) => colorId === image.colorId)
                // console.log(colorIndex)
                let newImg = product?.images[colorIndex]?.mainCarousel.media.split(" | ")[0]
                // console.log(colorIndex)
                let newColorAlt = product?.images[colorIndex]?.colorAlt
                // console.log(colorIndex)
                return {quantity, productId, colorId, size, name: product?.name, img: newImg, price: product?.price, colorAlt: newColorAlt}
            })
            // console.log(`newCartDetail Updated`,newCartDetail)
            return {...state, cartDetail: newCartDetail}
        case actionType.UPDATE_SUBTOTAL:
            let cartForSubTotal = [...state.cart]
            let productForSubTotal = state.product ? [...state.product] : []
            let newSubtotal = 0
            // console.log(state.product)
            cartForSubTotal.forEach(
                ({quantity, productId}) => {
                    let product = productForSubTotal.filter(product => productId === product.id)[0]
                    let price = product?.price?.split(' ')[0].replace( /^\D+/g, '')
                    price >= 0 && (newSubtotal += price * quantity)
                })
            // console.log(`subtotal`, newSubtotal)
            return {...state, subtotal: newSubtotal}
        case actionType.UPDATE_CART_ITEM_COLOR_AND_SIZE:
            let newCartForChangeColorSize = [...state.cart]
            let itemIndex = newCartForChangeColorSize.findIndex(({quantity, productId, colorId, size}) => productId === action.payload.productId && colorId === action.payload.oldColor && size === action.payload.oldSize)
            let sameItemIndex = newCartForChangeColorSize.findIndex(({quantity, productId, colorId, size},index) => productId === action.payload.productId && colorId === action.payload.newColor && size === action.payload.newSize && index !== itemIndex)
            itemIndex >= 0 && (newCartForChangeColorSize[itemIndex] = {
                // merge quantity that has same color and size
                quantity: sameItemIndex >= 0 ? (newCartForChangeColorSize[itemIndex].quantity + newCartForChangeColorSize[sameItemIndex].quantity) : (newCartForChangeColorSize[itemIndex].quantity),
                productId: newCartForChangeColorSize[itemIndex].productId,
                colorId: action.payload.newColor,
                size: action.payload.newSize
            })
            sameItemIndex >= 0 && newCartForChangeColorSize.splice(sameItemIndex, 1) // remove merged item
            // console.log(newCartForChangeColorSize)
            // for merge same color and size
            return {...state, cart: newCartForChangeColorSize}
        case actionType.UPDATE_CART_ITEM_QUANTITY:
            let newCartForQuantity = [...state.cart]
            let itemIndexForQuantity = newCartForQuantity.findIndex(({quantity, productId, colorId, size}) => productId === action.payload.productId && colorId === action.payload.colorId && size === action.payload.size)
            // console.log(itemIndexForQuantity)
            itemIndexForQuantity >= 0 && (newCartForQuantity[itemIndexForQuantity] = {
                quantity: action.payload.quantity,
                productId: newCartForQuantity[itemIndexForQuantity].productId,
                colorId: newCartForQuantity[itemIndexForQuantity].colorId,
                size: newCartForQuantity[itemIndexForQuantity].size
            })
            // console.log(newCartForQuantity)
            return {...state, cart: newCartForQuantity}
        case actionType.REMOVE_CART_ITEM:
            let newCartForRemove = [...state.cart]
            let itemIndexForRemove = newCartForRemove.findIndex(({quantity, productId, colorId, size}) => productId === action.payload.productId && colorId === action.payload.colorId && size === action.payload.size)
            let removedCartItemForRemove = {...state.cartDetail[itemIndexForRemove]}
            itemIndexForRemove >= 0 && newCartForRemove.splice(itemIndexForRemove, 1)
            // console.log(removedCartItemForRemove)

            return {...state, cart: newCartForRemove, removedCartItem: [removedCartItemForRemove,...state.removedCartItem]}
        case actionType.UNDO_REMOVE_CART_ITEM:
            // console.log(`[reducer]undo `)
            let newCartForUndo = [...state.cart, state.removedCartItem[0]]
            let newRemovedCartForUndo = [...state.removedCartItem]
            newRemovedCartForUndo.shift()
            // console.log(newCartForUndo)
            // console.log(newRemovedCartForUndo)
            return {...state, cart: newCartForUndo, removedCartItem: newRemovedCartForUndo}
        case actionType.VALIDATE_CART:
            return {...state, cartErrorMsg: action.payload}
        case actionType.CLEAR_CART:
            // console.log(`clearCart`)
            return {...state, cart: []}
        case actionType.SAVE_CART_ITEM:
            // console.log('[reducer]save item', action.payload)
            // remove saved items from cart & saved in savedItem
            let newCartForSave = [...state.cart]
            let itemIndexForSave = newCartForSave.findIndex(({productId, colorId, size}) => productId === action.payload.productId && colorId === action.payload.colorId && size === action.payload.size)
            let newSavedItem = newCartForSave[itemIndexForSave]
            // console.log('new saved item',newCartForSave)
            let allSavedItem = [...state.savedItem]
            allSavedItem.push(newSavedItem)
            // console.log('all saved item', allSavedItem)
            itemIndexForSave >= 0 && newCartForSave.splice(itemIndexForSave, 1)
            // add product detail to saved item
            let productForSavedItemDetail = state.product ? [...state.product] : []
            let savedItemDetail = allSavedItem.map(({quantity, productId, colorId, size}) => {
                let product = productForSavedItemDetail.filter(product => productId === product.productId)[0]
                let colorIndex = product?.images.findIndex((image) => colorId === image.colorId)
                let newImg = product?.images[colorIndex].mainCarousel.media.split(" | ")[0]
                let newColorAlt = product?.images[colorIndex].colorAlt
                quantity = 1
                return {quantity, productId, colorId, size, name: product?.name, img: newImg, price: product?.price, colorAlt: newColorAlt}
            })
            return {...state, cart: newCartForSave, savedItem: savedItemDetail}
        case actionType.REMOVE_SAVED_ITEM:
            let newSavedItemForRemove = [...state.savedItem]
            let savedItemIndexForRemove = newSavedItemForRemove.findIndex(({productId, colorId, size}) => productId === action.payload.productId && colorId === action.payload.colorId && size === action.payload.size)
            savedItemIndexForRemove >= 0 && newSavedItemForRemove.splice(savedItemIndexForRemove,1)
            return {...state, savedItem: newSavedItemForRemove}
        case actionType.CREATE_CART_DB:
            // console.log(`created cart db`,action.payload)
            return {...state, createCartDb: action?.payload}
        case actionType.SAVE_CART_ID:
            // console.log(`new cart Id saved :${action.payload}`)
            return {...state, cartId: action.payload}
        case actionType.CREATE_ORDER_DB:
            // console.log(`created order db`,action.payload)
            return {...state, createOrderDb: action.payload}
        case actionType.ORDER_PRODUCT_DETAIL:
            // console.log(`order product detail`, action.payload)
            return {...state, orderItemInfo: action.payload}
        case actionType.ORDER_ID:
            return {...state, orderId: action.payload}
        case actionType.FETCH_PRODUCT_PER_PAGE:
            let viewProducts = [...state.productPerPage]
            let newViewingProducts = action.payload
            newViewingProducts.map(item => {
                viewProducts.push(item)
            })
            return {...state, productPerPage: viewProducts}
        default:
            return state
    }
}

