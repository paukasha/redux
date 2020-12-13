import React from 'react';

const AddComments = ({addComments}) => {
  return (
    <form>
        <input 
          placeholder="Ваше имя" 
          required
          onChange = {ev => {
            window.a =ev.target.value;    
          }}
          />
       
        <textarea 
        maxLength="150" 
        required 
        placeholder="Ваш комментарий..." 
        onChange = {ev => {
          window.b= ev.target.value;
        }}
        >
      </textarea> 
    
      <button 
        onClick = {ev => {
      
        if (a!=='' && b!=='') {
          let date = new Date();
          let dateComment = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
          addComments(a, b, dateComment);
          
        }
        }}>
        Добавить комментарий</button>
  </form>
  )
}

export default AddComments;