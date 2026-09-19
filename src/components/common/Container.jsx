import { cn } from "../../utils/cn";

const Container = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;