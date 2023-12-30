import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const DynamicForm = () => {
    const { register, handleSubmit } = useForm();
    const [formDataArray, setFormDataArray] = useState([{ username: '', password: '' }]);

    const onSubmit = (data) => {
        const updatedFormDataArray = formDataArray.map((formData, index) => {
            return {
                username: data.username[index],
                password: data.password[index],
            };
        });
        console.log(updatedFormDataArray);
        setFormDataArray(updatedFormDataArray);
    };

    const handleAddForm = () => {
        setFormDataArray([...formDataArray, { username: '', password: '' }]);
    };

    const handleDeleteForm = (index) => {
        const newFormDataArray = [...formDataArray];
        newFormDataArray.splice(index, 1);
        setFormDataArray(newFormDataArray);
    };

    console.log(formDataArray);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddForm}
            >
                Add Form
            </button>
            {formDataArray.map((formData, index) => (
                <div key={index}>
                    <div className="flex flex-col">
                        <div className="mx-2 w-full flex-1">
                            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                Username
                            </div>
                            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                                <input
                                    {...register(`username[${index}]`)}
                                    name={`username[${index}]`}
                                    placeholder="Username"
                                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                                />
                            </div>
                        </div>
                        <div className="mx-2 w-full flex-1">
                            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                Password
                            </div>
                            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                                <input
                                    {...register(`password[${index}]`)}
                                    name={`password[${index}]`}
                                    placeholder="Password"
                                    type="password"
                                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            data-index={index}
                        >
                            Submit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleDeleteForm(index)}
                        >
                            Delete Form
                        </button>
                    </div>
                </div>
            ))}
        </form>
    );
};

export default DynamicForm
