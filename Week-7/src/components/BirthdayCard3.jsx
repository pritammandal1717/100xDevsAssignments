import { nameAtom } from "../store/api/data"
import { useRecoilValue } from 'recoil'

function BirthdayCard3() {
  const name = useRecoilValue(nameAtom)
  return (
    <div className="mt-5 ml-5 w-full bg-violet-500 p-5 rounded-md">
        <h1 className="w-full text-white font-mono">Cheers to another year, {name}!</h1>
    </div>
  )
}

export default BirthdayCard3