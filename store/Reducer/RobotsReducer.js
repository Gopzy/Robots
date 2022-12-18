import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../Action/ActionType';

const initialState = {
  robotData: [],
  robotData_error: null,
};

const RobotReducer = (state = initialState, action) => {
  // console.log('Robot Reducer calling>>>>>>>>>', action.type);
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        robotData: [],
      };
    case FETCH_DATA_SUCCESS:
      // console.log('FETCH_DATA_SUCCESS :::::::::', action.payload);
      return {
        ...state,
        robotData: action?.payload,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        robotData_error: action.payload,
      };
    default:
      return state;
  }
};

export default RobotReducer;
