"use client";
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const HandleSubmit = (event) => {
        event.preventDefault()
        const keyboard = searchRef.current.value
        router.push(`/search/${keyboard}`)
    }
    return(
        <div className="relative">
            <input ref={searchRef} placeholder="cari anime..." className="w-full p-1 rounded"/>
                <button onClick={HandleSubmit} className="absolute end-2 top-1">
                <MagnifyingGlass size={24} />
                </button>
        </div>

    )
}

export default InputSearch