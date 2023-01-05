const ADD_POST = "ADD_POST";
const UPDATE_POST_MESSAGE = "UPDATE_POST";

const initialState = {
    postData: [
        {
            id: 1,
            message: 'Всем привет',
            likes: 10
        },
        {
            id: 2,
            message: 'Мой первый пост',
            likes: 4
        },
        {
            id: 3,
            message: 'Освоил redux!',
            likes: 99
        },
    ],
    newPostMessage: '',
}

const profileReducer = (state = initialState, action) => {
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


export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostCreator = (message) => {
    return {
        type: UPDATE_POST_MESSAGE,
        message
    }
}

