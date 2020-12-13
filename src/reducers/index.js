
const comments = (state = [], action) => {  
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {author: action.author, comment:action.comment, datetime: action.datetime}
            ]
            default: return state;
    }
}
export default comments;