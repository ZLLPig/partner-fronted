import type {userType} from "../models/user";


let currentUser:userType;

const setCurrentUserStatus = (user:userType) => {
  currentUser = user;
}

const getCurrentUserStatus = () => {
  return currentUser;
}

export {
  setCurrentUserStatus,
  getCurrentUserStatus
}
