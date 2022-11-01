import axios from "axios";

const putProfile = async (formData) => {
  try {
    const res = await axios.put(
      "http://108.137.148.110/api/v1/profile/edit",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default putProfile;
