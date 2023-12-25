/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react"

const GameInfo = ({title, content}:any) => {
  return (
    <div className="p-4">
              <p className="text-slate-500 dark:text-gray-500 text-sm">{title}</p> 
              <div className="flex mt-1 flex-wrap">
              {content.map((ctx:any) => (
               <Fragment key={ctx.id}><p style={{ textDecoration: 'underline', textDecorationColor: 'gray' }} className="text-sm">{ctx.platform?.name? ctx.platform.name : ctx.name},</p> <span className="w-1"></span></Fragment>
              ))}
              </div>
    </div>
  )
}

export default GameInfo