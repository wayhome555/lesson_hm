# JS 拉取数据接口

- Ajax 老方案 基于 XMLHttpRequest 对象
  - 请求数据接口
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,false)
  - 发送请求
    xhr.send();
  - 事件监听
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){ // 判断请求状态
        xhr.responseText; // 获取响应数据
      }
    }

- Fetch 新方案 基于 Promise 对象
  - fetch(url,{
    method:'GET'
  })
  - then(res => res.json())
  - then( data => {
    console.log(data);
  })