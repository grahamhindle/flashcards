import _ from 'lodash'


let decks=
{
	'1692345': {
		id:'1692345',
		name:'Arithmetic',
		questions:['q1001','q1002','q1003','q1004', 'q1005'],
		dateCreated:'',
		score: 0,
	},
}
	

let questions= {
	'q1003':{
		id:'q1003',
		questionText: '3 + 4 ',
		answerText:'The answer is 7',
		dateCreated:'',
	},
	'q1004':{
		id:'q1004',
		questionText: '12 + 6',
		answerText:'the answer is 18',
		dateCreated:'',
	},
	'q1001':{
		id:'q1001',
		questionText: '9 - 2',
		answerText:'the answer is 7',
		dateCreated:'',
	},
	'q1005':{
		id:'q1005',
		questionText: '45 + 1',
		answerText:'the answer is 46',
		dateCreated:'',
	},
	'q1002':{
		id:'q1002',
		questionText: '3 * 2',
		answerText:'the answer is 6',
		dateCreated:'',
	},
}


export function _getDecks () {
	return new Promise((res) => {
		setTimeout(() => res({...decks}), 1000)	 
	})
}
		
export function _getQuestions () {
	return new Promise((res) => {
		setTimeout(() => res({...questions}), 1000)
	})
}
export function formatNewDeck (deckName) {
	
	return {
    id: generateUID(),
    timestamp: Date.now(),
    name: deckName,
		questions: [],
		score:0,
	}
}
	
  
export function _addDeck (deckName) {
  return new Promise((res, rej) => {
    
    
    const formattedDeck = formatNewDeck(deckName);
    
    setTimeout(() => {
      decks = {
        ...decks,
        [formattedDeck.id]: formattedDeck
      }
			
      res(formattedDeck)
    }, 500)
  })
}


export function formatNewQuestion (  questionText, answerText ) {
	return {

	  id: generateUID(),
	  timestamp: Date.now(),
	  questionText: questionText,
	  answerText: answerText,
	}
  }
  
  export function _saveNewQuestion (questionText,answerText,id) {
	return new Promise((res, rej) => {
	  const formattedQuestion = formatNewQuestion(questionText,answerText)
	  
	  setTimeout(() => {
		questions = {
		  ...questions,
		  [formattedQuestion.id]: formattedQuestion
		}
		
		res(formattedQuestion)
	  }, 500)
	})
  }
  


export function generateUID () {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }



export default decks
		


		

 