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
        <div className="rounded-3xl shadow-2xl w-96 flex flex-col py-5">
            <RepoName name={repo.name}/>
            <RepoTagList tags={repo.tags}/>
            <RepoStats stats={repo.stats}/>
            <RepoActions/>
        </div>
    )
}

export default RepoCard
