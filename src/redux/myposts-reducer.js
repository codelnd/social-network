const ADD_POST = "ADD_POST";
const UPDATE_POST_MESSAGE = "UPDATE_POST";

export const myPostsReducer = (state, action) => {
    // switch (action.type) {
    //     case SEND_MESSAGE:
    //         return
    //
    // }
    if (action.type === ADD_POST) {
        const newPost = {
            id: 4,
            message: state.newPostMessage,
            likes: 0
        }
        state.postData.push(newPost)
        state.newPostMessage = ''
    } else if (action.type === UPDATE_POST_MESSAGE) {
        state.newPostMessage = action.message
    }
    return state
}
