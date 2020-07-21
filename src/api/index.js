/* 
包含所有接口请求函数的模块
每个函数的返回值都是promise
*/

import ajax from "./ajax";

// 请求获取首页数据
export const reqIndexData = () =>
  ajax({
    url: "/getIndexData",
  });
