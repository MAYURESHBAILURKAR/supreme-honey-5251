function Reducer(state, action) {
  switch (action.type) {
    case "Login_success": {
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    }
    case "Login_failure": {
      return {
        ...state,
        isAuth: false,
        token: null,
        isError: true,
      };
    }
    case "get_product": {
      return {
        ...state,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
export default Reducer;
