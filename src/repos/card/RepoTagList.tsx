import React from "react"
import RepoTag from "./RepoTag"

type Props = {
    tags: string[],
};

const RepoTagList: React.FC<Props> = ({tags}) => {
    return (
        <div className="flex flex-row content-start items-baseline justify-center mx-4">
            {tags.map((tag: string) => <RepoTag key={tag} tag={tag}/>)}
        </div>
    )
}

export default RepoTagList
