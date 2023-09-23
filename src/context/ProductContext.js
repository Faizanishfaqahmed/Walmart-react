//create a Context
// provider
//consumer
import {createContext} from 'react'

const AppContext = createContext();

const AppProvider =({children})=>{

return <AppContext>{children}</AppContext>

}
export default AppProvider