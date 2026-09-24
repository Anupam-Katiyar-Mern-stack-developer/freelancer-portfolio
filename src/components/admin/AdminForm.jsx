import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiLoader,
  FiSave,
} from "react-icons/fi";

import AdminImageUpload from "./AdminImageUpload";


/* =========================================
   GET NESTED VALUE

   Example:
   primaryButton.label
========================================= */

const getByPath = (
  object,
  path
) => {
  return path
    .split(".")
    .reduce(
      (current, key) =>
        current?.[key],
      object
    );
};


/* =========================================
   SET NESTED VALUE

   Example:
   primaryButton.label = "View Projects"
========================================= */

const setByPath = (
  source,
  path,
  value
) => {
  const keys = path.split(".");

  const result = {
    ...(source || {}),
  };

  let current = result;

  keys.forEach(
    (key, index) => {
      const isLast =
        index === keys.length - 1;

      if (isLast) {
        current[key] = value;
        return;
      }

      const existing =
        current[key];

      current[key] = Array.isArray(
        existing
      )
        ? [...existing]
        : {
            ...(existing &&
            typeof existing === "object"
              ? existing
              : {}),
          };

      current = current[key];
    }
  );

  return result;
};


const AdminForm = ({
  fields = [],
  initialValues = {},
  submitLabel = "Save Changes",
  loading = false,
  disabled = false,
  onSubmit,
  onCancel,
}) => {
  const previewUrlsRef =
    useRef(new Set());

  const [errors, setErrors] =
    useState({});

  const [
    imagePreviews,
    setImagePreviews,
  ] = useState({});


  /* =========================================
     CREATE FORM VALUES FROM CONFIG
  ========================================= */

  const preparedValues =
    useMemo(() => {
      let values = {};

      fields.forEach((field) => {
        const existingValue =
          getByPath(
            initialValues,
            field.name
          );

        let defaultValue = "";

        if (
          existingValue !== undefined
        ) {
          defaultValue =
            existingValue;
        } else if (
          field.type === "switch"
        ) {
          defaultValue = false;
        }

        values = setByPath(
          values,
          field.name,
          defaultValue
        );
      });

      return values;
    }, [
      fields,
      initialValues,
    ]);


  const [values, setValues] =
    useState(preparedValues);


  /* =========================================
     UPDATE WHEN EDIT DATA CHANGES
  ========================================= */

  useEffect(() => {
    setValues(preparedValues);
    setErrors({});
    setImagePreviews({});
  }, [preparedValues]);


  /* =========================================
     CLEAN IMAGE OBJECT URLS
  ========================================= */

  useEffect(() => {
    return () => {
      previewUrlsRef.current.forEach(
        (url) => {
          URL.revokeObjectURL(url);
        }
      );

      previewUrlsRef.current.clear();
    };
  }, []);


  /* =========================================
     CLEAR FIELD ERROR
  ========================================= */

  const clearFieldError = (
    name
  ) => {
    if (!errors[name]) {
      return;
    }

    setErrors((current) => {
      const updated = {
        ...current,
      };

      delete updated[name];

      return updated;
    });
  };


  /* =========================================
     INPUT CHANGE
  ========================================= */

  const handleChange = (
    event
  ) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    const nextValue =
      type === "checkbox"
        ? checked
        : value;

    setValues((current) =>
      setByPath(
        current,
        name,
        nextValue
      )
    );

    clearFieldError(name);
  };


  /* =========================================
     IMAGE CHANGE
  ========================================= */

  const handleImageChange = (
    name,
    file
  ) => {
    const previousPreview =
      imagePreviews[name];

    if (previousPreview) {
      URL.revokeObjectURL(
        previousPreview
      );

      previewUrlsRef.current.delete(
        previousPreview
      );
    }

    const previewUrl =
      URL.createObjectURL(file);

    previewUrlsRef.current.add(
      previewUrl
    );

    setImagePreviews(
      (current) => ({
        ...current,
        [name]: previewUrl,
      })
    );

    setValues((current) =>
      setByPath(
        current,
        name,
        file
      )
    );

    clearFieldError(name);
  };


  /* =========================================
     REMOVE IMAGE
  ========================================= */

  const handleRemoveImage = (
    name
  ) => {
    const preview =
      imagePreviews[name];

    if (preview) {
      URL.revokeObjectURL(
        preview
      );

      previewUrlsRef.current.delete(
        preview
      );
    }

    setImagePreviews(
      (current) => {
        const updated = {
          ...current,
        };

        delete updated[name];

        return updated;
      }
    );

    setValues((current) =>
      setByPath(
        current,
        name,
        ""
      )
    );
  };


  /* =========================================
     VALIDATION
  ========================================= */

  const validate = () => {
    const nextErrors = {};

    fields.forEach((field) => {
      const value =
        getByPath(
          values,
          field.name
        );

      if (
        field.required &&
        (
          value === "" ||
          value === null ||
          value === undefined
        )
      ) {
        nextErrors[field.name] =
          `${field.label} is required`;

        return;
      }


      /* EMAIL */

      if (
        field.type === "email" &&
        value
      ) {
        const emailRegex =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
          !emailRegex.test(value)
        ) {
          nextErrors[field.name] =
            "Please enter a valid email";
        }
      }


      /* URL */

      if (
        field.type === "url" &&
        value
      ) {
        try {
          new URL(value);
        } catch {
          nextErrors[field.name] =
            "Please enter a valid URL";
        }
      }


      /* MIN LENGTH */

      if (
        field.minLength &&
        typeof value === "string" &&
        value.length <
          field.minLength
      ) {
        nextErrors[field.name] =
          `${field.label} must be at least ${field.minLength} characters`;
      }


      /* MAX LENGTH */

      if (
        field.maxLength &&
        typeof value === "string" &&
        value.length >
          field.maxLength
      ) {
        nextErrors[field.name] =
          `${field.label} must not exceed ${field.maxLength} characters`;
      }
    });

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors)
        .length === 0
    );
  };


  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    await onSubmit?.(values);
  };


  /* =========================================
     COMMON INPUT CLASS
  ========================================= */

  const getInputClass = (
    fieldName
  ) => {
    const hasError =
      Boolean(errors[fieldName]);

    return `
      w-full
      rounded-xl
      border
      bg-white
      px-4
      font-[Manrope]
      text-sm
      text-slate-900
      outline-none
      transition
      duration-200

      placeholder:text-slate-400

      disabled:cursor-not-allowed
      disabled:bg-slate-50
      disabled:text-slate-400

      ${
        hasError
          ? `
            border-red-300
            focus:border-red-400
            focus:ring-4
            focus:ring-red-50
          `
          : `
            border-slate-200
            hover:border-slate-300
            focus:border-blue-400
            focus:ring-4
            focus:ring-blue-50
          `
      }
    `;
  };


  /* =========================================
     FIELD RENDERER
  ========================================= */

  const renderField = (
    field
  ) => {
    const value =
      getByPath(
        values,
        field.name
      ) ?? "";

    const error =
      errors[field.name];

    const fieldDisabled =
      disabled ||
      loading ||
      field.disabled;


    /* =====================================
       IMAGE
    ===================================== */

    if (
      field.type === "image"
    ) {
      return (
        <AdminImageUpload
          name={field.name}
          label={field.label}
          value={value}
          preview={
            imagePreviews[
              field.name
            ]
          }
          required={
            field.required
          }
          disabled={
            fieldDisabled
          }
          error={error}
          helperText={
            field.helperText
          }
          onChange={
            handleImageChange
          }
          onRemove={
            field.allowRemove ===
            false
              ? undefined
              : handleRemoveImage
          }
        />
      );
    }


    /* =====================================
       SWITCH
    ===================================== */

    if (
      field.type === "switch"
    ) {
      return (
        <div
          className="
            flex
            min-h-[78px]
            items-center
            justify-between
            gap-5
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
          "
        >
          <div>
            <p
              className="
                font-[Manrope]
                text-sm
                font-bold
                text-slate-800
              "
            >
              {field.label}
            </p>

            {field.description && (
              <p
                className="
                  mt-1
                  font-[Manrope]
                  text-[11px]
                  leading-5
                  text-slate-400
                "
              >
                {
                  field.description
                }
              </p>
            )}
          </div>

          <label
            className="
              relative
              inline-flex
              shrink-0
              cursor-pointer
              items-center
            "
          >
            <input
              type="checkbox"
              name={field.name}
              checked={
                Boolean(value)
              }
              onChange={
                handleChange
              }
              disabled={
                fieldDisabled
              }
              className="
                peer
                sr-only
              "
            />

            <span
              className="
                relative
                h-6
                w-11
                rounded-full
                bg-slate-300
                transition
                duration-200

                peer-checked:bg-blue-600

                peer-disabled:cursor-not-allowed
                peer-disabled:opacity-50

                after:absolute
                after:left-[3px]
                after:top-[3px]
                after:h-[18px]
                after:w-[18px]
                after:rounded-full
                after:bg-white
                after:shadow-sm
                after:transition-all
                after:duration-200
                after:content-['']

                peer-checked:after:translate-x-5
              "
            />
          </label>
        </div>
      );
    }


    return (
      <div>
        {/* LABEL */}

        <label
          htmlFor={field.name}
          className="
            mb-2
            block
            font-[Manrope]
            text-xs
            font-bold
            text-slate-700
          "
        >
          {field.label}

          {field.required && (
            <span className="ml-1 text-red-500">
              *
            </span>
          )}
        </label>


        {/* ================================= */}
        {/* TEXTAREA */}
        {/* ================================= */}

        {field.type ===
        "textarea" ? (
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            rows={
              field.rows || 5
            }
            placeholder={
              field.placeholder ||
              ""
            }
            disabled={
              fieldDisabled
            }
            onChange={
              handleChange
            }
            className={`
              ${getInputClass(
                field.name
              )}

              min-h-[120px]
              resize-y
              py-3
              leading-6
            `}
          />
        ) : field.type ===
          "select" ? (

          /* ================================= */
          /* SELECT */
          /* ================================= */

          <select
            id={field.name}
            name={field.name}
            value={value}
            disabled={
              fieldDisabled
            }
            onChange={
              handleChange
            }
            className={`
              ${getInputClass(
                field.name
              )}

              h-11
            `}
          >
            <option value="">
              {field.placeholder ||
                `Select ${field.label}`}
            </option>

            {field.options?.map(
              (option) => {
                const optionValue =
                  typeof option ===
                  "string"
                    ? option
                    : option.value;

                const optionLabel =
                  typeof option ===
                  "string"
                    ? option
                    : option.label;

                return (
                  <option
                    key={
                      optionValue
                    }
                    value={
                      optionValue
                    }
                  >
                    {
                      optionLabel
                    }
                  </option>
                );
              }
            )}
          </select>
        ) : (

          /* ================================= */
          /* NORMAL INPUT */
          /* ================================= */

          <input
            id={field.name}
            name={field.name}
            type={
              field.type ||
              "text"
            }
            value={value}
            placeholder={
              field.placeholder ||
              ""
            }
            min={field.min}
            max={field.max}
            step={field.step}
            disabled={
              fieldDisabled
            }
            onChange={
              handleChange
            }
            className={`
              ${getInputClass(
                field.name
              )}

              h-11
            `}
          />
        )}


        {/* HELPER TEXT */}

        {field.helperText &&
          !error && (
            <p
              className="
                mt-2
                font-[Manrope]
                text-[11px]
                leading-5
                text-slate-400
              "
            >
              {
                field.helperText
              }
            </p>
          )}


        {/* ERROR */}

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


  return (
    <form
      onSubmit={handleSubmit}
    >
      {/* ============================= */}
      {/* FIELDS */}
      {/* ============================= */}

      <div
        className="
          grid
          grid-cols-1
          gap-5

          md:grid-cols-2
        "
      >
        {fields.map(
          (field) => (
            <div
              key={field.name}
              className={
                field.fullWidth
                  ? "md:col-span-2"
                  : ""
              }
            >
              {renderField(
                field
              )}
            </div>
          )
        )}
      </div>


      {/* ============================= */}
      {/* FORM ACTIONS */}
      {/* ============================= */}

      <div
        className="
          mt-6
          flex
          flex-col-reverse
          gap-3
          border-t
          border-slate-100
          pt-5

          sm:flex-row
          sm:items-center
          sm:justify-end
        "
      >
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              font-[Manrope]
              text-xs
              font-bold
              text-slate-600
              transition

              hover:border-slate-300
              hover:bg-slate-50
              hover:text-slate-950

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={
            loading ||
            disabled
          }
          className="
            inline-flex
            min-h-11
            min-w-[150px]
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-slate-950
            px-5
            font-[Manrope]
            text-xs
            font-bold
            text-white
            transition
            duration-300

            hover:bg-blue-600

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" />

              Saving...
            </>
          ) : (
            <>
              <FiSave />

              {submitLabel}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default AdminForm;