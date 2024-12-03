import { useEffect, useState } from "react"
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { gitUserAtom } from "../store/api/data";

function Assignment5() {
    const [input, setInput] = useState("");
    const [gitUser, setGitUser] = useRecoilState(gitUserAtom)
    console.log("Hii")

    // const [gitUser, setGitUser] = useState({
    //     name: "",
    //     avatar: "",
    //     bio: "",
    //     noOfRepos: "",
    //     githubUrl: "",
    //     noOfFollowers: "",
    //     noOfFollowings: "",
    //     memberSince: "",
    //     portfolio: "",
    // })

    async function downloadData(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const data = response.data;

        setGitUser({
            name: data.name,
            avatar: data.avatar_url,
            bio: data.bio,
            noOfRepos: data.public_repos,
            githubUrl: data.html_url,
            noOfFollowers: data.followers,
            noOfFollowings: data.following,
            memberSince: data.created_at,
            portfolio: data.blog,
        })
    }


const memberSince = new Date(gitUser.memberSince);

const calculateDuration = () => {
    if (!memberSince) return {};
    const now = new Date();
    const diff = now - memberSince;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);

    const remainingMonths = months % 12;
    const remainingDays = days % 30.44;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    return {
        years,
        months: remainingMonths,
        days: Math.floor(remainingDays),
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
    };
};

const [duration, setDuration] = useState(calculateDuration());

useEffect(() => {

    if (gitUser.memberSince) {
        const interval = setInterval(() => {
            setDuration(calculateDuration());
        }, 1000);
        return () => clearInterval(interval);
    }

}, [gitUser.memberSince])
return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-300">

        <div className="w-2/4 flex flex-row justify-center items-center text-3xl text-slate-900 font-mono font-medium">
            <FaGithub className="mr-4" /><p>GitHub Profile Card</p>
        </div>
        <div className="w-[50%] flex flex-row justify-center mt-5">
            <input className="w-[50%] h-10 rounded-md bg-black border p-2 font-mono text-cyan-200 mr-5" type="text" placeholder="Enter Your Github Username, e.g. john123" onInput={(e) => setInput(e.target.value)} />
            <button className="px-3 py-1 bg-cyan-300 rounded-md font-mono font-semibold" onClick={() => downloadData(input)}>Get Profile Card</button>
        </div>
        {gitUser.name ?
            <div className="card-wrapper bg-cyan-600 rounded-md m-5 ">
                <div className="card-content">
                    <div className="flex flex-col rounded-md m-1 p-5">
                        <div className=" flex justify-end">
                            <button className="px-2 py-1 bg-cyan-300 rounded-md font-mono tracking-tight text-slate-800" onClick={(e) => {
                                window.open(gitUser.githubUrl, "_blank")

                            }}>Visit My Profile</button>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="w-100">
                                <img className="rounded-full border-4 border-violet-300" width={250} src={gitUser.avatar} alt="" />
                            </div>
                            <div className="mt-5 ml-10">
                                <p className="font-mono text-violet-200 text-4xl">{gitUser.name}</p>
                                <p className="font-mono text-cyan-100 text-lg">{gitUser.bio}</p>
                                <div className="my-3 border-t-2 border-cyan-600"></div>
                                <div className="flex flex-row">
                                    <p className="mr-5 font-mono text-violet-300 text-lg">Repos: {gitUser.noOfRepos}</p>
                                    <p className="mr-5 font-mono text-violet-300 text-lg">Followers: {gitUser.noOfFollowers}</p>
                                    <p className="font-mono text-violet-300 text-lg">Following: {gitUser.noOfFollowings}</p>
                                </div>
                                <div className="flex flex-row pr-2">
                                    <p className="mr-2 font-mono text-fuchsia-400 text-lg">Member Since : </p>
                                    <p className="font-mono text-teal-400 text-lg">{duration.years} years {duration.months} months {duration.days} days - {duration.hours} hours {duration.minutes} minutes {duration.seconds} seconds</p>
                                </div>
                                {gitUser.portfolio ?
                                    <div className="mt-5 flex justify-center">
                                        <button className="bg-violet-300 font-mono px-3 py-1 rounded-md" onClick={(e) => { window.open(gitUser.portfolio, "_blank") }}>Portfolio</button>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null}
    </div>
)
}

export default Assignment5