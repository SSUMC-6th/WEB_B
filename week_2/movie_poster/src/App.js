import Movies from "./movies";
import "./reset.css";
function App() {
    // App 함수형 컴포넌트
    return (
        <div className="App">
            <Movies /> /* App 컴포넌트가 Movies 컴포넌트를 자식으로 포함하고
            있다는 것 */
        </div>
    );
}

export default App;
