import React from 'react'
import Table from './tableDesign/Table'

const MainTable = () => {
    return (
        <>
            <Table thead={tableHeads} />
        </>

    )
}

export default MainTable

const tableHeads = [
    {
        id: 1,
        name: "S.No",
        width: "w-1/2"
    },
    {
        id: 2,
        name: "Name",
        width: "w-1/2"
    },
    {
        id: 3,
        name: "Age",
        width: "w-1/2"
    },
    {
        id: 4,
        name: "Email",
        width: "w-1/2"
    },
    {
        id: 5,
        name: "Action",
        width: "w-1/2"
    }
]