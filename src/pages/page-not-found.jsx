import React from 'react'
import NavBar from "../components/NavBar"

function PageNotFound() {
    return (
        <div className="w-full">
            <div className="mt-4 text-center mx-auto">
                <h1 className="font-semibold text-xl">Could not find what you're looking for'</h1>
                <h1 className="mt-1">try again later</h1>
                <button className="mt-1"></button>
            </div>
        </div>
    )
}

export default PageNotFound
