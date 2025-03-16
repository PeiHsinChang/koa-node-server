import Router from "koa-router";
import { getStockData } from "../services/stockService";

const router = new Router();

router.get("/", async (ctx) => {

  try {
    const stockData = await getStockData();
    ctx.body = stockData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    ctx.status = 500;
    ctx.body = { message: error.message };
  }
});

router.get("/888", async (ctx) => {

    ctx.body = 'pei'
  });


export default router;
