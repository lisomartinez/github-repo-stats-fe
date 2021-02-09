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
        <div className="flex relative flex-col py-5 mr-10 mb-10 w-80 h-full bg-gray-50 rounded-3xl shadow-2xl ">
            <RepoTagList tags={repo.tags}/>
            <RepoName name={repo.name}/>
            <RepoStats stats={repo.stats}/>
            <RepoActions/>
        </div>
    )
}

export default RepoCard
