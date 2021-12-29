

module.exports = {
    pages:{
        students: {
            entry: './src/views/students/students.js',
            template: './src/views/students/students.html',
            filename: 'students.html',
            title: 'torrentStudents'
        },
        admin: {
            entry: './src/views/admin/admin.js',
            template: './src/views/admin/admin.html',
            filename: 'admin.html',
            title: 'torrentAdmin'
        },
        enterprises: {
            entry: './src/views/enterprises/enterprises.js',
            template: './src/views/enterprises/enterprises.html',
            filename: 'enterprises.html',
            title: 'torrentEnterprises'
        },
        schools: {
            entry: './src/views/schools/schools.js',
            template: './src/views/schools/schools.html',
            filename: 'schools.html',
            title: 'torrentSchools'
        },
    },
  

    devServer: {
      proxy: {
        '/user': {
            //要访问的跨域的api的域名
            target: "http://localhost:9001",
            ws: true,
            changeOrigin: true,//是否允许开启代理
            pathRewrite: {
              // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
              '^/user': '',
            }
        }
      }
    }
  ,
      css: {
        loaderOptions: {
          sass: {
            prependData: `
            @import "src/style/global.scss";
          `
          }
        }
      }
};
  
    
    