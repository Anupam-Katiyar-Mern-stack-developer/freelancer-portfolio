import { useSelector } from "react-redux";

const useSiteData = () => {
  const siteState = useSelector((state) => state.site);

  // console.log("FULL SITE STATE:", siteState);

  return {
    siteData: siteState?.data,
    loading: siteState?.loading,
    error: siteState?.error,
  };
};

export default useSiteData;