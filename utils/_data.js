
const decks=
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
export default decks
		


		

 