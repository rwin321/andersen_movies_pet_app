import { useState } from "react"
import { TextField } from "@material-ui/core"

const Search = () => {
    const [type, setType] = useState(0);

    return (
        <div>
           <TextField
            style={{flex:1}}
            className='searchBox'
            label="Search"
            variant='filled'

           />
        </div>
    )
}

export default Search;