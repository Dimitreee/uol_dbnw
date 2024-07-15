class Settings {
    constructor() {
        this.db = global.db;
    }

    /**
     * @return {Promise<Object>} settings
     */
    find() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM settings WHERE id = 1'; // Assuming single settings row
            this.db.get(query, [], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * @param {Object} updateCondition
     *   updateCondition = {
     *       title: string,
     *       name: string
     *   }
     * @return {Promise<void>}
     */
    update(updateCondition) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE settings SET title = ?, name = ? WHERE id = 1';
            this.db.run(query, [
                updateCondition.title,
                updateCondition.name
            ], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * @param {Object} createCondition
     *   createCondition = {
     *       title: string,
     *       name: string
     *   }
     * @return {Promise<void>}
     */
    create(createCondition) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO settings (title, name) VALUES (?, ?)';
            this.db.run(query, [
                createCondition.title,
                createCondition.name
            ], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = Settings;
