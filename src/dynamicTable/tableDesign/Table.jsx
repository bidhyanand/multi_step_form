import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

const Table = ({ thead }) => {
    const [tableData, setTableData] = useState([]);
    const addTableRow = () => {
        setTableData([...tableData, {}]);
    };

    console.log(tableData);

    const AddTableRowButton = () => {
        return (
            <button
                onClick={addTableRow}
                className="bg-sky-400 hover:bg-sky-700 text-white font-bold p-2 rounded-full mx-4"
            >
                <div className="tooltip" data-tip="Add Data">
                    <GrAddCircle color="white" />
                </div>
            </button>
        );
    };

    return (
        <>
            {/* need this button float in right side  */}
            <div className="flex justify-end py-3">
                <AddTableRowButton />
            </div>

            <table className="table-fixed w-full">
                <thead>
                    {thead.map((head, index) => (
                        <th
                            key={index}
                            className={`border bg-gray-300 px-4 py-2 ${head.width}`}
                        >
                            {head.name}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index} className="bg-white">
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    value={rowData.sn || ""}
                                    onChange={(event) =>
                                        setTableData([
                                            ...tableData.slice(0, index),
                                            { ...rowData, sn: event.target.value },
                                            ...tableData.slice(index + 1),
                                        ])
                                    }
                                    className="border-gray-300 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    placeholder="Name"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    value={rowData.name || ""}
                                    onChange={(event) =>
                                        setTableData([
                                            ...tableData.slice(0, index),
                                            { ...rowData, name: event.target.value },
                                            ...tableData.slice(index + 1),
                                        ])
                                    }
                                    className="border-gray-300 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    placeholder="Email"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    value={rowData.age || ""}
                                    onChange={(event) =>
                                        setTableData([
                                            ...tableData.slice(0, index),
                                            { ...rowData, age: event.target.value },
                                            ...tableData.slice(index + 1),
                                        ])
                                    }
                                    className="border-gray-300 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    placeholder="Email"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    value={rowData.email || ""}
                                    onChange={(event) =>
                                        setTableData([
                                            ...tableData.slice(0, index),
                                            { ...rowData, email: event.target.value },
                                            ...tableData.slice(index + 1),
                                        ])
                                    }
                                    className="border-gray-300 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                                    placeholder="Email"
                                />
                            </td>
                            {/* here is action button delete and add */}
                            <td className="border px-4 py-2 flex justify-between">
                                <button
                                    onClick={addTableRow}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Add
                                </button>
                                <button
                                    onClick={() => {
                                        setTableData([
                                            ...tableData.slice(0, index),
                                            ...tableData.slice(index + 1),
                                        ]);
                                    }}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
