import React from "react";

interface Props {
    tag: string;
}

const TagBadge = (props: Props) => {
    return (
        <span className="inline-block py-0.5 px-1.5 h-min leading-none text-center whitespace-nowrap align-baseline bg-blue-600 text-white rounded ml-2 text-sm">
            {props.tag}
        </span>
    );
};

export default TagBadge;