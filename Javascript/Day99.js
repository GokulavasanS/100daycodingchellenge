 /* Design an object called Quiz that simulates a multiple-choice quiz. The Quiz object should have the following properties and methods:

Properties:

questions: An array to store question objects.
score: A counter to keep track of the user's score.

Methods:

addQuestion(question, options, correctOptionIndex): Accepts a question string, an array of options, and the index of the correct option. Adds this question to the questions array.
displayQuestion(index): Displays the question and options for a given index.
checkAnswer(index, userAnswer): Accepts a question index and the user's selected option index. If the user's answer matches the correct answer, increase the score by 1.
displayScore(): Displays the user's score at the end of the quiz.
Create at least 3 question objects and add them to the Quiz. 
Then, simulate the quiz by displaying each question, prompting the user for an answer,
 checking the answer, and displaying the final score. */

const Quiz = {
    questions: [],
    score : 0,

    addQuestion(question,options,correctOptionIndex){
        this.questions.push({question,options,correctOptionIndex})
    },

    displayQuestion(index){
        let questionObj = this.questions[index];
        console.log(questionObj.question);
        questionObj.options.forEach((opt,ids) => {
            console.log(`${ids+1}:${opt}`); // "ids + 1" for the options starting from 1 not 0
        })
    },

    checkAnswer(index,userAnswer){
        let questionObj = this.questions[index]
        if(userAnswer === questionObj.correctOptionIndex){
            this.score++
        }
    },
    displayScore(){
        console.log(`Your Score is ${this.score}/${this.questions.length}`)
    }
}

Quiz.addQuestion( "What is the largest country in the world?",
    ["Russia","China","India","Japan"],
    1)
Quiz.addQuestion("What is the hottest continent on Earth?",
    ["Asia","Africa","Antarctica","America"],
    2)
Quiz.addQuestion("Which country has the largest number of internet users in the world?",
    ["Brazil","India","China","USA"],
    3)

for(let i=0;i<Quiz.questions.length;i++){
    Quiz.displayQuestion(i)
    const userAnswer = parseInt(prompt("Enter the answer: "))
    Quiz.checkAnswer(i,userAnswer)
}

Quiz.displayScore()
