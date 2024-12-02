import { nameAtom } from "../store/api/data"
import { useRecoilValue } from 'recoil'


function BirthdayCard1() {
    const name = useRecoilValue(nameAtom)
  return (
    <div className="mt-5 w-full bg-cyan-500 p-5 rounded-md">
        <h1 className="w-full text-white font-mono">Wishing you a fantastic day, {name}!</h1>
    </div>
  )
}

export default BirthdayCard1