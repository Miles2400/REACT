import styles from "./style";
import './index.css'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <p>hello</p>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <div className="flex sm:justify-end justify-center md:mr-[60px] mr-0">
                    <a href="#home" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[8px]">
                        <button type="button">Back To Top</button>
                    </a>
                </div>
                <Footer />
            </div>
        </div>
    </div>
);

export default App;