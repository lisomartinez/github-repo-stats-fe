import React from "react"

type Props = {
    tag: string;
};

const RepoTag: React.FC<Props> = ({tag}) => {
    return (
        <div className="px-2 mr-3 mt-6 font-sans text-xs font-medium tracking-wider leading-4 text-gray-600 bg-yellow-200 rounded-xl">{tag}</div>
    )
}

export default RepoTag
