import { useSelector } from "react-redux";

const useSiteData = () => {
  const { data, loading, error } = useSelector(
    (state) => state.site
  );

  return {
    siteData: data,
    loading,
    error,
  };
};

export default useSiteData;