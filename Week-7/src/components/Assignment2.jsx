import { useState } from "react"

const colors = [
  { name: 'red', hex: '#ef4444' },
  { name: 'green', hex: '#22c55e' },
  { name: 'blue', hex: '#3b82f6' },
  { name: 'yellow', hex: '#eab308' },
  { name: "purple", hex: '#a855f7' },
  { name: "black", hex: '#000000' },
]

function Assignment2() {
  return (
    <div>
      <AppBar />
    </div>
  )
}

function AppBar() {

  const [bgColor, setBgColor] = useState("")

  const ele = document.getElementById("root")
  ele.style.backgroundColor = bgColor;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className='mx-10 flex flex-row flex-wrap justify-center rounded-md bg-slate-100'>
        <div className="m-2 bg-red-500 rounded-md px-4 py-2" onClick={()=> setBgColor(colors[0].hex)}><button>Red</button></div>
        <div className="m-2 bg-yellow-500 rounded-md px-4 py-2" onClick={()=> setBgColor(colors[3].hex)}><button>Yellow</button></div>
        <div className="m-2 bg-black rounded-md px-4 py-2 text-slate-200" onClick={()=> setBgColor(colors[5].hex)}><button>Black</button></div>
        <div className="m-2 bg-purple-500 rounded-md px-4 py-2" onClick={()=> setBgColor(colors[4].hex)}><button>Purple</button></div>
        <div className="m-2 bg-green-500 rounded-md px-4 py-2" onClick={()=> setBgColor(colors[1].hex)}><button>Green</button></div>
        <div className="m-2 bg-blue-500 rounded-md px-4 py-2" onClick={()=> setBgColor(colors[2].hex)}><button>Blue</button></div>
        <div className="m-2 bg-white rounded-md px-4 py-2" onClick={()=> setBgColor(null)}><button>Default</button></div>
      </div>
    </div>
  )
}

export default Assignment2