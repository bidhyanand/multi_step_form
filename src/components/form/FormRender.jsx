import InputField from "./Input";

const FormRender = ({ controllerField, formField, errors, isSubmitting }) => {
    switch (formField.type) {
        case "text":
            return (
                <InputField
                    controllerField={controllerField}
                    formField={formField}
                    errors={errors}
                    isSubmitting={isSubmitting}
                />
            );
        case "textarea":
            return (
                <InputField
                    controllerField={controllerField}
                    formField={formField}
                    errors={errors}
                    isSubmitting={isSubmitting}
                />
            );
        case "select":
            return (
                <div>
                    <label htmlFor={formField.name} className="block text-sm font-medium text-gray-700 mb-2">
                        {formField.label}
                        {formField.required && <span className="text-red-500"> *</span>}
                    </label>
                    <select
                        {...controllerField}
                        disabled={isSubmitting}
                        className={`w-full px-3 py-2 mb-2 border ${errors[formField.name] ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    >

                        <option value="" disabled>{formField.defaultValue}</option>
                        {formField.options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors[formField.name] && (
                        <p className="text-red-500 text-xs italic">{errors[formField.name].message}</p>
                    )}
                </div>


            );
        default:
            return (
                <InputField
                    controllerField={controllerField}
                    formField={formField}
                    errors={errors}
                    isSubmitting={isSubmitting}
                />
            );
    }
};

export default FormRender;