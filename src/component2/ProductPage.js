import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";
import {ProductDetailImg} from "./ProductDetailImg";
import {YouMayLike} from "./YouMayLike";
import {MayAlsoLike} from "./MayAlsoLike";
import {useEffect, useState} from "react";
import {ProductDetailContent} from "./ProductDetailContent";
import "./style/ProductPage.scss"
import {MayAlsoLikeRes} from "./MayAlsoLikeRes";
import {Feature} from "./Feature";
import {Review} from "./Review/Review";
import {VirtualShopping} from "./VirtualShopping";
import {useWindowSize} from "../customHooks";
import {RecentlyViewed} from "./RecentlyViewed";
import {MyBagProductDetailContent} from "../component3/MyBagProductDetailContent";
import {motion} from 'framer-motion'
import {animate, exit, initial} from "../helper";
import {useMemo} from "react";

export const ProductPage = ({size}) => {
    // setup to get product ID
    let Params = useParams()
    // console.log('page3Params', Params)
    const {productId} = Params
    // console.log(productId)

    // set color to first color if null
    const useQuery = () => {
        const {search} = useLocation();

        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let product = useSelector(state => state.fetchReducer.oneProduct)
    let query = useQuery()
    const [color, setColor] = useState(query.get("color"))
    // console.log(color)
    let navigate = useNavigate()
    useEffect(() => {
        // console.log(product)
        // color === null && (color = productColor)

        // console.log(productId)
        let condition = (color === null || (product?.productId && product?.swatches?.findIndex(({colorId}) => colorId === color) < 0)) && product?.productId && productId
        // condition && navigate(`/product/${product.productId}?color=${product.swatches[0].colorId}`)
        condition && setColor(product.swatches[0].colorId)
        // console.log(color)
    },[productId, product?.productId, color,])

    useEffect(() => {
        setColor(query.get("color"))
    },[query.get("color")])



    const {width, height} = useWindowSize()
    // dispatch to fetch product info from API
    let dispatch = useDispatch()
    //removed useEffect dependency of productId,as page is subject to infinite loop with named dependency.
    useEffect(() => {
        dispatch(actions.fetchAction.fetchOneProduct(productId))
    }, [])
    // console.log(product)
    // console log to show the product ID and color for testing
    // console.log(`product Id from URL:`,productId)
    // console.log(`color Id from URL:`,color)
    // console.log('product in ProductPage', product)
    // for back to top of back
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [productId,])
    // for update tab name to product name
    document.title = product?.name
    // for update also like
    // const cbDispatchAlsoLike = () => dispatch(actions.fetchAction.sortAlsoLikeAction(productId, color))
    // useEffect(cbDispatchAlsoLike,[productId])
    useEffect(() => {
        dispatch(actions.fetchAction.sortAlsoLikeAction(productId, color))
        // dispatch(actions.fetchAction.saveSelectedItem(product))
    }, [productId,])

    const cbDispatch = () => {
        dispatch(actions.fetchAction.saveSelectedItem(product))
    }


    useEffect(() => cbDispatch, [productId,])

        return<motion.div initial={initial} animate={animate} exit={exit} >
            <div className="productPage">
                <div className='productDetail_Container'>
                    <ProductDetailImg product={product} color={color}/>
                    <ProductDetailContent product={product} color={color} size={size}/>
                    <YouMayLike/>
                </div>
                <Feature product={product} color={color}/>
                <MayAlsoLike/>
                <MayAlsoLikeRes/>
                <Review/>
                <RecentlyViewed/>
                <VirtualShopping/>
            </div>
    </motion.div>

}