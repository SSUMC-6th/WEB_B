import React,{useState} from 'react'
import NavBar from "../Components/NavBar"
import styled from 'styled-components'

const PageContainer=styled.div`
display : flex;
flex-direction:column;

`


const Text = styled.div`
display : flex;
background-color : black;
color : white;
align-items : center;
justify-content : center;
height : 300px;
text-align : center;
margin-top : 30px;
font-size : 30px;
`
const Search = styled.div`
display:flex;
color : white;
align-items : center;
justify-content : center;
margin-top : 40px;
font-size : 30px;
`
const SearchBar = styled.div`
display : flex;
justify-content : center;
`
const SearchingInput= styled.input`
 width: 500px;
    height: 47.4px;
    border-radius: 50px;
    background: white;
    padding-left : 20px;
    margin-top : 60px;
    font-size : 23px;
    text-align : center;
    font-style: normal;
    font-weight: 400;

    border:none;
    &::placeholder{
        font-size : 23px;
        }
    &:focus {
            outline: none; 
        
    }
    position : absolute;
`
const SearchButton = styled.button`


cursor: pointer;

display : flex;
`

function MainPage() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
      setQuery(event.target.value);
  };

  const handleSearch = () => {
      console.log('검색어:', query);
  }

  return (
    <PageContainer>
    <NavBar />
    <Text>환영합니다</Text>
    <Search>🎥Find your movies!</Search>
    <SearchBar>
      <SearchingInput
        type = 'text'
        value = {query}
        onChange = {handleInputChange}
        placeholder = 'Search'/>
        <SearchButton onClick = {handleSearch}/>
      </SearchBar>
    </PageContainer>
  )
}

export default MainPage;