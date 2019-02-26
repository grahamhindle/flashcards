
  const decks=
        {
      '10001': {
        id:'10001',
        name:'mydeck1',
        questions:['q1001','q1002'],
        dateCreated:'',
      },
      '10002': {
        id:'10002',
        name:'mydeck2',
        questions:['q1001','q1003'],
        dateCreated:'',
        },
      '10003': {
        id:'10003',
        name:'mydeck3',
        questions:['q1002','q1004'],
        dateCreated:'',
        },
      '10004': {
        id:'10004',
        name:'mydeck4',
        questions:['q1001','q1002','q1003','q1004'],
        dateCreated:'',
        },
      }
  

    let questions= {
      'q1003':{
        id:'q1003',
        questionText: 'this is 3',
        answerText:'thisis answer 3',
        dateCreated:'',
      },
      'q1004':{
        id:'q1004',
        questionText: 'this is 4',
        answerText:'thisis answer 4',
        dateCreated:'',
      },
      'q1001':{
        id:'q1001',
        questionText: 'this is 1',
        answerText:'thisis answer 1',
        dateCreated:'',
      },
      'q1001':{
        id:'q1001',
        questionText: 'this is 2',
        answerText:'thisis answer 2',
        dateCreated:'',
      },
    }


    export function _getDecks () {
  
      return new Promise((res, rej) => {
        setTimeout(() => res({...decks}), 1000)
       
      })
    }
    
    export function _getQuestions () {
      return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
      })
    }

    export default decks
    


    

 