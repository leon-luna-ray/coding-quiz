// Questions array
const questions = [
  {
    question: 'Which language is used to mark-up webpages?',
    choices: ['HTML', 'CSS', 'Javascript', 'SQL'],
    answer: 'HTML',
  },
  {
    question: 'Which of these is a CSS framework?',
    choices: ['Sass', 'jQuery', 'Bootstrap', 'Ruby'],
    answer: 'Bootstrap',
  },
  {
    question: 'Which type of brackets are used in a Javascript array?',
    choices: ['()', '{}', '<>', '[]'],
    answer: '[]',
  },
  {
    question: 'whatIsThisCalled?',
    choices: ['Camel case', 'A function', 'Javascript', 'Bad grammar'],
    answer: 'Camel case',
  },

  // blank question added to solve last index issue to get to game over screen correctly need to find a better solution
  {
    question: '',
    choices: [],
    answer: '',
  },
];

export default questions;
