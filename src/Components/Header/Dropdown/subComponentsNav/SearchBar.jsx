import react,{useState , useRef,useEffect} from 'react'

import SearchDrop from './SearchDrop'
import {BiBody, BiSearch} from 'react-icons/bi'

 

const SearchBar =()=>{
    const [searchResult,setSearchResult] = useState([]);
    const [isFocused,setFocused] = useState(false);
    const [input,setInput] = useState("")
    let menuRef = useRef();
    useEffect(()=>{
  
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
           
           setFocused(false);
            
          }
         
        }
        document.addEventListener('mousedown',handler,true)
        return ()=>{
          document.removeEventListener('mousedown',handler)
        }
      })
    
    const fetchData =(value) =>{
    
  

        fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
        .then(json=>{
            console.log(json)
                const result = json.filter((user)=>{
                    return value && 
                    user &&
                     user.name &&
                      user.name.toLowerCase().includes(value)
                })
            console.log(result)
            setSearchResult(result)
        });
        
    }
    const handleChange =(value)=>{
        setInput(value);
        fetchData(value);
    }

return ( 
<div>
    <div className="w-full flex items-center">
        <button> <div className='bg-[#ffc220] rounded-full p-1.5 h-8 w-8 flex items-center absolute right-1 -mt-4  z-30'>
    <BiSearch className='text-black  h-4 w-4'/></div></button>
   
    <div className="w-full">
<input className='rounded-full py-1.5 outline-0 text-left p-4 flex-1 w-full
mx-5 focus:rounded-md focus:border-2 border-black focus:ring-black}' 

placeholder="Search everything at Walmart online and in store"
value={input}
onChange={(e)=>handleChange(e.target.value)}
onFocus={()=>setFocused(true)} 

/></div>
    </div>


<div ref={menuRef} >{isFocused && <SearchDrop result={searchResult} className='absolute z-30 w-[80%]' />}</div>
</div>
)
}
export default SearchBar