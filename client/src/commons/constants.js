export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "http://localhost:5000/api";
    // :"https://my-book-aka-66b47c12c5b3.herokuapp.com/api";
export const LOCAL_STORAGE_TOKEN_NAME = "readingbook";
