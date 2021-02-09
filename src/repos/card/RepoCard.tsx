import React from "react"
import RepoStats from "./RepoStats"
import RepoTagList from "./RepoTagList"
import RepoActions from "./RepoActions"
import RepoName from "./RepoName"
import {Repo} from "../../models/repos"


type Props = {
    repo: Repo
};

const RepoCard: React.FC<Props> = ({repo}) => {
    return (
        <div className="flex flex-col py-5 mb-20 w-80 bg-gray-50 rounded-3xl shadow-2xl">
            <RepoTagList tags={repo.tags}/>
            <RepoName name={repo.name}/>
            <RepoStats stats={repo.stats}/>
            <RepoActions/>
        </div>
    )
}

export default RepoCard
