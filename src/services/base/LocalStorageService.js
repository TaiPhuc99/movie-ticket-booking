/* eslint-disable no-unused-vars */
export const localStorageService = {
  setUserLocal: (data) => {
    let dataJson = JSON.stringify(data);
    localStorage.setItem("USER_LOGIN", dataJson);
  },

  getUserLocal: () => {
    let dataJson = localStorage.getItem("USER_LOGIN");
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },

  removeUserLocal: () => {
    let dataJson = localStorage.getItem("USER_LOGIN");
    if (dataJson) {
      localStorage.removeItem("USER_LOGIN");
    }
  },
};
