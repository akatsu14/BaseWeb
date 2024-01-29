export const postReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_POST":
        return {
            ...state,
            posts: [action.payload, ...state.posts],
        };
        case "GET_POSTS":
        return {
            ...state,
            posts: action.payload,
        };
        case "UPDATE_POST":
        const updatePost = action.payload;
        const updatePosts = state.posts.map((post) => {
            if (post._id === updatePost._id) {
            return updatePost;
            }
            return post;
        });
        return {
            ...state,
            posts: updatePosts,
        };
        case "DELETE_POST":
        return {
            ...state,
            posts: state.posts.filter((post) => post._id !== action.payload),
        };
        case "POST_ERROR":
        return {
            ...state,
            postError: action.payload,
        };
        default:
        return state;
    }
    }