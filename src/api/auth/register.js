import axios from "axios";

const register = async (name, phone, username, password) => {
  try {
    const res = await axios.post("http://108.137.148.110/api/v1/auth/register", {
      name,
      phone,
      username,
      password,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default register;
