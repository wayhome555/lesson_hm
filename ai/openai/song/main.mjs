// 基于openai 大模型的开发
import OpenAI from "openai";

const openai = new OpenAI({
    // 付费
    apiKey: "sk-wags4RbPLYvA1e9jCZFnPt8bLtTf0Kwh9wnodJhgDiwNLHuC",
    // 国内转化
    baseURL: "https://api.302.ai/v1",
});
// 完成生成 GC
const response = await openai.completions.create({
    model:'gpt-3.5-turbo-instruct',
    max_tokens: 256,
    prompt:`假如你是林夕这样的爱情歌曲作词大家，
    请你写一首100字，主题为爱上森林北的摇滚歌曲。
    森林北是一位美丽、洒脱、有活力的女孩。`
})
console.log(response);