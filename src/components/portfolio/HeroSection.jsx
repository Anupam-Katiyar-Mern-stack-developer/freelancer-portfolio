import useSiteData from "../../hooks/useSiteData";
import Loader from "../common/Loader";

const HeroSection = () => {
  const { siteData, loading, error } = useSiteData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!siteData) {
    return null;
  }

  const { settings, hero } = siteData;

  return (
    <section className="hero">
      <div className="hero-container">

        <span className="hero-badge">
          {hero.badge}
        </span>

        <p className="hero-name">
          Hi, I'm {settings.developerName}
        </p>

        <h1>
          {hero.heading}
        </h1>

        <p className="hero-description">
          {hero.description}
        </p>

        <p className="hero-role">
          {settings.professionalTitle}
        </p>

        <div className="hero-actions">
          <button>
            {hero.primaryButton}
          </button>

          <button>
            {hero.secondaryButton}
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;