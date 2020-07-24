/* 
包含所有接口请求函数的模块
每个函数的返回值都是promise
*/

import ajax from "./ajax";

// 请求获取home数据
export const reqIndexData = () =>
  ajax({
    url: "/getIndexData",
  });

// home导航nav数据接口 better-scroll
export const reqIndexCategorys = () =>
  ajax({
    url: "/getIndexCateModule",
  });

// 分类左侧导航数据接口
export const reqIndexNavp = () =>
  ajax({
    url: "/getIndexNavp",
  });

// 分类右侧导航数据接口
export const reqCateLists = () =>
  ajax({
    url: "/getcateLists",
  });
