const initialState = {
  userProfile: null, // Initially, the profile is empty
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        userProfile: action.payload,
        
      };
    case 'CLEAR_PROFILE':
      return {
        ...state,
        userProfile: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
