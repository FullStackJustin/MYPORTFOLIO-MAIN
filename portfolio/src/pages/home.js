import "../styles/home.css"
import {Screen1} from "../screens/section1"
import {Screen2} from "../screens/section2"
import {Screen3} from "../screens/section3"
// import {Footer} from './footer'


export const Home = () => {



    return (
        <div id="fullpageSection" className="fullPageSection">
        {/* <div id="topSection"  className="section"> */}
            <Screen1/>
        {/* </div> */}
        {/* <div id="middleSection" className="section"> */}
            <Screen2/>
        {/* </div> */}
        {/* <div id="bottomSection" className="section"> */}
            <Screen3/>
        {/* </div> */}
        {/* <div id="footer"> */}
            {/* <Footer/> */}
        {/* </div> */}
    </div>
    )
}