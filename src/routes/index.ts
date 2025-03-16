import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = { message: "Welcome to Koa + TypeScript!" };
});

export default router;
