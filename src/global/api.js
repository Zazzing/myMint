const config = require('../../config');

let url = {
    apiUrl: "/ccp-web/api", //接口路径
    //ctxPath: "/ccp-web/dist", //tomcat服务dist目录
    ctxPath: "/dist", //node服务dist目录

    //staticPath:config.dev.staticPath,       //开发环境静态资源路径  
    staticPath: process.env.NODE_ENV !== 'development' ?  config.build.staticPath: config.dev.staticPath
};

export const api = {
    "in_showing":url.staticPath+"/dataJson/in_theaters.json",  //正在上映的数据
    "in_coming":url.staticPath+"/dataJson/in_comings.json",    //即将上映的数据
    // "in_showing":"/v2/movie/in_theaters",  //正在上映的数据
    // "in_coming":"/v2/movie/coming_soon",  //即将上映的数据
}