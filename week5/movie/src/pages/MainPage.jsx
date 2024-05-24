import React,{useState,useEffect} from 'react'
import NavBar from "../components/NavBar"
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
    //position : absolute;
`
const SearchButton = styled.button`
height : 30px;
margin-top : 75px;
margin-left : 30px;
cursor: pointer;
display : flex;
`
const ContentBox = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  gap : 20px;

`
const Movie = styled.div`
margin: 10px;
text-align: center;
color : white;
img {
    width: 350px; /* 원하는 크기로 조절하세요 */
    height: auto; /* 가로 세로 비율 유지 */
  }
`

function MainPage() {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleInputChange = (event) => {
      setQuery(event.target.value);
  };

  const handleSearch = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjE2ZDFjMTU5MTRlMzJkMDM2MmE4ZmU3Y2NkMTI0YyIsInN1YiI6IjY2MzNkZTI5ZTkyZDgzMDEyYWQyMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8-rV08-b4ctQHDXtx3qfOYJriDVYunUA6iZkeFme-k'
      }
    };
     // 검색어를 URL에 추가
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      if (data.results) {
        setMovieList(data.results);
      } else {
        // 오류나 빈 응답 처리
        console.error("검색 결과가 없거나 오류가 발생했습니다.");
        setMovieList([]);
      }
    })
    .catch(err => {
      console.error("데이터 가져오기 오류:", err);
      setMovieList([]);
    });
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
        <SearchButton onClick = {handleSearch}>검색</SearchButton>
      </SearchBar>
      <ContentBox>
        {movieList.map((movie) => (
          <Movie key = {movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        
            <div>{movie.title}</div>
          </Movie>))}
       </ContentBox>
    </PageContainer>
  )
}

export default MainPage;