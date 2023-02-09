interface Hero {
    name: string,
    age: number,
    selected: boolean
}

module.exports = {
    data: {
        list: [
            {
                title: '艾欧尼亚',
                selectAll: false,
                heroList: [
                    {name: '刀妹', selected: false},
                    {name: '凤凰', selected: false},
                    {name: '托儿所', selected: false},
                ]
            },
            {
                title: '德玛西亚',
                selectAll: false,
                heroList: [
                    {name: '盖伦', selected: false},
                    {name: '皇子', selected: false},
                    {name: '拉克丝', selected: false},
                ]
            }
        ]
    }
}
