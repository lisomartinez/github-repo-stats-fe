export interface Repo {
    name: string;
    tags: string[];
    stats: RepoStatistics
}

export interface RepoStatistics {
    visits: number;
    clones: number;
}
