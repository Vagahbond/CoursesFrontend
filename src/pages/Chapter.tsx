import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../misc/Breadcrumbs";
import Loader from "../misc/Loader";
import { IChapter } from "../types/Chapter";

const Chapter = () => {
    const { reposName, chapterPathName } = useParams();

    const [chapter, setChapter] = React.useState<IChapter | undefined>(undefined);

    useEffect(() => {
        fetch(`http://localhost:3000/api/chapters/${reposName}/${chapterPathName}`)
            .then((response) => response.json())
            .then((data) => {
                setChapter(data);
            });
    }, [reposName, chapterPathName]);

    const breadcrumbParts = [
        {
            name: "Courses",
            path: "/courses"

        },
        {
            name: reposName ?? "...",
            path: `/chapters/${reposName}`
        },
        {
            name: chapter?.title ?? "...",

        }
    ]

    if (!chapter) return (
        <div className="flex flex-col min-h-max bg-zinc-800 mx-24 my-12 rounded-xl drop-shadow-xl pb-12 ">
            <Loader />
        </div>
    );


    return (
        <>
            <Breadcrumbs parts={breadcrumbParts} />
            <div className="flex flex-col min-h-max bg-zinc-800 mx-24 my-12 rounded-xl drop-shadow-xl pb-12 ">
                <h1 className="text-3xl text-white mx-auto p-12">{chapter?.title}</h1>
                <div className="bg-grey grid gird-cols-1 mx-auto ">
                    <ReactMarkdown className="bg-white prose prose-lg">
                        {chapter.content as string}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default Chapter;