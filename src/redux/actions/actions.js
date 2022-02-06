export const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    userComments: comment,
  };
};
