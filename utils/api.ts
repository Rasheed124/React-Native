import axios from "axios";
const apiEndPoint = "https://699da14283e60a406a46f5f3.mockapi.io/books";

const getListOfBook = async () => {
  try {
    const response = await axios.get(apiEndPoint);
    const data = JSON.stringify(response.data, null);
    //   setBookList(response.data);
  } catch (error) {}
};

const getBookById = async () => {
  try {
    const response = await axios.get(`${apiEndPoint}/94`);
    const data = JSON.stringify(response.data, null);
    console.log(data);
  } catch (error) {
    console.log(`Unexpected error ${error}`);
  }
};
const deleteBookByID = async () => {
  try {
    const response = await axios.delete(`${apiEndPoint}/4`);

    // Alert.alert("");
  } catch (error) {
    console.log(`Unexpected error ${error}`);
  }
};
