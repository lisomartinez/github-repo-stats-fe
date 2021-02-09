import React from "react"

type Props = {
    name: string;
};

const RepoName: React.FC<Props> = ({name}) => {
    return (
        <div className="my-1 w-full text-3xl antialiased font-bold text-center text-gray-900 uppercase">
            {name}
        </div>
    )
}

export default RepoName
