// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }

// import axios from "axios"

// export const apiConnector = (method, url, bodyData, headers = {}) => {
//   const token = JSON.parse(localStorage.getItem("token"))

//   return axios({
//     method,
//     url,
//     data: bodyData,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       ...headers,
//     },
//   })
// }

import axios from "axios"
export const apiConnector = async (method, url, bodyData, headers = {}) => {
  return axios({
    method: method,
    url: url,
    data: bodyData,
    headers: headers,
  });
};
