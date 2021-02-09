import React from "react"
import {RepoStatistics} from "../../models/repos"
import formatStat from "../../models/repos/RepoStatsFormatter"
type Props = { stats: RepoStatistics };

const RepoStats: React.FC<Props> = ({stats}) => {
    return (
        <div className="flex justify-center mt-7 h-full leading-7 flex-direction">
            <div
                className="px-1 mr-3 h-7 font-bold leading-6 text-center text-yellow-800 align-middle border-2 border-yellow-800 shadow-sm text-xs tracking-wider">
                VISITS: <span>{ formatStat(stats.visits)}</span>
            </div>
            <div
                className="px-1 mr-3 h-7 font-bold leading-6 text-center text-yellow-800 align-middle border-2 border-yellow-800 shadow-sm text-xs tracking-wider">
                CLONES: <span>{ formatStat(stats.clones)}</span>
            </div>
        </div>
    )
}

export default RepoStats
