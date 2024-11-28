
function ProfileCard(props) {
    return (
        <div className="flex flex-col bg-slate-100 rounded-md overflow-hidden">
            <div className="h-40 w-80 ">
                <img src={props.bannerImage} alt="Profile Picture" className="h-full w-full" />
            </div>
            <div className="flex fixed p-20 m-10">
                <img src={props.profileImage} alt="Profile Picture" className="w-20 rounded-full" />
            </div>
            <div className="flex flex-row justify-center bg-slate-100 mt-12">
                <p className="text-xl font-medium text-slate-800">{props.name}</p>
                <p className="ml-2 text-lg text-slate-500">{props.age}</p>
            </div>
            <div>
                <p className="py-2 text-stone-800">{props.city}</p>
            </div>
            <div className="border border-slate-400"></div>
            <div className="flex flex-row justify-between p-5">
                <div className="flex flex-col">
                    <p className="text-lg text-slate-800 font-bold">{props.followers.toUpperCase()}</p>
                    <p className="text-sm text-slate-800">Followers</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-lg text-slate-800 font-bold">{props.likes.toUpperCase()}</p>
                    <p className="text-sm text-slate-800">Likes</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-lg text-slate-800 font-bold">{props.photos.toUpperCase()}</p>
                    <p className="text-sm text-slate-800">Photos</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard