import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const choice = {
  scissors: {
    name: "Scissors",
    you: "/images/you-scissors.png",
    computer: "/images/computer-scissors.png",
  },
  rock: {
    name: "Rock",
    you: "/images/you-rock.png",
    computer: "/images/computer-rock.png",
  },
  paper: {
    name: "Paper",
    you: "/images/you-paper.png",
    computer: "/images/computer-paper.png",
  },
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null); // "win", "lose", "tie"

  // 승패 판정 함수
  const judgement = (user, computer) => {
    if (user === computer) {
      return "tie"; // 비김
    } else if (
      (user === "scissors" && computer === "paper") ||
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock")
    ) {
      return "win"; // 사용자 승리
    } else {
      return "lose"; // 사용자 패배
    }
  };

  const play = (userChoice) => {
    console.log("선택됨:", userChoice);

    // 컴퓨터 랜덤 선택
    const choiceKeys = Object.keys(choice);
    const computerSelected = choiceKeys[Math.floor(Math.random() * choiceKeys.length)];

    // 승패 판정
    const gameResult = judgement(userChoice, computerSelected);

    // 상태 업데이트
    setUserChoice(userChoice);
    setComputerChoice(computerSelected);
    setResult(gameResult);

    console.log("결과:", gameResult);
  };

  return (
    <div className="l_wrapper">
      <Box
        player="YOU"
        imgSrc={userChoice ? choice[userChoice].you : "/images/you-reset.png"}
        result={result === "win" ? "승리!" : result === "lose" ? "패배!" : result === "tie" ? "무승부!" : "게임 시작"}
        resultType={result}
        onPlay={play}
        showButtons={true}
      />
      <Box
        player="COMPUTER"
        imgSrc={computerChoice ? choice[computerChoice].computer : "/images/computer-reset.jpeg"}
        result={result === "win" ? "패배!" : result === "lose" ? "승리!" : result === "tie" ? "무승부!" : "게임 시작"}
        resultType={result === "win" ? "lose" : result === "lose" ? "win" : result}
        onPlay={play}
        showButtons={false}
      />
    </div>
  );
}

export default App;
