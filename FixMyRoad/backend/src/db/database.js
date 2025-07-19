const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

const createReportsTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS reports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL,
            status TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    `;
    db.run(sql, (err) => {
        if (err) {
            console.error('Error creating reports table: ' + err.message);
        }
    });
};

const getReports = (callback) => {
    const sql = 'SELECT * FROM reports';
    db.all(sql, [], (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

const addReport = (description, status, callback) => {
    const sql = 'INSERT INTO reports (description, status) VALUES (?, ?)';
    db.run(sql, [description, status], function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, this.lastID);
        }
    });
};

const updateReportStatus = (id, status, callback) => {
    const sql = 'UPDATE reports SET status = ? WHERE id = ?';
    db.run(sql, [status, id], function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, this.changes);
        }
    });
};

const deleteReport = (id, callback) => {
    const sql = 'DELETE FROM reports WHERE id = ?';
    db.run(sql, id, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, this.changes);
        }
    });
};

createReportsTable();

module.exports = {
    db,
    getReports,
    addReport,
    updateReportStatus,
    deleteReport
};