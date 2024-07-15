class User {
    constructor(name) {
        this.db = global.db;
    }

    /**
     * @param {Object} whereCondition
     *   whereCondition = {
     *       id: number
     *   }
     * @return {Promise<Object>} user
     */
    find(whereCondition) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id = ?';
            this.db.get(query, [whereCondition.id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * @return {Promise<Object[]>} users
     */
    findAll() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users';
            this.db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    /**
     * @param {Object} createCondition
     *   createCondition = {
     *       name: string,
     *       title: string,
     *   }
     * @return {Promise<Object>} newly created user's ID
     */
    create(createCondition) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO users (name, title) VALUES (?, ?)';
            this.db.run(query, [createCondition.name, createCondition.title], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID });
                }
            });
        });
    }

    /**
     * @param {Object} updateCondition
     *   updateCondition = {
     *       id: number,
     *       name: string,
     *       title: string,
     *   }
     * @return {Promise<void>}
     */
    update(updateCondition) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE users SET name = ?, title = ? WHERE id = ?';
            this.db.run(query, [updateCondition.name, updateCondition.title, updateCondition.id], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = User;
