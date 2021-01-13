const tiles = [
    {
        id: 'tile1',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 50, -50 0 z",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile2',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 0 50 z",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile3',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 q50,0 50,50 q0,0 0,-50",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile4',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 q50,0 50,50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile5',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 q50,0 50,50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile6',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 l0 50 l-50 0 l0 -50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile7',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 l0 50 l-50 0 l50 -50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile8',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 l-50 50 l0 -50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile9',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 l0 50 l-50 0 l50 -50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile10',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0 0 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile11',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 l-50 50 l0 -50 l50,50 l-50 0 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile12',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l25 50 l25 -50 l0 50 l-50 0 l0 -50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile13',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 q50,0 50,50 q-50 0 -50,-50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile14',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 q0,50 -50,50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile15',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 h10 v10 h10 v10 h10 v10 h10 v10 h10 v10 h-50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile16',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 a25,50 0,0,0 50,0 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile17',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 a25,350 0,0,0 25,0 a25,350 0,0,0 25,0 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile18',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50 0 l-50 50 l0 -50 l50,50 l0 -50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile19',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l25 50 l25 -50 z ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile20',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0 15 l25 -15 l25 15 l-10 35 l-30 0 l-10 -35 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile21',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0 25 l25 -25 l25 25 l-25 25 l-25 -25 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile22',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0 0 q25,25 50 0 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile23',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0 50 q25,-25 25,-25 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile24',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l50,25 l-50 25 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile25',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l12.5,0 l-12.5,12.5 l0,25 l12.5,12.5 l25,0 l12.5,-12.5 l0,-25 l-12.5 -12.5 l-25,0",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile26',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0,50 q0,-50 50,-50 l-50,0 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile27',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 l0,50 q0,-50 50,-50 l-50,0 l0,50 q50,0 0,-50 l0,50 l-50,0 l0,-50 ",
        fill: 'black',
        stroke: 'black'
    },
    {
        id: 'tile28',
        name:'shape1',
        cName: 'tile',
        path: "M0 0 a25,350 0,0,0 25,0 l0,50 l25,0 l0,-50 l-25,0 ",
        fill: 'black',
        stroke: 'black'
    },
]

export default tiles;