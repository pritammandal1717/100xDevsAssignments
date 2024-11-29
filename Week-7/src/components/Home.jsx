import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();

  return (
    <div className="h-screen bg-slate-700 flex items-center">
      <div className='w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <button onClick={() => navigate("/assignment-1")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-1</button>
        <button onClick={() => navigate("/assignment-2")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-2</button>
        <button onClick={() => navigate("/assignment-3")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-3</button>
        <button onClick={() => navigate("/assignment-4")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-4</button>
        <button onClick={() => navigate("/assignment-5")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-5</button>
        <button onClick={() => navigate("/assignment-6")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-6</button>
        <button onClick={() => navigate("/assignment-7")} className="mx-10 my-2 md:mx-3  py-5 bg-slate-800 rounded-md border border-slate-400 hover:border-cyan-300 text-slate-200">Assignment-7</button>
      </div>
    </div>
  )
}

export default Home