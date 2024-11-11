import fs from 'fs';

export default {
    get users() {
        const data = fs.readFileSync('./db/users.json')

        return JSON.parse(data);
    },
    set users(user) {
        const data = fs.readFileSync('./db/users.json')
        const users = JSON.parse(data);

        users.push(user);

        const json = JSON.stringify(users);

        fs.writeFileSync('./db/users.json', json);
    }
}

