import React from "react"

type Props = {
    tag: string;
};

const RepoTag: React.FC<Props> = ({tag}) => {
    return (
        <div className="px-2 mr-3 font-sans text-xs font-medium tracking-wide leading-4 text-gray-800 bg-yellow-200 rounded-xl">{tag}</div>
    )
}

export default RepoTag
