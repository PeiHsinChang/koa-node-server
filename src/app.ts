import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import errorHandler from "./middleware/errorHandler";
import logger from "./middleware/logger";
import indexRoutes from "./routes/index";
import userRoutes from "./routes/users";
import stockRoutes from "./routes/stockService";


const app = new Koa();
const router = new Router();

// 使用中介軟體
app.use(errorHandler);
app.use(logger);
app.use(bodyParser());

// 註冊路由
router.use("/", indexRoutes.routes());
router.use("/users", userRoutes.routes());
router.use("/stocks", stockRoutes.routes());

app.use(router.routes()).use(router.allowedMethods());

export default app; // ✅ 匯出 Koa 應用
