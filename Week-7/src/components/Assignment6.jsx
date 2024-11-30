import { useState } from "react"

function Assignment6() {
    const [number, setNumber] = useState("")
    const [phone, setPhone] = useState("");
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
            <div className="flex flex-col justify-center bg-black rounded-md">
                <div className="text-3xl text-slate-200 mx-10 my-5 text-center">
                    <p>Login Via OTP</p>
                </div>
                {phone ?
                    <div className="w-full flex flex-row justify-center">
                        <input id="input1" className="w-10 h-10 rounded-md bg-black border p-2 m-2 text-slate-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center" type="number" maxLength={1} onChange={e => {
                            if (e.target.value.length > 0) {
                                document.getElementById("input2").focus();
                            }
                        }} />
                        <input id="input2" className="w-10 h-10 rounded-md bg-black border p-2 m-2 text-slate-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center" type="number" maxLength={1} onChange={e => {
                            if (e.target.value.length > 0) {
                                document.getElementById("input3").focus();
                            }
                            if (e.target.value.length == 0) {
                                document.getElementById("input1").focus();
                            }
                        }} />
                        <input id="input3" className="w-10 h-10 rounded-md bg-black border p-2 m-2 text-slate-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center" type="number" maxLength={1} onChange={e => {
                            if (e.target.value.length > 0) {
                                document.getElementById("input4").focus();
                            }
                            if (e.target.value.length == 0) {
                                document.getElementById("input2").focus();
                            }
                        }} />
                        <input id="input4" className="w-10 h-10 rounded-md bg-black border p-2 m-2 text-slate-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center" type="number" maxLength={1} onChange={e => {
                            if (e.target.value.length == 0) {
                                document.getElementById("input3").focus();
                            }
                        }} />
                    </div>
                    :
                    <div className="m-5">
                        <input className="w-full h-10 rounded-md bg-black border p-2 text-slate-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="Enter Your Mobile Number" onChange={e => {
                            if (e.target.value.length > 10) {
                                e.target.value = e.target.value.slice(0, 10)
                            }
                            setNumber(e.target.value);
                        }} />
                    </div>}
                <div className="font-semibold text-slate-200 mx-auto my-5">
                    <button className="bg-black border rounded-md px-5 py-2" onClick={() => {
                        setPhone(number)
                    }}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Assignment6