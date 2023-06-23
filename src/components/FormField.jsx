import { ErrorMessage } from 'formik'
const FormField = ({
    name,
    type,
    value,
    onChange,
    label,
    labelClass,
    inputClass,
    placeholder,
    groupClass,
    onBlur,
    autoComplete,
    rows = 3,
    noError,
    checked,
    required,
    labelAndInputClass,
}) => (
    <div className={groupClass}>
        <div className={labelAndInputClass}>
            <label className={labelClass}>
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <div className="relative">
                {type === 'textarea' ? (
                    <textarea
                        className={inputClass}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        name={name}
                        rows={rows}
                    />
                ) : (
                    <input
                        className={inputClass}
                        type={type}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        name={name}
                        autoComplete={autoComplete}
                        checked={checked}
                    />
                )}
            </div>
        </div>
        {noError ? null : (
            <div className="absolute">
                <ErrorMessage name={name} component="div">
                    {(msg) => (
                        <span className="ml-1 text-sm text-red-600">{msg}</span>
                    )}
                </ErrorMessage>
            </div>
        )}
    </div>
)

export default FormField
