import { useEffect, useState } from "react"
import axios from 'axios'
import { FaGithub } from "react-icons/fa";

function Assignment5() {
    const [gitUser, setGitUser] = useState({
        name: "",
        avatar: "",
        bio: "",
        noOfRepos: "",
        repos: [],
        githubUrl: "",
        noOfFollowers: "",
        noOfFollowings: "",
        memberSince: "",
        portfolio: "",
        followers: [],
        followings: [],
    })
    console.log(gitUser);


    useEffect(() => {
        (async () => {
            // const response = await axios.get()
            const data = response.data;
            console.log(data);
            setGitUser({
                name: data.name,
                avatar: data.avatar_url,
                bio: data.bio,
                noOfRepos: data.public_repos,
                repos: data.repos_url,
                githubUrl: data.html_url,
                noOfFollowers: data.followers,
                noOfFollowings: data.following,
                memberSince: data.created_at,
                portfolio: data.blog,
                followers: data.followers_url,
                followings: data.following_url,
            })
        })()
    }, [])
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-2/4 flex flex-row justify-center items-center text-3xl text-slate-900">
                <FaGithub className="mr-4" /><p>GitHub Profile Card</p>
            </div>
            <div className="flex flex-col bg-slate-700 rounded-md mt-5 p-5">
                <div className="flex flex-row justify-between bg-slate-700">
                    <div className="border-4 border-amber-400 rounded-full">
                        <img className="rounded-full " src="profile.jpeg" alt="" />
                    </div>
                    <div className="mt-5 ml-10">
                        <p className="text-slate-200 text-3xl">Your Name</p>
                        <p className="text-slate-200 text-xl">your id</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Assignment5