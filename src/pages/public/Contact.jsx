import PageTransition from "../../components/common/PageTransition";
import PageBanner from "../../components/common/PageBanner";

import ContactCards from "../../components/contact/ContactCards";
import ContactFormSection from "../../components/contact/ContactFormSection";
import ContactMap from "../../components/contact/ContactMap";

import useSiteData from "../../hooks/useSiteData";

const Contact = () => {
  const { siteData } = useSiteData();

  const banner =
    siteData?.contactPage?.banner;

  if (!banner) {
    return null;
  }

  return (
    <PageTransition>
      <main>

        <PageBanner
          eyebrow={banner.eyebrow}
          title={banner.title}
          description={banner.description}
        />

        <ContactCards />

        <ContactFormSection />

        <ContactMap />

      </main>
    </PageTransition>
  );
};

export default Contact;