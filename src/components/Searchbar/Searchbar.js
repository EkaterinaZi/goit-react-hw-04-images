import {useState} from "react";
import {IoSearch} from 'react-icons/io5'
import {SearchbarTitle, SearchForm, SearchFormButton, SearchInput} from "components/Searchbar/Searchbar.styled"

const Searchbar = ({onSubmit}) => {
  const [input, setInput] = useState('')
      
const handleNameChange = e => {
    setInput(e.currentTarget.value.toLowerCase())
}
const handleNameSubmit = e => {
    e.preventDefault();
    if(input.trim() === ''){
        alert('Enter data')
        return
    }
    onSubmit(input);
    setInput('')
}

    return ( 
<SearchbarTitle>
<SearchForm onSubmit={handleNameSubmit}>
<SearchFormButton>
<IoSearch />Find
</SearchFormButton>
<SearchInput onChange={handleNameChange}
value={input}
name="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
</SearchForm>
</SearchbarTitle>   

    );
}




export default Searchbar;