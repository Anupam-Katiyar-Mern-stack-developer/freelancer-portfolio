import { cn } from "../../utils/cn";

const OptimizedImage = ({
    src,
    alt,
    className = "",
    priority = false,
    width,
    height,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className={cn(
                "block object-cover",
                className
            )}
        />
    );
};

export default OptimizedImage;