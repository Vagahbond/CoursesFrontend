import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../misc/Breadcrumbs";
import Loader from "../misc/Loader";
import { IChapter } from "../types/Chapter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkMermaid, { RemarkMermaidOptions } from "remark-mermaidjs";
import TagBadge from "../TagBadge";



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



    if (!chapter) return (
        <div className="flex flex-col min-h-max bg-zinc-800 mx-24 my-12 rounded-xl shadow-xl pb-12 ">
            <Loader />
        </div>
    );


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

    return (
        <>
            <Breadcrumbs parts={breadcrumbParts} />
            <div className="flex flex-col min-h-max bg-zinc-800 mx-24 my-12 rounded-xl shadow-xl pb-12 ">
                <h1 className="text-3xl text-white mx-auto pt-12 pb-2">{chapter?.title}</h1>
                <div className="mx-auto pb-12">
                    {
                        chapter.tags.map((tag) =>
                            <TagBadge tag={tag} key={tag} />
                        )
                    }
                </div>
                <div className="bg-zinc-800 prose prose-lg grid gird-cols-1 mx-auto w-max overflow-hidden rounded-xl">
                    <ReactMarkdown className="bg-zinc-200 prose prose-lg p-4 drop0shadow-xl" remarkPlugins={[[remarkMermaid, { mermaidOptions: { theme: "dark" } } as RemarkMermaidOptions]]}>
                        {chapter.content as string}
                    </ReactMarkdown>


                </div>
            </div>
        </>
    );
};

export default Chapter;