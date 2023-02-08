import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../misc/Breadcrumbs";
import Loader from "../misc/Loader";
import { IChapter } from "../types/Chapter";

const Chapters = () => {
    const { reposName } = useParams();

    const [chapters, setChapters] = React.useState<IChapter[] | undefined>(undefined)

    useEffect(() => {
        fetch(`http://localhost:3000/api/chapters/${reposName}`)
            .then((response) => response.json())
            .then((data) => {
                setChapters(data);
            });
    }, [reposName]);

    const breadcrumbParts = [
        {
            name: "Courses",
            path: "/courses"

        },
        {
            name: reposName ?? "..."
        }
    ]



    return (
        <>
            <Breadcrumbs parts={breadcrumbParts} />

            <div className="flex flex-col min-h-max bg-zinc-800 mx-24 my-12 rounded-xl drop-shadow-xl pb-12 ">
                <h1 className="text-3xl text-white mx-auto p-12"> {reposName} </h1>
                <h2 className="text-2xl text-white mx-auto p-12">Chapitres :</h2>
                <div className="bg-grey grid gird-cols-1 mx-auto ">
                    {
                        chapters ?
                            chapters.map((chapter) => {
                                return (
                                    <div className="flex flex-row mx-auto my-4" key={chapter.title}>
                                        <Link
                                            to={`/chapters/${reposName}/${chapter.path}`}
                                            className="text-xl text-white align-middle p-4 cursor-pointer hover:bg-zinc-600 rounded-xl">
                                            {chapter.title}
                                        </Link>
                                    </div>
                                )
                            }
                            )
                            : <Loader />
                    }
                </div>
            </div>
        </>

    );
};

export default Chapters;
