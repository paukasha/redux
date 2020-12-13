import React from 'react';

const TodoList = (props) => {
  const {comments} = props;  
  return (
  <div>
    <ol>
      {
        comments.map((todo, i) => {  
        return (
          <li key={i}>
            <div className="author">{todo.author}</div>
            <div className="comment-item">{todo.comment} </div>
            <div className="date-time">{todo.datetime}</div> 
          </li>
        )
        }) 
      }
    
    </ol>
  </div>
  );
}
export default TodoList;
