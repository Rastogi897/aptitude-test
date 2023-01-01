const { Pool } = require("pg");

class DB {
  async get() {
    if (!this.pool) {
      console.log("Connecting to postgres", process.env.DATABASE_URL);
      this.pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        max: 10,
        ssl: Number(process.env.DEBUG)
          ? false
          : {
              rejectUnauthorized: false,
            },
      });
      // the pool will emit an error on behalf of any idle clients
      // it contains if a backend error or network partition happens
      this.pool.on("error", (err) => {
        // eslint-disable-next-line no-console
        console.error("Unexpected error on idle client", err);
      });
    }

    return this.pool;
  }

  async init() {
    await this.get();
  }
}

const dbInstance = new DB();
dbInstance.init();

module.exports = dbInstance;
