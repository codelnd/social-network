const ADD_POST = "ADD_POST";
const UPDATE_POST_MESSAGE = "UPDATE_POST";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostMessage,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostMessage = ''
            break
        case UPDATE_POST_MESSAGE:
            state.newPostMessage = action.message
            break
        default:
            return state
    }
    return state
}

export default profileReducer;
