import { useMemo } from "react";
import { useParams } from "react-router";

import useSiteData from "./useSiteData";

const useProjectDetails = () => {
  const { slug } = useParams();

  const { siteData, loading, error } = useSiteData();

  const project = useMemo(() => {
    if (!siteData?.projects?.items) {
      return null;
    }

    return siteData.projects.items.find((item) => item.slug === slug) || null;
  }, [siteData, slug]);

  return {
    project,
    loading,
    error,
  };
};

export default useProjectDetails;
