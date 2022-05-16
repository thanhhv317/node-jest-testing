const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};

export default function request(url) {
    return new Promise((resolve, reject) => {
        const userId = parseInt(url.substr('/users/'.length), 10);
        process.nextTick(() => {
            users[userId] ? resolve(users[userId]) : reject({
                error: `User with ${userId} not found.`
            })
        });
    });
}