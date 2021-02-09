import React from "react"

type Props = {
    name: string;
};

const RepoName: React.FC<Props> = ({name}) => {
    return (
        <div className="font-bold text-gray-900 text-3xl antialiased uppercase w-full text-center mb-1">
            {name}
        </div>
    )
}

export default RepoName
