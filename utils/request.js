import Vue from "vue";

export default (url, data, method = "GET") => {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      data,
      method,
      success: (res) => {
        resolve(res.data);
      },
      fail: (error) => {
        reject(error);
      },
    });
  });
};
