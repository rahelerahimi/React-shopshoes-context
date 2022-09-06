import React ,{usecontext} from 'react'
const Appcontext=React.createContext()
const Appprovider=({children})=>{
  return (
<>
<Appcontext.Provider value={"hello"} >{children}</Appcontext.Provider>

</>
  )
}

export const UseGlobalcontent=()=>{
    return usecontext(Appcontext)
}

export{Appcontext,Appprovider}