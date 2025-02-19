const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true
let score = 0;
let questionCounter = 0;
let availableQuestions = []; 

let questions = [
    {
        question: 'Which keyword is used to define a class in Java?',
        choice1: 'class',
        choice2: 'Class',
        choice3: 'define',
        choice4: 'struct',
        answer: 1,
    },
    {
        question: 'Which of the following is used to take user input in Java?',
        choice1: 'Scanner',
        choice2: 'InputReader',
        choice3: 'BufferedInput',
        choice4: 'UserInput',
        answer: 1,
    },
    {
        question: 'What is the default value of an uninitialized int variable in Java?',
        choice1: '0',
        choice2: 'null',
        choice3: 'undefined',
        choice4: 'NaN',
        answer: 1,
    },
    {
        question: 'Which method is called when an object is created in Java?',
        choice1: 'init()',
        choice2: 'constructor()',
        choice3: 'new()',
        choice4: 'finalize()',
        answer: 2,
    },
    {
        question: 'Which of these data types is used to store a single character in Java?',
        choice1: 'char',
        choice2: 'String',
        choice3: 'Character',
        choice4: 'ch',
        answer: 1,
    },
    {
        question: 'Which of the following is not a primitive data type in Java?',
        choice1: 'int',
        choice2: 'double',
        choice3: 'boolean',
        choice4: 'String',
        answer: 4,
    },
    {
        question: 'What will be the output of: System.out.println(10 / 0);',
        choice1: 'Infinity',
        choice2: '0',
        choice3: 'ArithmeticException',
        choice4: 'NaN',
        answer: 3,
    },
    {
        question: 'Which keyword is used to create a subclass in Java?',
        choice1: 'super',
        choice2: 'this',
        choice3: 'extends',
        choice4: 'inherits',
        answer: 3,
    },
    {
        question: 'Which package is automatically imported in every Java program?',
        choice1: 'java.util',
        choice2: 'java.io',
        choice3: 'java.lang',
        choice4: 'java.net',
        answer: 3,
    },
    {
        question: 'Which operator is used for comparison in Java?',
        choice1: '=',
        choice2: '==',
        choice3: '!=',
        choice4: '===',
        answer: 2,
    },
    {
        question: 'What is the size of an int variable in Java?',
        choice1: '2 bytes',
        choice2: '4 bytes',
        choice3: '8 bytes',
        choice4: 'Depends on system',
        answer: 2,
    },
    {
        question: 'Which keyword is used to prevent method overriding in Java?',
        choice1: 'static',
        choice2: 'final',
        choice3: 'const',
        choice4: 'protected',
        answer: 2,
    },
    {
        question: 'Which loop executes at least once regardless of the condition?',
        choice1: 'for',
        choice2: 'while',
        choice3: 'do-while',
        choice4: 'foreach',
        answer: 3,
    },
    {
        question: 'What is used to handle exceptions in Java?',
        choice1: 'try-catch',
        choice2: 'throw',
        choice3: 'throws',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'What is the parent class of all Java classes?',
        choice1: 'Object',
        choice2: 'Main',
        choice3: 'SuperClass',
        choice4: 'Class',
        answer: 1,
    },
    {
        question: 'What is the result of 5 + "5" in Java?',
        choice1: '"55"',
        choice2: '10',
        choice3: 'Error',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'Which keyword is used to stop the execution of a loop in Java?',
        choice1: 'continue',
        choice2: 'break',
        choice3: 'stop',
        choice4: 'exit',
        answer: 2,
    },
    {
        question: 'What does JVM stand for?',
        choice1: 'Java Virtual Machine',
        choice2: 'Java Variable Memory',
        choice3: 'Java Verified Mode',
        choice4: 'Java Virtual Method',
        answer: 1,
    },
    {
        question: 'Which of the following access modifiers allows visibility in the same package?',
        choice1: 'private',
        choice2: 'public',
        choice3: 'protected',
        choice4: 'default',
        answer: 4,
    },
    {
        question: 'Which of the following statements about Java interfaces is true?',
        choice1: 'Interfaces can have constructors',
        choice2: 'Interfaces can have default methods',
        choice3: 'Interfaces can extend classes',
        choice4: 'Interfaces cannot be implemented by classes',
        answer: 2,
    },
    {
        question: 'How do you declare a constant variable in Java?',
        choice1: 'final',
        choice2: 'const',
        choice3: 'constant',
        choice4: 'var',
        answer: 1,
    },
    {
        question: 'What is the default access modifier of a class in Java?',
        choice1: 'public',
        choice2: 'private',
        choice3: 'protected',
        choice4: 'default (package-private)',
        answer: 4,
    },
    {
        question: 'What is the output of Math.floor(7.8)?',
        choice1: '8.0',
        choice2: '7.0',
        choice3: '7.8',
        choice4: 'Error',
        answer: 2,
    },
    {
        question: 'What does the "super" keyword do in Java?',
        choice1: 'Calls the parent class constructor',
        choice2: 'Creates an instance of the parent class',
        choice3: 'Deletes the child class',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'Which data structure follows the LIFO principle?',
        choice1: 'Queue',
        choice2: 'Array',
        choice3: 'Stack',
        choice4: 'LinkedList',
        answer: 3,
    },
    {
        question: 'Which method is called automatically when an object is garbage collected?',
        choice1: 'finalize()',
        choice2: 'destroy()',
        choice3: 'delete()',
        choice4: 'cleanup()',
        answer: 1,
    },
    {
        question: 'What is the output of 2 + 3 + "Java" in Java?',
        choice1: '5Java',
        choice2: '23Java',
        choice3: 'Java5',
        choice4: 'Error',
        answer: 1,
    },
    {
        question: 'Which of these collections does not allow duplicate elements?',
        choice1: 'List',
        choice2: 'Set',
        choice3: 'Queue',
        choice4: 'Map',
        answer: 2,
    },
    {
        question: 'What is the default value of a boolean variable in Java?',
        choice1: 'true',
        choice2: 'false',
        choice3: 'null',
        choice4: '0',
        answer: 2,
    }
];
const CORRECT_BONUS = 2;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })
};

startGame();
