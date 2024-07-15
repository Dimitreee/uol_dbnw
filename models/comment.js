class Comment {
    constructor() {
        this.db = global.db;
    }

    /**
    * @param {Object} createCondition
    *   createCondition = {
    *       article_id: number,
    *       text: string,
    *       author: string,
    *   }
    * @return {Promise<void>}
    */
    create(createCondition) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO comments (article_id, text, author) VALUES (?, ?, ?)';
            this.db.run(query, [createCondition.article_id, createCondition.text, createCondition.author], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
    * @param {Object} whereCondition
    *   whereCondition = {
    *       article_id: number
    *   }
    * @return {Promise<Object[]>} comments
    */
    findAll(whereCondition) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM comments WHERE article_id = ? ORDER BY date DESC';
            this.db.all(query, [whereCondition.article_id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = Comment;
