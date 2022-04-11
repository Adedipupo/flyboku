import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userContant";


export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "https://api.flyboku.aclient.xyz/login",
        { email, password },
        config
      );
      
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log('error',error.response);
      console.log('error',error.message);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };