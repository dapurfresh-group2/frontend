import axios from "axios";

const login = async (username, password) => {
  try {
    const res = await axios.post("http://108.137.148.110/api/v1/auth/login", {
      username: username,
      password: password,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default login;
