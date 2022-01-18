const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name or nickname? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("What's your favourite meal? ", (answer4) => {
        rl.question(
          "What's your favourite thing to eat for that mean? ",
          (answer5) => {
            rl.question("What's is your favourite sport? ", (answer6) => {
              rl.question("What is your superpower? ", (answer7) => {
                console.log(
                  `${answer1} really enjoys ${answer2} while listening to ${answer3}, favourite meal is ${answer4}, specifically ${answer5}. Favourite sport is ${answer6} and you shouldn't argue that ${answer7} is the greatest superpower to have.`
                );
                rl.close();
              });
            });
          }
        );
      });
    });
  });
});
