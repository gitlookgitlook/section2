import React from "react";

const Box = (props) => {
  // 결과에 따른 테두리 색상
  const getBorderColor = () => {
    switch (props.resultType) {
      case "win":
        return "blue";
      case "lose":
        return "red";
      case "tie":
        return "green";
      default:
        return "#ddd";
    }
  };

  return (
    <div className="box_wrapper" style={{ borderColor: getBorderColor() }}>
      <h1>{props.player}</h1>
      <div className="img_wrapper">
        <img src={props.imgSrc} alt="게임 이미지" />
      </div>
      <h2>{props.result}</h2>

      <div
        className="btns_wrapper"
        style={{
          opacity: props.showButtons ? 1 : 0,
          pointerEvents: props.showButtons ? "auto" : "none",
        }}
      >
        <button onClick={() => props.onPlay("scissors")}>✌🏼</button>
        <button onClick={() => props.onPlay("rock")}>✊🏼</button>
        <button onClick={() => props.onPlay("paper")}>✋🏼</button>
      </div>
    </div>
  );
};

export default Box;
