import { QuestionData } from '../actions/questionActions'


const QuestionsContainer = props =>  <Questions {...props}/> 

const mapStateToProps = (state)=> {
	return {
		
	}
}
export default connect(
	mapStateToProps,
	{  },
)(QuestionsContainer)