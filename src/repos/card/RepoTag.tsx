import React from "react"

type Props = {
    tag: string;
};

const RepoTag: React.FC<Props> = ({tag}) => {
    return (
        <div className="font-sans font-normal text-white text-xs rounded-xl bg-green-500 px-2 py-0.5 mr-3">{tag}</div>
    )
}

export default RepoTag
