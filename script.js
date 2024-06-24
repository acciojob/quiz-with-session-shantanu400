//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];








function saveProgress(){
	let progress=[];
	for(let i=0;i<questions.length;i++){
		let selectedOption=document.querySelector(`input[name="question-${i}"]:checked`);
		progress[i]=selectedOption? selectedOption.value:null;
	}
	sessionStorage.setItem('progress',JSON.stringify(progress));
}


function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
	choiceElement.addEventListener('change', saveProgress);
    }
    questionsElement.appendChild(questionElement);
  }

}

let questionsElement = document.getElementById('questions');
renderQuestions();

document.getElementById('submit').addEventListener('click',function(){
	// alert('wah kya baat hai!!!!...')
let userAnswers = JSON.parse(sessionStorage.getItem('progress')) || [];
	 let score=0;
    for (let j = 0; j < question.choices.length; j++) {
	 const question = questions[i];
      const choice = question.choices[j];
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
		  score++;
      }
		else{
			continue;
		}
		localStorage.setItem("score", score);
		}
})
