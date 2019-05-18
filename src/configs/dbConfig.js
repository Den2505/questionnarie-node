module.exports = {
    development: {
        db: {
            name: 'omgtu',
            username: 'root',
            password: 'root',
            host: 'localhost',
            port: 3306,
            dialect: 'mysql',
            charset: 'utf8mb4'
        },
       /* logger: bunyan.createLogger({
            name: 'Social_Network',
            level: 'trace',
            streams: [{
                path: '/home/den/log/backend.log',
            }]

        })*/

    },
};