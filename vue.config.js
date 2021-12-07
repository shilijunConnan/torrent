// import { join } from 'path';
// const path = require('path');
// function resolve(dir) {
//   return join(__dirname, dir);
// }



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
            target: 'localhost:8080',
            ws: true,
            secure:false,
            changOrigin: true,
        },
        // '/order': {
        //     target: 'http://www.order.com',
        //     ws: true,
        //     secure:false,
        //     changOrigin: true,
        // },
        // '/pay': {
        //     target: 'http://www.pay.com',
        //     ws: true,
        //     secure:false,
        //     changOrigin: true,
        // },
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
  
    
    