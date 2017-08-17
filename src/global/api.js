const config = require('../../config');

export const api = {
    // "in_theaters":url.staticPath+"/dataJson/in_theaters.json",  //获取电影列表
    "in_showing":"/v2/movie/in_theaters",  //正在上映的数据
    "in_coming":"/v2/movie/coming_soon",  //即将上映的数据
}