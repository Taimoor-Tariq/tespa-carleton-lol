const
    sqlite3 = require("sqlite3").verbose(),
    db = new sqlite3.Database("./database/db.db"),
    riot = require('../modules/riotAPI')