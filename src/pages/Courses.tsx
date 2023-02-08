import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosConf";
import Breadcrumbs from "../misc/Breadcrumbs";
import Loader from "../misc/Loader";
import { ICourse } from "../types/Course";

const breadcrumbParts = [
    {
        name: "Courses"
    }
]

const Courses = () => {
    const [courses, setCourses] = React.useState<ICourse[] | undefined>(undefined);
    useEffect(() => {
        axios.get<ICourse[]>("/courses")
            .then((res) => {
                setCourses(res.data);
            }
            )
            .catch((err) => {
                console.log(err);
            }
            )
    }, [])

    return (
        <>

            <Breadcrumbs parts={breadcrumbParts} />

            <div className="flex flex-col min-h-max bg-zinc-800 mx-24 my-6 rounded-xl drop-shadow-xl pb-12 ">
                <h1 className="text-3xl text-white mx-auto p-12">Courses</h1>
                <div className="bg-grey grid gird-cols-1 mx-auto ">
                    {
                        courses ?
                            courses.map((course) => {
                                return (
                                    <div className="flex flex-row mx-auto my-4" key={course.title}>
                                        <Link to={`/chapters/${course.reposName}`} className="text-xl text-white align-middle p-4 cursor-pointer hover:bg-zinc-600 rounded-xl">{course.title}</Link>
                                    </div>
                                )
                            }) :
                            <Loader />
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;