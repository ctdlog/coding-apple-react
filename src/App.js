/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "서울 여행 코스",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 글추가() {
    var writeCopy = [...글제목];
    writeCopy.unshift(입력값);
    글제목변경(writeCopy);
  }

  function 따봉추가(i) {
    var newArray = [...따봉];
    newArray[i] += 1;
    따봉변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  따봉추가(i);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h3>

            <p>4월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            글추가();
          }}
        >
          저장
        </button>
      </div>

      <button onClick={() => modal변경(!modal)}>열고 닫기</button>

      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}

      <Profile />
    </div>
  );
}

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "Kim", age: 30 };
//   }

//   changeName = () => {
//     this.setState({ name: "Park" });
//   };

//   render() {
//     return (
//       <div>
//         <h3> 저는 {this.state.name} 입니다 </h3>
//         <button onClick={this.changeName}> 버튼 </button>
//       </div>
//     );
//   }
// }

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
