import React from "react"
import {RepoStatistics} from "../../models/repos"

type Props = { stats: RepoStatistics };

const RepoStats: React.FC<Props> = ({stats}) => {
    return (
        <div className="flex justify-center mt-7 h-7 leading-7 flex-direction">
            <div
                className="px-1 mr-3 h-full font-bold leading-6 text-center text-gray-600 align-middle border-2 border-gray-500 shadow-sm text-xs tracking-wider">
                VISITS: <span>{stats.visits}</span>
            </div>
            <div
                className="px-1 mr-3 h-full font-bold leading-6 text-center text-gray-600 align-middle border-2 border-gray-500 shadow-sm text-xs tracking-wider">
                CLONES: <span>{stats.clones}</span>
            </div>
        </div>
    )
}

export default RepoStats
