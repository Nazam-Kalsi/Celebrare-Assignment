import React from 'react'

function Button({children,oc=()=>{},className=''}) {
  return (
    <button className={`${className} py-2 px-4 rounded-md border mx-3 hover:bg-slate-200`} onClick={oc}>{children}</button>
  )
}

export default Button
