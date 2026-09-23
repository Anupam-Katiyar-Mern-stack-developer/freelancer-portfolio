import PageTransition from "../../components/common/PageTransition";
import PageBanner from "../../components/common/PageBanner";
import CommonCTA from "../../components/common/CommonCTA";

import BlogGrid from "../../components/blog/BlogGrid";

const Blog = () => {
    return (
        <PageTransition>
            <main>

                <PageBanner
                    title="Blog"
                    description="Articles, development learnings and practical insights from building real-world web applications."
                />

                <BlogGrid />

                <CommonCTA />

            </main>
        </PageTransition>
    );
};

export default Blog;