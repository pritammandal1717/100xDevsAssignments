import { nameAtom } from "../store/api/data"
import { useRecoilValue } from 'recoil'

function BirthdayCard2() {
  const name = useRecoilValue(nameAtom)
  return (
    <div className="mt-5 ml-5 w-full bg-rose-400 p-5 rounded-md">
        <h1 className="w-full text-white font-mono">Sending birthday love, {name}!</h1>
    </div>
  )
}

export default BirthdayCard2