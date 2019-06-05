const express = require('express');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/menu-items', function (req, res) {
    let menuItems = [{
        id: 0,
        title: 'Painel de Gestão',
        icon: '../../../../../assets/images/icons/menu/icon-menu-1.png',
        routeLink: '/'
    },
    {
        id: 1,
        title: 'Conta Digital',
        icon: '../../../../../assets/images/icons/menu/icon-menu-2.png',
        routeLink: '/digital-account'
    },
    {
        id: 2,
        title: 'Ant. de Recebíveis',
        icon: '../../../../../assets/images/icons/menu/icon-menu-3.png',
        routeLink: '/receivables'
    }
    ];

    res.json(menuItems);
});

app.get('/action-items', function (req, res) {
    let actionItems = [{
        id: 0,
        description: 'Ações'
    },
    {
        id: 1,
        description: 'Ação 01'
    },
    {
        id: 2,
        description: 'Ação 02'
    }, {
        id: 3,
        description: 'Ação 03'
    }
    ];

    res.json(actionItems);
});

app.listen(3000);