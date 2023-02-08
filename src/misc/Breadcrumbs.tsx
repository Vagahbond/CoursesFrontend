import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Breadcrumbpart {
    path?: string;
    name: string;
}

interface Props {
    parts: Breadcrumbpart[];
}

const Breadcrumbs = ({ parts }: Props) => {

    return (
        <ol className="flex list-reset bg-zinc-800 mx-24 my-6 rounded-xl drop-shadow-xl text-white h-min p-4">
            <li>
                <span className="text-gray-500 mx-2"> / </span>
            </li>
            {
                parts.map(({ path, name }, index) => {
                    if (path) {
                        return (
                            <>
                                <li key={index}>
                                    <Link to={path} className="text-white hover:bg-zinc-600 p-2 rounded-xl my-auto"> {name} </Link>

                                </li>
                                <li key={`slash-${index}`}>
                                    <span className="text-gray-500 mx-2"> / </span>
                                </li>
                            </>
                        )
                    }
                    else {
                        return (
                            <li key={index}>
                                <span className="text-gray-500 mx-2"> {name} </span>
                            </li>
                        )
                    }
                })
            }
            {/* <li><Link to="#" className="text-white hover:bg-zinc-600 p-2 rounded-xl my-auto">Home</Link></li>
            <li><span className="text-gray-500 mx-2">/</span></li>
            <li className="text-gray-500">Library</li> */}
        </ol>
    )
};

export default Breadcrumbs;