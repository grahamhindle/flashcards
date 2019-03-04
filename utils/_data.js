import _ from 'lodash'


let decks=
{
	'10001': {
		id:'10001',
		name:'my deck1',
		questions:['q1001','q1002'],
		dateCreated:'',
	},
	'10002': {
		id:'10002',
		name:'my deck2',
		questions:['q1001','q1003'],
		dateCreated:'',
	},
	'10003': {
		id:'10003',
		name:'my deck3',
		questions:['q1002','q1004'],
		dateCreated:'',
	},
	'10004': {
		id:'10004',
		name:'my deck4',
		questions:['q1001','q1002','q1003','q1004'],
		dateCreated:'',
	},
}
	

let questions= {
	'q1003':{
		id:'q1003',
		questionText: 'this is 3',
		answerText:'this is answer 3',
		dateCreated:'',
	},
	'q1004':{
		id:'q1004',
		questionText: 'this is 4',
		answerText:'this is answer 4',
		dateCreated:'',
	},
	'q1001':{
		id:'q1001',
		questionText: 'this is 1',
		answerText:'this is answer 1',
		dateCreated:'',
	},
	'q1005':{
		id:'q1005',
		questionText: 'this is 5',
		answerText:'this is answer 5',
		dateCreated:'',
	},
	'q1002':{
		id:'q1002',
		questionText: 'this is 2',
		answerText:'this is answer 2',
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
		

		/*decks = {
		  ...decks,
		  [id]: {
			...decks[id],
			questions: decks[id].questions.concat([formattedQuestion.id])
		  }
		}
		*/
		
		res(formattedQuestion)
	  }, 500)
	})
  }
  


export function generateUID () {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }



export default decks
		


		

 