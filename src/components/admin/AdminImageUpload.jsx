import { useRef } from "react";
import {
  FiImage,
  FiTrash2,
  FiUploadCloud,
} from "react-icons/fi";

const AdminImageUpload = ({
  name,
  label,
  value,
  preview,
  required = false,
  disabled = false,
  error,
  helperText = "PNG, JPG or WebP",
  onChange,
  onRemove,
}) => {
  const inputRef = useRef(null);

  const handleSelectImage = () => {
    if (disabled) return;

    inputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onChange?.(name, file);

    event.target.value = "";
  };

  const imageUrl =
    preview ||
    (typeof value === "string"
      ? value
      : null);

  return (
    <div>
      <label
        className="
          mb-2
          block
          font-[Manrope]
          text-xs
          font-bold
          text-slate-700
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        disabled={disabled}
        onChange={handleFileChange}
        className="hidden"
      />

      {imageUrl ? (
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-3
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              bg-slate-100
            "
          >
            <img
              src={imageUrl}
              alt={label}
              className="
                h-[220px]
                w-full
                object-cover
              "
            />

            {!disabled && (
              <div
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  gap-2
                "
              >
                <button
                  type="button"
                  onClick={handleSelectImage}
                  aria-label="Change image"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-slate-700
                    shadow-md
                    transition

                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  <FiUploadCloud />
                </button>

                {onRemove && (
                  <button
                    type="button"
                    onClick={() =>
                      onRemove(name)
                    }
                    aria-label="Remove image"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-red-500
                      shadow-md
                      transition

                      hover:bg-red-500
                      hover:text-white
                    "
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleSelectImage}
          disabled={disabled}
          className={`
            flex
            min-h-[170px]
            w-full
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            bg-slate-50
            px-5
            py-8
            text-center
            transition
            duration-300

            ${
              error
                ? "border-red-300"
                : "border-slate-300 hover:border-blue-400 hover:bg-blue-50/40"
            }

            ${
              disabled
                ? "cursor-not-allowed opacity-60"
                : ""
            }
          `}
        >
          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-xl
              text-blue-600
              shadow-sm
            "
          >
            <FiImage />
          </span>

          <p
            className="
              mt-4
              font-[Manrope]
              text-sm
              font-bold
              text-slate-800
            "
          >
            Upload image
          </p>

          <p
            className="
              mt-1
              font-[Manrope]
              text-xs
              text-slate-400
            "
          >
            {helperText}
          </p>
        </button>
      )}

      {helperText && !error && imageUrl && (
        <p
          className="
            mt-2
            font-[Manrope]
            text-[11px]
            text-slate-400
          "
        >
          {helperText}
        </p>
      )}

      {error && (
        <p
          className="
            mt-2
            font-[Manrope]
            text-[11px]
            font-medium
            text-red-500
          "
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default AdminImageUpload;