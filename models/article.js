class Article {
    constructor() {
        this.db = global.db;
    }

    /**
     * @param {Object} whereCondition
     *   whereCondition = {
     *       id: number,
     *       published: boolean,
     *   }
     * @return {Promise<Object>} article
     */
    find(whereCondition) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM articles WHERE id = ?';
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
     * @param {Object} whereCondition
     *   whereCondition = {
     *       published: boolean,
     *   }
     * @return {Promise<Object>} article
     */
    findAll(whereCondition) {
        return new Promise((resolve, reject) => {

            if (whereCondition && whereCondition.published) {
                const query = 'SELECT * FROM articles WHERE published = ?';
                this.db.all(query, [whereCondition.published], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });

                return;
            }

            const query = 'SELECT * FROM articles';
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
     * @return {Promise<Object[]>} published articles
     */
    findAllPublished() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM articles WHERE published = 1';
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
     *       title: string,
     *       content: string,
     *       published: boolean,
     *   }
     * @return {Promise<Object>} newly created article's ID
     */
    create(createCondition) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO articles (title, content, published) VALUES (?, ?, ?)';
            this.db.run(query, [createCondition.title, createCondition.content, createCondition.published], function(err) {
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
     *       id?: number,
     *       title?: string,
     *       content?: string,
     *       published?: boolean,
     *       views?: number,
     *       likes?: number,
     *   }
     * @return {Promise<void>}
     */
    update(updateCondition) {
        return new Promise((resolve, reject) => {
            const fields = [];
            const values = [];

            if (updateCondition.title !== undefined) {
                fields.push('title = ?');
                values.push(updateCondition.title);
            }
            if (updateCondition.content !== undefined) {
                fields.push('content = ?');
                values.push(updateCondition.content);
            }
            if (updateCondition.published !== undefined) {
                fields.push('published = ?');
                values.push(updateCondition.published);
            }
            if (updateCondition.updated_at !== undefined) {
                fields.push('updated_at = ?');
                // format unixtimsptamp to 2024-07-14 21:57:30
                values.push(updateCondition.updated_at.toISOString().slice(0, 19).replace('T', ' '));
            }
            if (updateCondition.views !== undefined) {
                fields.push('views = ?');
                values.push(updateCondition.views);
            }
            if (updateCondition.likes !== undefined) {
                fields.push('likes = ?');
                values.push(updateCondition.likes);
            }

            values.push(updateCondition.id);

            const query = `UPDATE articles SET ${fields.join(', ')} WHERE id = ?`;
            this.db.run(query, values, function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = Article;
