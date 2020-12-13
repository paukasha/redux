import React from 'react';
import {connect} from 'react-redux';

import TodoList from '../components/add-comment';
import AddComments from '../components/comment-list';
import {addComments} from '../actions';

let App = (props) => {
    const {
        comments, addComments
    } = props;
    return(
        <div>
            <AddComments addComments = {addComments} />
            <TodoList comments = {comments}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        comments: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComments: (author, comment, datetime) => dispatch(addComments(author, comment, datetime))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;

