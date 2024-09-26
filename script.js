let computerScore = 0;
        let userScore = 0;

        function playGame(userChoice) {
            let choices = ["rock", "paper", "scissor"];
            let computerChoice = choices[Math.floor(Math.random() * 3)];

            document.getElementById("comp_choice").innerHTML =
                ` Computer choose <span> ${computerChoice.toUpperCase()} </span>`;

            document.getElementById("user_choice").innerHTML =
                ` You choose <span> ${userChoice.toUpperCase()} </span>`;

            let result = checkWinner(userChoice, computerChoice);

            document.getElementById("result").innerHTML = result.message;
            document.getElementById("result").style.cssText = result.style;

            if (result.winner === "user") {
                userScore++;
            } else if (result.winner === "computer") {
                computerScore++;
            }

            document.getElementById("computer_score").innerHTML = computerScore;
            document.getElementById("user_score").innerHTML = userScore;
        }

        function checkWinner(userChoice, computerChoice) {
            let choicesObject = {
                'rock': {
                    'rock': 'draw',
                    'scissor': 'win',
                    'paper': 'lose'
                },
                'scissor': {
                    'rock': 'lose',
                    'scissor': 'draw',
                    'paper': 'win '
                },
                'paper': {
                    'rock': 'win',
                    'scissor': 'lose',
                    'paper': 'draw'
                }
            };

            let result = choicesObject[userChoice][computerChoice];

            switch (result) {
                case 'win':
                    return { message: "YOU WIN", style: "background-color: #cefdce; color: #689f38", winner: "user" };
                case 'lose':
                    return { message: "YOU LOSE", style: "background-color: #ffdde0; color: #d32f2f", winner: "computer" };
                default:
                    return { message: "DRAW", style: "background-color: #e5e5e5; color: #808080", winner: null };
            }
        }