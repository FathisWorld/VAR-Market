import Products from "./Products/Products"
import i4 from '../assets/imgs/i4.jpg'
import { Link } from "react-router-dom";




function Landing() {
    return (
        <>
            <div className="lan-con">
                <img className="landing" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="" />
                <div className="fil">
                    <p><span>VAR Store...</span><br /> Shopping has become easier <br /><span className="now">Shop now</span></p>
                <div className="btn-con">
                  <Link to='/Market' className="mar">Market</Link>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Landing;