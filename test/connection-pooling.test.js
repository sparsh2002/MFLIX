import MoviesDAO from "../src/dao/moviesDAO"

describe("Connection Pooling", () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("Connection pool size is 50", async () => {
    const response = await MoviesDAO.getConfiguration()
    console.log("Pool size is" ,response.poolSize)
    expect(response.poolSize).toBe(50)
  })
})
