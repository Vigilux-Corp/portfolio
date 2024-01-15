
import styles from "./styles";
import { Footer, Navbar, Hero, About, Tech, Feedbacks, Contact, StarsCanvas} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Tech/>
      </div>
    </div>

    <div className={`bg-dimWhite bg-hero-pattern bg-cover bg-no-repeat bg-center ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Feedbacks/>
      </div>
    </div>

    <div className={`relative z-0 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>

    

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
