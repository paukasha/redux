export const addComments = (author, comment, datetime) => {
  
    return {
        type: 'ADD_COMMENT',
        author,
        comment,
        datetime,
    }
}
