// receive data from submission form, store as an object
console.log("I am friends.js");
//begin friends with some "dummy" data
var friendBucket = [
    {
        name: "Toast",
        photo:"https://images.theconversation.com/files/92297/original/image-20150818-12436-j4pzri.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1012&h=668&fit=crop",
        scores:[
            1, 2, 3, 4, 5, 5, 4, 3, 2, 1

        ]
    },
    {
        name: "Roast",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/5aday_sweet_potato.jpg/220px-5aday_sweet_potato.jpg",
        scores: [
            5, 4, 3, 2, 1, 1, 2, 3, 4, 5
        ]
    },
    { 
        name: 'Otto',
        photo: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mercedes-benz-concepts-161110101015115021600x1060.jpg?itok=taJ3F4rw',
        scores: [ 
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3 
        ] 
    },
    { 
        name: 'face',
        photo: 'http://del.h-cdn.co/assets/17/17/980x490/landscape-1493418831-delish-french-toast-grilled-cheese-9.jpg',
        scores: [ 
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4 
        ] 
    },
    { 
        name: 'race',
        photo: 'http://www.runguides.com/assets/running-icon.svg',
        scores: [ 
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2 
        ]
    },
    {
        name: "Runt",
        photo: "https://static.boredpanda.com/blog/wp-content/uploads/2017/01/kitty-born-without-elbows-roo-russ-14.jpg",
        scores: [
        4, 3, 2, 2, 3, 4, 5, 4, 3, 2
        ]
    },
    {
        name: "Punt",
        photo: "https://i.pinimg.com/originals/6c/14/60/6c146038c6307ad61f7112136f3732f8.jpg",
        scores: [
        1, 2, 3, 4, 5, 5, 4, 3, 2, 1
        ]
    }
];


module.exports = friendBucket;