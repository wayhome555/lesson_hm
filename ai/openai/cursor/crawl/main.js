// lesson_hm/ai/openai/cursor/crawl/index.js
// request-promise 负责发送请求的
const request = require('request-promise');
// 解析request 拿到的html 字符串
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 常量 大写 配置项
const HOT_URL = 'https://top.baidu.com/board?tab=realtime';

// network http 请求
request(HOT_URL)
    .then(html => {
        // 请求完成了
        // 解析html 得到热榜
        // html 字符串 -> tr 
        // 内存里模拟浏览器 cheerio
        const $ = cheerio.load(html);
        const hotList = [];
        $('.realtime-board .list .item').each((index, element) => {
            // 获取排名
            const rank = $(element).find('.index').text().trim();
            // 获取标题
            const title = $(element).find('.c-container .title').text().trim();
            // 获取热度
            const heat = $(element).find('.c-container .hot-index').text().trim();
            // 获取链接
            const link = $(element).find('.c-container .title').attr('href').trim();
            hotList.push({
                rank,
                title,
                heat,
                link
            });
        });

        const csvWriter = createCsvWriter({
            path: 'baidu_hot_list.csv',
            header: [
                { id: 'rank', title: '排名' },
                { id: 'title', title: '标题' },
                { id: 'heat', title: '热度' },
                { id: 'link', title: '链接' },
            ]
        });

        csvWriter
            .writeRecords(hotList)
            .then(() => console.log('CSV file has been saved.'));
    })
    .catch(err => {
        console.error('Error fetching the page:', err);
    });