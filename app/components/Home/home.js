import Header from '../Header/header'
import Banner from "../Banner/banner"
import Trusted from "../Trusted/Trusted"
import Assets from '../Assets/Assets'
import Benefits from '../Benefits/Benefits'
import AboutUs from '../AboutUs/AboutUs'
import Features from '../Features/Features'
import Pricing from '../Pricing/Pricing'
import Plans from '../Plans/Plans'
import Frequently from '../Frequently/Frequently'
import Footer from '../Footer/Footer'

const  Home =() => {
    return (
        <div className='wrapper'>
            <Header />
            <Banner />
            <Trusted />
            <Assets />
            <Benefits />
            <AboutUs />
            <Features />
            <div className='bg-pricingBgColor'>
                <Pricing />
                <Plans />
            </div>
            <Frequently />
            <Footer />
        </div>
    );
}

export default Home;