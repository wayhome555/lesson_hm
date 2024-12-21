import './repos.css'
import { useState } from 'react'
function Repos() {
    // const repos = [
    //     {
    //         id: 1,
    //         name:'lesson_hm'
    //     },
    //     {
    //         id:2,
    //         name:'algo_hello'
    //     },
    //     {
    //         id:3,
    //         name:'prompt'
    //     }
    // ]

    // vue template?
    // js 区域
    // 响应式数据状态 返回数组 解构 数组的第一项是当前的状态，数组的第二项是修改状态的方法
    // ref
    const [repos, setRepos] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('http://api.github.com/users/wayhome555/repos')
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        setLoading(false)
        setRepos(data)
    })
    return (
        // html? UI写法 react发明的jsx语法
        // class 是关键字 要用 className
        <div className='github-repos'>
        <h2>Github Repositories</h2>
        {loading && <p>Loading...</p>}
        <ul>
      {
        repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            <span> 作者：{repo.owner.login}</span>
          </li>
        ))
      }
      </ul>
        {!loading && repos.length === 0 && <p>No Repos</p>}
        </div>
    )
}

export default Repos