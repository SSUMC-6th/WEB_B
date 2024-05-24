import React,{useState,useEffect,useCallback} from 'react'
import NavBar from "../components/NavBar"
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { Link, Route } from 'react-router-dom';
import MovieDetailPage from './MovieDetailPage';
import Movie from '../components/Movie'

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
/*const Movie = styled.div`
margin: 10px;
text-align: center;
color : white;

`*/
const MoviePoster = styled.img`
  width: 350px;
  height: auto;
  cursor: pointer; /* 포스터를 클릭 가능하도록 설정 */
`;
const Loading = styled.div`
color : white;
`


function MainPage() {
    const [loading,setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [movieList, setMovieList] = useState([]);

 const handleInputChange = (event) => {
      setSearchInput(event.target.value);
  };

  const debouncedHandleSearch = useCallback(
  debounce((searchInput) => {
    if(searchInput){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjE2ZDFjMTU5MTRlMzJkMDM2MmE4ZmU3Y2NkMTI0YyIsInN1YiI6IjY2MzNkZTI5ZTkyZDgzMDEyYWQyMmI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8-rV08-b4ctQHDXtx3qfOYJriDVYunUA6iZkeFme-k'
      }
    };
    setLoading(true);
     // 검색어를 URL에 추가
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}`;
 
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
      setLoading(false); 
    })
    .catch(err => {
      console.error("데이터 가져오기 오류:", err);
      setMovieList([]);
      setLoading(false); 
    });}
  }, 500),
  [])


  // 검색어(query)가 변경될 때마다 debounce된 함수 호출
  useEffect(() => {
    debouncedHandleSearch(searchInput);
    // 컴포넌트가 unmount 되거나 query가 변경될 때마다 cleanup 함수 호출
    return debouncedHandleSearch.cancel;
  }, [searchInput, debouncedHandleSearch]);

  return (
    <PageContainer>
    <NavBar />
    <Text>환영합니다</Text>
    <Search>🎥Find your movies!</Search>
    <SearchBar>
      <SearchingInput
        type = 'text'
        value = {searchInput}
        onChange = {handleInputChange}
        placeholder = 'Search'/>
        <SearchButton onClick = {debouncedHandleSearch}>검색</SearchButton>
      </SearchBar>
      {loading ? <Loading>데이터를 받아오는 중입니다.</Loading>:
      <ContentBox>
        {movieList.map((movie) => (
          <Movie key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_avg={movie.vote_average}
          release_date={movie.release_date}
          overview={movie.overview}/>
          ))}
       </ContentBox>}
    </PageContainer>
  )
}

export default MainPage;