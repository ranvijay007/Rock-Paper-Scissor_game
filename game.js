const game = () => {
  let playerScore = 0;
  let botScore = 0;
  const start = () => {
    const startButton = document.querySelector(".start button");
    const startScrn = document.querySelector(".start");
    const matchScrn = document.querySelector(".match");

    startButton.addEventListener("click", () => {
      startScrn.classList.add("fadeOut");
      matchScrn.classList.add("fadeIn");
    });
  };
  const play = () => {
    const botOption = ["rock", "paper", "scissors"];
    const playerHand = document.querySelector(".player-hand");
    const botHand = document.querySelector(".bot-hand");
    const options = document.querySelectorAll(".option button");
    const hand = document.querySelectorAll(".hand img");

    hand.forEach((hands) => {
      hands.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    options.forEach((option) => {
      option.addEventListener("click", function () {
        playerHand.src = "./assets/rock.png";
        botHand.src = "./assets/rock.png";

        const botNum = Math.floor(Math.random() * 3);
        const botChoice = botOption[botNum];
        setTimeout(() => {
          compareHand(this.textContent, botChoice);
          playerHand.src = "./assets/" + this.textContent + ".png";
          botHand.src = "./assets/" + botChoice + ".png";
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        botHand.style.animation = "shakeBot 2s ease";
      });
    });
  };

  const compareHand = (playerHand, botHand) => {
    const winner = document.querySelector(".winner");
    if (playerHand == botHand) {
      winner.textContent = "Match Tie";
      return;
    }
    if (playerHand == "rock") {
      if (botHand == "paper") {
        winner.textContent = "Bot Wins";
        botScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Wins";
        playerScore++;
        updateScore();
        return;
      }
    }
    if (playerHand == "paper") {
      if (botHand == "scissors") {
        winner.textContent = "Bot Wins";
        botScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Wins";
        playerScore++;
        updateScore();
        return;
      }
    }
    if (playerHand == "scissors") {
      if (botHand == "rock") {
        winner.textContent = "Bot Wins";
        botScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Wins";
        playerScore++;
        updateScore();
        return;
      }
    }
  };

  const updateScore = function () {
    const player = document.querySelector(".player-score p");
    const bot = document.querySelector(".bot-score p");
    //console.log(player);
    player.textContent = playerScore;
    bot.textContent = botScore;
  };

  const exit = () => {
    const startScrn = document.querySelector(".start");
    const matchScrn = document.querySelector(".match");
    const exitBtn = document.querySelector(".exit");
    exitBtn.addEventListener("click", () => {
      startScrn.classList.add("fadeIn");
      matchScrn.classList.add("fadeOut");
    });
  };
  start();
  play();
  //exit();
};
game();
