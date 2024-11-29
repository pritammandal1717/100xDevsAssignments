import { useState } from "react"

const loremWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet", ".", "consectetur", "adipiscing",
    "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
    "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "."
];

function Assignment4() {

    const [noOfWords, setNoOfWords] = useState(0);
    const [paragraph, setParagraph] = useState("");

    function generatePara() {
        let output = '';
        for (let i = 0; i < noOfWords; i++) {
            output += loremWords[Math.floor(Math.random() * loremWords.length)];
            if (i < noOfWords - 1) {
                output += ' ';
            }
        }
        //console.log(output)
        return output
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="m-5 text-5xl font-semibold">
                Para Generator
            </div>
            <div className="w-full my-5 flex flex-row justify-center items-center">
                <div className="w-2/4">
                    <input className="h-20 w-full border px-3 text-lg" type="number" placeholder="Enter Number of Words" onChange={e => setNoOfWords(e.target.value)} />
                </div>
                <div className="w-40">
                    <button className="h-20 w-full ml-5 rounded-md bg-black text-white text-xl  " onClick={() => setParagraph(generatePara())}>Generate</button>
                </div>
            </div>
            <div className="w-2/4 p-5 rounded-md bg-slate-200 text-center">
                {paragraph? paragraph:"Enter Number of Words to Generate Paragraph"}
            </div>
        </div>
    )
}

export default Assignment4