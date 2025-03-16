import { Context, Next } from "koa";

const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message || "Internal Server Error",
    };
    console.error("Error:", err);
  }
};

export default errorHandler;