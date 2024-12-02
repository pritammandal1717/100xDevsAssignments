import {useRecoilState} from 'recoil';
import BirthdayCard1 from './BirthdayCard1'
import BirthdayCard3 from './BirthdayCard3'
import BirthdayCard2 from './BirthdayCard2'
import { nameAtom } from '../store/api/data';
import { useState } from 'react';

function Assignment7() {
    const [input, setInput] = useState("");
    const [name, setName] = useRecoilState(nameAtom)
    return (
        <>
            <div className='z-0 w-screen h-screen bg-background blur-sm bg-cover bg-fixed'></div>
            <div className='absolute top-0 w-screen h-screen flex flex-col justify-center items-center '>
                <div className='w-2/4 flex flex-col justify-center items-center'>
                    <p className='font-mono text-4xl text-slate-100'>Enter Your Name</p>
                    <input className='my-5 w-2/4 h-10 font-mono text-black rounded-md pl-3' type="text" placeholder='Enter Your Name' onInput={e => {
                        setInput(e.target.value)
                    }}/>
                    <button className='px-3 py-1 font-mono text-slate-700 bg-cyan-400 rounded-md' onClick={() => setName(input)}>Done</button>
                </div>
                {name ?
                <div className='flex flex-row'>
                    <BirthdayCard1 />
                    <BirthdayCard2 />
                    <BirthdayCard3 />
                </div>
                : null}
            </div>    
        </>
    )
}

export default Assignment7