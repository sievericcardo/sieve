// export const url = "http://127.0.0.1:5000/api";
export const url = "https://sieve.servebeer.com/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
  };

  return header;
};
