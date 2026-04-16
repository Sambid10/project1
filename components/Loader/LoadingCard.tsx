import React from "react"

export default function LoadingCard() {
  return (
    <div className="w-full bg-secondary min-h-100 rounded-xl border border-primary flex flex-col animate-pulse">

      <div className="py-4 px-8 border-b border-primary flex items-center justify-between">
        <div className="h-5 bg-stone-600 rounded w-1/3" />
        <div className="h-5 bg-stone-600 rounded w-1/4" />
      </div>

      <div className="flex items-center justify-between p-8 flex-1">

        <div className="flex flex-col gap-6">

          <div className="flex gap-4 items-center">
            <div className=" bg-stone-600 rounded" />

            <div className="flex flex-col gap-3">
              <div className="h-16 bg-stone-600 rounded w-40" />
              <div className="h-5 bg-stone-600 rounded w-32" />
              <div className="h-4 bg-stone-600 rounded w-24" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-5 bg-stone-600 rounded w-40" />
            <div className="h-4 bg-stone-600 rounded w-28" />
          </div>

        </div>

        <div className="flex flex-col gap-4 w-70">

          <div className="h-6 bg-stone-600 rounded w-full" />
          <div className="h-6 bg-stone-600 rounded w-full" />
          <div className="h-6 bg-stone-600 rounded w-full" />
          <div className="h-6 bg-stone-600 rounded w-full" />
          <div className="h-6 bg-stone-600 rounded w-full" />

        </div>

      </div>
    </div>
  )
}