import { useState, useContext } from "react"
import { StepperContext } from "../contexts/StepperContext"

const Account = () => {
    const { userData, setUserData } = useContext(StepperContext)
    const [formState, setFormState] = useState([{ ...userData }])

    const handleAddForm = () => {
        setFormState([...formState, { ...userData }])
    }

    const handleDeleteForm = (index) => {
        const newFormState = [...formState]
        newFormState.splice(index, 1)
        setFormState(newFormState)
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newFormState = [...formState]
        newFormState[index] = { ...newFormState[index], [name]: value }
        setFormState(newFormState)
    }

    const renderForms = () => {
        return formState.map((form, index) => (
            <div key={index} className="flex flex-col">
                <div className="mx-2 w-full flex-1">
                    <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                        Username
                    </div>
                    <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                        <input
                            onChange={(e) => handleChange(e, index)}
                            value={form["username"] || ""}
                            name="username"
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
                            onChange={(e) => handleChange(e, index)}
                            value={form["password"] || ""}
                            name="password"
                            placeholder="Password"
                            type="password"
                            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                        />
                    </div>
                </div>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteForm(index)}
                >
                    Delete Form
                </button>
            </div>
        ))
    }

    return (
        <div className="flex flex-col">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddForm}>
                Add Form
            </button>
            {renderForms()}
        </div>
    )
}

export default Account
