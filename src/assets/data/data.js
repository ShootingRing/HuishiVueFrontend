export function dataInJs() {
    let mydata = [
        {
            id: 1,
            name: '韩艺龚',
            position: 'AI工程师',
            detection: 1,
            age: 18,
            degree: '本科',
            employeeID: 820812354,
            attack: ''
        },
        {
            id: 2,
            name: '李鑫',
            position: '前端工程师',
            detection: 1,
            age: 18,
            degree: '本科',
            employeeID: 82056487,
            attack: ''
        },
        {
            id: 3,
            name: '王泥喜',
            position: 'AI工程师',
            detection: 2,
            age: '18',
            degree: '本科',
            employeeID: 82059814,
            attack: '深度伪造'
        },
        {
          id: 4,
          name: '李鑫',
          position: '后端工程师',
          detection: 1,
          age: 18,
          degree: '本科',
          employeeID: 82056487,
          attack: ''
        },
        {
            id: 5,
            name: '李鑫',
            position: 'AI研究员',
            detection: 1,
            age: 18,
            degree: '本科',
            employeeID: 82056487,
            attack: ''
        }, //↑
        {
            id: 6,
            name: '章子部',
            position: 'AI研究员',
            detection: 2,
            age: '22',
            degree: '研究生',
            employeeID: 82079541,
            attack: '深度伪造'
        },
        {
            id: 7,
            name: '于东杨',
            position: '测试总监',
            detection: 1,
            age: 18,
            degree: '本科',
            employeeID: 82082104,
            attack: ''
        }, //↓
        {
            id: 8,
            name: '杨子怡',
            position: 'AI工程师',
            detection: 2,
            age: 18,
            degree: '本科',
            employeeID: 82094675,
            attack: '视频重放'
        },
        {
          id: 9,
          name: '廖鑫',
          position: '数据库管理',
          detection: 1,
          age: 18,
          degree: '本科',
          employeeID: 82013546,
          attack: ''
        },
        // {
        //   id: 10,
        //   name: '廖鑫',
        //   position: '数据库管理',
        //   detection: 2,
        //   age: '18',
        //   degree: '本科',
        //     employeeID: 82013546,
        //   attack: '对抗样本'
        // },
        {
            id: 10,
            name: '曾崇岳',
            position: '数据库管理',
            detection: 2,
            age: '18',
            degree: '本科',
            employeeID: 82003846,
            attack: '对抗样本'
        },
        {
            id: 11,
            name: '于东杨',
            position: '硬件开发',
            detection: 1,
            age: 18,
            degree: '本科',
            employeeID: 82082104,
            attack: ''
        },
        {
            id: 12,
            name: '王泽斌',
            position: '系统架构师',
            detection: 2,
            age: '19',
            degree: '本科',
            employeeID: 82054786,
            attack: '打印照片'
        },
    ]

    return mydata
}

export function cardsInJs() {
    let cards = []

    return cards
}

// var Id = 3;

// (function() {
//   // 全局数据对象
//   const data = dataInJs()
//
//   // 将数据对象暴露给全局变量
//   window.appData = data
//
//   // 每隔一秒向数据对象中插入一随机变量
//   setInterval(function() {
//     Id++
//
//     data.push({
//         id: Id,
//         name: 'user'+Id,
//         age: 18,
//         position: '前端工程师',
//         detection: Math.floor(Math.random() * 3) + 1, // 1, 2, 3
//     })
//
//     console.log('data', data)
//   }, 1000)
// })();
