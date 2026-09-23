import PageTransition from "../../components/common/PageTransition";
import PageBanner from "../../components/common/PageBanner";
import CommonCTA from "../../components/common/CommonCTA";
import Loader from "../../components/common/Loader";

import BlogArticle from "../../components/blog/BlogArticle";
import RelatedBlogs from "../../components/blog/RelatedBlogs";

import useBlogDetails from "../../hooks/useBlogDetails";

import NotFound from "./NotFound";

const BlogDetails = () => {
  const {
    blog,
    relatedBlogs,
    loading,
    error,
  } = useBlogDetails();

  if (loading) {
    return <Loader />;
  }

  if (error || !blog) {
    return <NotFound />;
  }

  return (
    <PageTransition>
      <main>

        <PageBanner
          title="Blog Details"
          description="Development insights, practical learnings and experiences from building real-world applications."
        />

        <BlogArticle blog={blog} />

        <RelatedBlogs
          blogs={relatedBlogs}
        />

        <CommonCTA />

      </main>
    </PageTransition>
  );
};

export default BlogDetails;