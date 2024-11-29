const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://tophub.today/n/KqndgxeLl9';

rp(url)
    .then(html => {
        const $ = cheerio.load(html);
        const data = [];

        // 选择表格中的每一行
        $('table.table-bordered.table-striped tr').each((index, element) => {
            // 跳过表头
            if (index === 0) return;

            // 获取排名、标题、热度、链接
            const rank = $(element).find('td:nth-child(1)').text().trim();
            const titleElement = $(element).find('td:nth-child(2) a');
            const title = titleElement.text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = 'https://tophub.today' + titleElement.attr('href');

            // 调试信息
            console.log(`Rank: ${rank}, Title: ${title}, Heat: ${heat}, Link: ${link}`);

            // 将数据添加到数组中
            data.push({ rank, title, heat, link });
        });

        // 将数据写入CSV文件
        const csv = data.map(row => `${row.rank},${row.title},${row.heat},${row.link}`).join('\n');
        fs.writeFileSync('weibo_hot_topics.csv', csv, 'utf8');

        console.log('数据已成功保存到 weibo_hot_topics.csv 文件中');
    })
    .catch(err => {
        console.error(err);
    });