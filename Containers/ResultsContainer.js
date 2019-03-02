import { QuestionData } from '../actions/questionActions'


const ResultsContainer = props =>  <Results {...props}/> 

const mapStateToProps = (state)=> {
	return {
		
	}
}
export default connect(
	mapStateToProps,
	{  },
)(ResultsContainer)