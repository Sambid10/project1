import { RefObject, useEffect } from 'react'

export default function useOutsideClick({
    handler,
    ref,
    btnref
}: {
    handler: () => void,
    ref: RefObject<HTMLDivElement | null>,
    btnref: RefObject<HTMLButtonElement | null>
}) {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            const target = e.target as Node

            if (
                !ref.current ||
                ref.current.contains(target) ||
                (btnref.current && btnref.current.contains(target))
            ) {
                return
            }

            handler()
        }

        window.addEventListener("mousedown", listener)
        window.addEventListener("touchstart", listener)

        return () => {
            window.removeEventListener("mousedown", listener)
            window.removeEventListener("touchstart", listener)
        }
    }, [ref, btnref, handler])
}