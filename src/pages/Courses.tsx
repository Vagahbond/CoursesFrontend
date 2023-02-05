import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosConf";

const Courses = () => {

    useEffect(() => {
        axios.get("/courses")
            .then((res) => {
                console.log(res);
            }
            )
            .catch((err) => {
                console.log(err);
            }
            )
    }, [])

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl mx-auto p-12">Courses</h1>
            <div className="bg-grey grid gird-cols-1 mx-auto ">
                <Link to="/courses/1" className="text-2xl text-white ml-4 align-middle p-4 cursor-pointer hover:bg-zinc-600"> Cours 1</Link>
            </div>
        </div>
    );
};

export default Courses;