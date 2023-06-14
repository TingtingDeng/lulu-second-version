// import {FilterSideBar} from "./FilterSideBar";
// import {Filter} from "./Filter";
// import {Product} from "./Product";
// import {More} from "./More";
import {useSelector} from "react-redux";
import {motion} from 'framer-motion'
import {animate, exit, initial} from "../helper";

export const HomePage =() => {
    let btnClick = useSelector(state => state.fetchReducer.filterSortBtnClick)
    document.title = "Home Page"


    return(
        <motion.div initial={initial} animate={animate} exit={exit}>
            <div className="filterProductContainer">
                {btnClick ?
                    <div className="FilterSideBar">
                        {/*<FilterSideBar/>*/}
                    </div> : null
                }
                {/*<Filter/>*/}
                {/*<Product/>*/}
            </div>
            {/*<More/>*/}
        </motion.div>
    )
}