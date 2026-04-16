import { BiError } from "react-icons/bi"

export default function ErrorLoadingCard({errormsg}:{
    errormsg:string
}) {
  return (
    <div className="w-full bg-secondary min-h-100 rounded-xl border border-primary flex items-center  gap-4 justify-center">
        <BiError className="size-6 text-red-400"/>
    <h1 className="font-medium text-xl text-red-400">{errormsg}</h1>
    </div>
  )
}