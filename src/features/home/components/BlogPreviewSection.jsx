import {
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router";

import Container from "../../../components/common/Container";
import SectionTitle from "../../../components/common/SectionTitle";
import OptimizedImage from "../../../components/common/OptimizedImage";
import Reveal from "../../../components/common/Reveal";

const BlogPreviewSection = ({
  data,
}) => {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map(
            (blog, index) => (
              <Reveal
                key={blog.slug}
                delay={index * 0.05}
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  className="group block h-full overflow-hidden rounded-[26px] border border-pink-100 bg-white p-3 shadow-[0_15px_50px_rgba(95,18,57,.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_65px_rgba(95,18,57,.10)]"
                >
                  <div className="overflow-hidden rounded-[21px]">
                    <OptimizedImage
                      src={blog.image}
                      alt={blog.title}
                      width={700}
                      height={450}
                      className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700">
                        {blog.category}
                      </span>

                      <span className="text-[11px] text-slate-400">
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-black leading-7 text-slate-950">
                      {blog.title}
                    </h3>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-pink-700">
                      Read Article
                      <FaArrowRight
                        size={9}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogPreviewSection;