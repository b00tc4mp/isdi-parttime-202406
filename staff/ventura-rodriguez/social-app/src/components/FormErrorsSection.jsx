import classNames from "classnames";
import ES from "../locales/es.json";

function FormErrorsSection({ className, errors }) {
  return (
    <>
      {errors instanceof Array && (
        <ul
          className={classNames(
            "p-4 prose-sm prose w-full min-w-full text-error bg-opacity-5 bg-white",
            className
          )}
        >
          {errors.map((error, index) => (
            <li key={index} className="">
              <span>{ES.formsErrors[error.constructor.name]}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FormErrorsSection;
