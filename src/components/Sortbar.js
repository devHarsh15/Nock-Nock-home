import React, { useState } from 'react'
import '../styles/Sortbar.css'

export default function Sortbar() {

    const [sort, setSort] = useState("")

    const changeSort = (e) => {
        setSort(e.target.value)
    }

    return (
        <div id="sortbar" className="container-sm shadow p-3 mb-5 bg-white">
            <input className="sortbar-input" type="text" value={sort} onChange={changeSort} list='sorts' name='sortTypes' placeholder="Sort" />
            <datalist id="sorts">
                <option value="Sort by Name">Sort by Name</option>
                <option value="Sort by Type">Sort by Type</option>
                <option value="Sort by Price">Sort by Price</option>
            </datalist>
        </div>
    )
}
