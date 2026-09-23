import { motion } from "motion/react";
import { Link } from "react-router";

import {
    FiArrowLeft,
    FiArrowUpRight,
    FiGithub,
} from "react-icons/fi";

const ProjectDetailsHero = ({ project }) => {
    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pb-16 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">

            <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[140px]" />

            <div className="pointer-events-none absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl">

                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 font-[Manrope] text-sm font-bold text-slate-500 transition hover:text-blue-600"
                >
                    <FiArrowLeft />

                    Back to Projects
                </Link>

                <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.65,
                        }}
                    >
                        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            {project.details?.eyebrow || project.category}
                        </span>

                        <h1 className="mt-6 font-['Space_Grotesk'] text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                            {project.title}
                        </h1>

                        <p className="mt-6 max-w-2xl font-[Manrope] text-base leading-8 text-slate-500 sm:text-lg">
                            {project.shortDescription}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.technologies?.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-slate-200 bg-white px-3 py-2 font-[Manrope] text-xs font-bold text-slate-600 shadow-sm"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-wrap gap-3">

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-[Manrope] text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-600"
                                >
                                    Live Project

                                    <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-[Manrope] text-sm font-bold text-slate-700 transition hover:-translate-y-1 hover:border-slate-300"
                                >
                                    <FiGithub />

                                    GitHub
                                </a>
                            )}
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.94,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 scale-95 rounded-[36px] bg-gradient-to-br from-blue-300/50 to-violet-300/40 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_30px_100px_rgba(15,23,42,0.12)]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-[300px] w-full rounded-[22px] object-cover object-top sm:h-[420px]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsHero;