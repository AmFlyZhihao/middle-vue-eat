//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data', 'get',(req, res) => {
    return {
        data: [{
                "customizedPromo": "订金20抵30",
                "originalPrice": "109.00",
                "photoName": "1543979380286mp.png",
                "photoPath": "/product/6901443264865/",
                "prdId": "10086605587455",
                "salePrice": "109.00",
                "sbomAbbr": "华为手环 3e",
                "skuCode": "2901020008101",
                "type": 2
            },
            {
                "customizedPromo": "最高优惠700",
                "originalPrice": "1999.00",
                "photoName": "1541572039970mp.png",
                "photoPath": "/product/2601010042502/",
                "prdId": "10086576787089",
                "salePrice": "1699.00",
                "sbomAbbr": "荣耀Play",
                "skuCode": "2601010042502",
                "type": 2
            },
            {
                "customizedPromo": "订金10抵50",
                "originalPrice": "799.00",
                "photoName": "1543041553584mp.png",
                "photoPath": "/product/6901443267279/",
                "prdId": "10086921281690",
                "salePrice": "799.00",
                "sbomAbbr": "FreeBuds 2系列",
                "skuCode": "3102050006404",
                "type": 2
            },
            {
                "customizedPromo": "限时优惠1000",
                "originalPrice": "2799.00",
                "photoName": "1511858765170mp.jpg",
                "photoPath": "/product/6901443210220/",
                "prdId": "570379791",
                "salePrice": "1999.00",
                "sbomAbbr": "荣耀V10",
                "skuCode": "2601010014008",
                "type": 2
            },
            {
                "customizedPromo": "最高直降100",
                "originalPrice": "1399.00",
                "photoName": "1539243364035mp.png",
                "photoPath": "/product/6901443265206/",
                "prdId": "10086527872485",
                "salePrice": "1299.00",
                "sbomAbbr": "荣耀平板5",
                "skuCode": "2701010007702",
                "type": 2
            },
            {
                "customizedPromo": "3期免息",
                "originalPrice": "2099.00",
                "photoName": "1539856251517mp.png",
                "photoPath": "/product/6901443267491/",
                "prdId": "10086893318670",
                "salePrice": "2099.00",
                "sbomAbbr": "平板M5 青春版",
                "skuCode": "2701010008501",
                "type": 2
            },
            {
                "customizedPromo": "",
                "hrefUrl": "https://msale.vmall.com/honorsmart.html",
                "photoPath": "/pages/rushBuy/Nw4UpnKMk4hOzqXPcbYb.png",
                "type": 1
            },
            {
                "customizedPromo": "",
                "hrefUrl": "https://msale.vmall.com/hwpj.html",
                "photoPath": "/pages/rushBuy/a63yIBX7ZpuE9eZomUSg.png",
                "type": 1
            },
            {
                "customizedPromo": "直降20赠礼品",
                "originalPrice": "199.00",
                "photoName": "1542765947334mp.png",
                "photoPath": "/product/6901443197071/",
                "prdId": "611513952",
                "salePrice": "179.00",
                "sbomAbbr": "荣耀路由2",
                "skuCode": "3001010000701",
                "type": 2
            },
            {
                "customizedPromo": "",
                "originalPrice": "99.00",
                "photoName": "1539762879083mp.png",
                "photoPath": "/product/6901443076529/",
                "prdId": "2134",
                "salePrice": "89.00",
                "sbomAbbr": "华为小天鹅音箱",
                "skuCode": "10113030100604",
                "type": 2
            },
            {
                "customizedPromo": "",
                "hrefUrl": "https://msale.vmall.com/honorsmart.html",
                "photoPath": "/pages/rushBuy/nldc5BHgPktQiaOyRpZZ.png",
                "type": 1
            },
            {
                "customizedPromo": "丹拿音质",
                "originalPrice": "399.00",
                "photoName": "1541666262523mp.png",
                "photoPath": "/product/6901443266425/",
                "prdId": "10086423109158",
                "salePrice": "399.00",
                "sbomAbbr": "华为 AI 音箱",
                "skuCode": "3102060003501",
                "type": 2
            }]
    }
})


Mock.mock('/api/data2', 'post',(req, res) => {
    return {
        data: ['我的','名字','叫','杨志豪']
    }
})