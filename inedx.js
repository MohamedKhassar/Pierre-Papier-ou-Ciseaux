let play_btn = document.querySelector(".play-btn");
let computer_score = 0;
let player_score = 0;
play_btn.addEventListener("click", () => {
  let player = document.querySelector("#player").value;
  document.querySelector(".loading").style.display = "block";
  document.querySelector(".result").style.columnGap = "100px";
  let arr_game = ["rock", "paper", "scissors"];
  let random=Math.floor(Math.random() * arr_game.length)
  let game = [...arr_game][random];
  if (player !== "") {
    setTimeout(() => {
      // document.querySelector(".loading").src = "Animation.gif";
      // document.querySelector(".loading").src=""
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".computer-result").src = `${game}.png`;
      document.querySelector(".computer-result").style.display = "block";
      document.querySelector(".player-result").src = `${player}.png`;
      document.querySelector(".player-result").style.display = "block";
      document.querySelector(".result").style.columnGap = "300px";

      if (
        (player === "rock" && game === "paper") ||
        (player === "scissors" && game === "rock") ||
        (player === "paper" && game === "scissors")
      ) {
        computer_score++;
        document.querySelector("#score_computer").innerHTML = computer_score;
      } else if (
        (player === "paper" && game === "rock") ||
        (player === "rock" && game === "scissors") ||
        (player === "scissors" && game === "paper")
      ) {
        player_score++;
        document.querySelector("#score_player").innerHTML = player_score;
      }
      Toastify({
        text: `Computer Choose ${game}`,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
          text: "capitalize",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      Toastify({
        text: `You Choose ${player}`,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      if (player === game) {
        Toastify({
          text: "Draw",
          duration: 3000,
          // destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }
    }, "3000");
  }
  else {
    Toastify({
      text: "choose something",
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
    if (player_score>5 || computer_score>5) {
      player_score=0
       computer_score=0
      if (player_score>5) {
        Toastify({
          text: "You Win The Game",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }else{
        Toastify({
          text: "You Lose The Game",
          duration: 3000,
          // destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }
      
  } 
  
  console.log(player);
  console.log(random);
});


var doc=document.querySelector("div").innerHTML
console.log(doc);