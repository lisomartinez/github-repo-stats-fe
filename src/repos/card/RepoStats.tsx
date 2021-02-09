import React from "react"
import {RepoStatistics} from "../../models/repos"

type Props = { stats: RepoStatistics };

const RepoStats: React.FC<Props> = ({stats}) => {
    return (
        <div className="flex flex-direction justify-center h-7 leading-7 mt-7">
            <div
                className="border-2 border-gray-500 w-28 shadow-sm mr-3  h-full leading-6 text-center font-bold text-gray-600 align-middle">
                VISITS: <span>{stats.visits}</span>
            </div>
            <div
                className="border-2 border-gray-500 w-28 shadow-sm mr-3  h-full leading-6 text-center font-bold text-gray-600 align-middle">
                CLONES: <span>{stats.clones}</span>
            </div>
        </div>
    )
}

export default RepoStats
