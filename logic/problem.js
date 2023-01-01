const db = require("../services/db");
let problemsCache = {};

async function getProblem({ code }) {
  const pool = await db.get();
  if (Object.keys(problemsCache).includes(`${code}`)) {
    return {
      problem: problemsCache[`${code}`],
    };
  } else {
    try {
      const { rows: probRows } = await pool.query(
        "SELECT * FROM compilers.problems WHERE code = $1",
        [code]
      );
      problemsCache = Object.assign({}, problemsCache, {
        [`${probRows[0].code}`]: probRows[0],
      });
      return {
        problem: problemsCache[`${code}`],
      };
    } catch (err) {
      console.log(err);
      return {
        error: err,
      };
    }
  }
}

async function updateProblemsCache({ problem }) {
  problemsCache = Object.assign({}, problemsCache, {
    [`${problem.code}`]: problem,
  });
}

module.exports = {
  getProblem,
  updateProblemsCache,
};
