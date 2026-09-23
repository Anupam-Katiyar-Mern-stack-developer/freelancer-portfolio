import PageTransition from "../../components/common/PageTransition";

import PageBanner from "../../components/common/PageBanner";
import AllServicesSection from "../../components/service/AllServicesSection";
import ServiceProcess from "../../components/service/ServiceProcess";
import CommonCTA from "../../components/common/CommonCTA";

const Services = () => {
    return (
        <PageTransition>
            <main>

                <PageBanner
                    title="My Services"
                    description="Development services focused on scalable and reliable web products."
                />

                <AllServicesSection />

                <ServiceProcess />

                <CommonCTA />

            </main>
        </PageTransition>
    );
};

export default Services;