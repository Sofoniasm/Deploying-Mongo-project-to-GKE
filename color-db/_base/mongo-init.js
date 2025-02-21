const dbName = Process.env.DB_NAME;
const dbUser = Process.env.DB_USER;
const dbPassword = Process.env.DB_PASSWORD;

db = db.getSiblingDB(dbName);

console.log('INITIALIZING : ${dbName}')
console.log('INITIALIZING : Creating user ${dbUser}')

db.createUser({
    user: dbUser,
    pwd: dbPassword,
    roles: [
        {
            role: 'readWrite',
            db: dbName
        }
    ]
});

console.log('INITIALIZING : success')
