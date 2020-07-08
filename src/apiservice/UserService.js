import React from "react";

class UserService {
  get(userId, password) {
    console.log("UserService - UserId ", userId);
    return true;
  }
}

export default new UserService();
