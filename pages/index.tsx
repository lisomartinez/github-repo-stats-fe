import RepoCard from "../src/repos/card/RepoCard"
import {GetServerSideProps} from "next";
import {Repo} from "../src/models/repos";
import axios from "axios";
import React from "react";

type Props = {
    repos: Repo[]
}

const Home: React.FC<Props> = (props) => {
    return (
        <div className="m-0 p-0 bg-gradient-to-b h-screen from-green-600 to-green-100">
            <div className="p-10">
                {props.repos.map(repo => <RepoCard key={repo.name} repo={repo}/>)}
            </div>
        </div>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await axios.get("http://localhost:8080/repos");
    console.log(response.data)
    return {
        props: {
            repos: response.data
        }
    }
}

export default Home;
