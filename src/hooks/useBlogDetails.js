import { useMemo } from "react";
import { useParams } from "react-router";

import useSiteData from "./useSiteData";

const useBlogDetails = () => {
  const { slug } = useParams();

  const {
    siteData,
    loading,
    error,
  } = useSiteData();

  const blogs =
    siteData?.blogs?.items || [];

  const blog = useMemo(() => {
    return (
      blogs.find(
        (item) => item.slug === slug
      ) || null
    );
  }, [blogs, slug]);

  const relatedBlogs = useMemo(() => {
    if (!blog) {
      return [];
    }

    return blogs
      .filter(
        (item) =>
          item.slug !== blog.slug &&
          item.category === blog.category
      )
      .slice(0, 3);
  }, [blogs, blog]);

  return {
    blog,
    relatedBlogs,
    loading,
    error,
  };
};

export default useBlogDetails;