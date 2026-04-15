import { twMerge } from "tailwind-merge"
export default function ContainerWrapper({children,className}:{
    children:React.ReactNode,
    className?:string
}) {
  return (
    <div className={twMerge("max-w-7xl mx-auto px-4 lg:px-2",className)}>
        {children}
    </div>
  )
}
