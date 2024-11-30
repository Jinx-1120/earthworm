import { db } from "@earthworm/db";
import { course as courseSchema, statement as statementSchema } from "@earthworm/schema";

(async function () {
  // 先删除所有的语句
  await db.delete(statementSchema);
  console.log("已删除所有语句");

  // 再删除所有的课程
  await db.delete(courseSchema);
  console.log("已删除所有课程");

  console.log("数据重置完成");
  process.exit(0);
})();
