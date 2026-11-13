import { useState } from 'react'

function Button() {
  // let clicked = 0; // 매 렌더링마다 초기화가 되어버림.

  // 첫 값 : getter 변수, 두번째 값 : setter 함수
  const[clicked, setClicked] = useState(100);  // 새 상탯값을 정의하고, 첫 값으로 100 지정

  const handleClick = () => {
    console.log("clicked");  // 브라우저 개발자 콘솔에 출력
    // clicked++;
    // setClicked(clicked + 1);  // 두번 호출되어도, 값 반영은 1번
    // setClicked(clicked + 1);

    setClicked((prev) => prev + 1);  // prev : 이전 값을 가져옴
    setClicked((prev) => prev + 1);
  };

  return <button onClick={handleClick}>클릭 {clicked}번</button>;
}

function App() {
  return <div>안녕 리액트 <Button /><Button /></div>;
}

export default App
