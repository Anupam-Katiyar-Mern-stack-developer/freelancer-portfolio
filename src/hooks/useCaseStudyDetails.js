import { useMemo } from "react";
import { useParams } from "react-router";

import useSiteData from "./useSiteData";

const useCaseStudyDetails = () => {
  const { slug } = useParams();

  const {
    siteData,
    loading,
    error,
  } = useSiteData();

  const caseStudy = useMemo(() => {
    if (!siteData?.caseStudies?.items) {
      return null;
    }

    return (
      siteData.caseStudies.items.find(
        (item) => item.slug === slug
      ) || null
    );
  }, [siteData, slug]);

  const relatedReview = useMemo(() => {
    if (!caseStudy || !siteData?.testimonials?.items) {
      return null;
    }

    return (
      siteData.testimonials.items.find(
        (review) =>
          review.projectSlug === caseStudy.projectSlug
      ) || null
    );
  }, [caseStudy, siteData]);

  return {
    caseStudy,
    relatedReview,
    loading,
    error,
  };
};

export default useCaseStudyDetails;