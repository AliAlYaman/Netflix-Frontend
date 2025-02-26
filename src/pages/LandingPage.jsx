import { Navbar } from "../components/Navbar";
import background from "../../assets/backgrounds/landingpage-background.png";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black overflow-scroll">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10">
                  <Navbar />
            </div>
    </div>
  );
}

export default LandingPage;