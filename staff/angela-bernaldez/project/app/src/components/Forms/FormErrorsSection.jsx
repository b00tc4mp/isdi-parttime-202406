import classNames from 'classnames'
import EN from '../../locals/en.json'


function FormErrorsSection({ className, errors }) {
  errors?.sort((a, b) => a.order - b.order);

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
              <span>
                {EN.formsErrors[error.constructor.name] ??
                  EN.formsErrors.default}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FormErrorsSection