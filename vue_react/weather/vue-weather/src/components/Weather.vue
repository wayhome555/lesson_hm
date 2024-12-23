<template>
    <div class = 'container'>
        <!-- 导航 -->
        <!-- html5 语义化标签 -->
        <nav class = 'nav'>
            <div class = 'time'>{{localTime}}</div>
            <div class = 'city'>切换城市</div>
        </nav>
        <!-- 天气 -->
         <main class="city-info">
            <div class="city-name">{{weatherData.city}}</div>
            <div class="weather">{{weatherData.weather}}</div>
            <h2 class = 'temp'>
                <em>{{weatherData.temperature}}</em>
            </h2>
            <div class="detail">
                <span>风力：{{weatherData.windPower}}</span>
                <span>风向：{{weatherData.windDirection}}</span>
                <span>空气湿度：{{ weatherData.humidity }}</span>
            </div>
         </main>

    </div>
</template>

<script setup>
import { ref ,onMounted} from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader';

const localTime = ref('00:00')
const weatherData = ref({
    city: '北京',
    weather: '多云',
    temperature: 10,
    windPower: '1级',
    windDirection: '东北风',
    humidity: '50%'
})

const init_map = () => {
    AMapLoader.load({
        key: '88b238750f1abb3355bec92675052c17',
        version:'2.0',
        plugins:['AMap.CitySearch']
    }).then(AMap => {
        AMap.plugin('AMap.CitySearch', () => {
            let citySearch = new AMap.CitySearch();
            citySearch.getLocalCity((status, result) => {
                console.log(status, result)
                if (status === 'complete' && result.info === 'OK') {
                    console.log(result.city)
                }
            });
        });
    })
}
// init_map()
// 组件挂载完成后执行
onMounted(() => {
    init_map()
    // 定时器
    setInterval(() => {
        localTime.value = new Date().toLocaleString()
        
},1000)})
</script>

<style scoped>
.container {
min-height : 100vh;
background-color:#000;
opacity:0.6;
color:#fff;
}
.nav {
    overflow: auto;
    padding:10px;

}
.city {
    float : right;
}
.time {
    float : left;
}
.city-info {
    text-align: center;
}
.temp{
    font-size: 30px;
}
.temp em {
    font-size: 34px;}
</style>