export const myNotification = [{
        id: 1,
        action: "follow",
        notification_message: "started following you.",
        date_uploaded: "Tue Mar 28 2023 16:23:03 GMT+0100 (West Africa Standard Time)",
        post_photo: require("./images/photo5.jpg"),
        friend: {
            firstName: "creative",
            lastName: "ana",
            photo: require("./images/exphoto1.jpg"),
        },
    },
    {
        id: 2,
        action: "tag",
        notification_message: "tagged you in post",
        date_uploaded: "Tue Mar 28 2023 12:23:03 GMT+0100 (West Africa Standard Time)",
        post_photo: require("./images/photo2.jpg"),
        friend: {
            firstName: "john",
            lastName: "khan",
            photo: require("./images/exphoto2.jpg"),
        },
    },
    {
        id: 3,
        action: "tag",
        notification_message: "tagged you in post",
        date_uploaded: "Tue Mar 27 2023 12:23:03 GMT+0100 (West Africa Standard Time)",
        post_photo: require("./images/photo3.jpg"),
        friend: {
            firstName: "john",
            lastName: "khan",
            photo: require("./images/exphoto2.jpg"),
        },
    },
    {
        id: 4,
        action: "commented",
        notification_message: "commented on your post",
        date_uploaded: "Tue Mar 28 2023 12:23:03 GMT+0100 (West Africa Standard Time)",
        post_photo: require("./images/photo4.jpg"),
        friend: {
            firstName: "legendary",
            lastName: "Paul",
            photo: require("./images/exphoto3.jpg"),
        },
    },
    {
        id: 5,
        action: "commented",
        notification_message: "commented on your post",
        date_uploaded: "Tue Mar 24 2023 12:23:03 GMT+0100 (West Africa Standard Time)",
        post_photo: require("./images/photo5.jpg"),
        friend: {
            firstName: "legendary",
            lastName: "Paul",
            photo: require("./images/exphoto3.jpg"),
        },
    },


]


// Chats Images
const chat1 = require("./images/photo1.jpg");
const chat2 = require("./images/photo2.jpg");
const chat3 = require("./images/photo3.jpg");
const chat4 = require("./images/photo4.jpg");
const chatSmall1 = require("./images/photo6.jpg");
const chatSmall2 = require("./images/photo7.jpg");

export const chatLists = {
    name: "Jane",
    id: 827737823,

    friends: [{
            id: 665656767,
            name: "Nma Adamma",
            profile_photo: chat1,
            online: true,
            messages: [{
                    id: 83786652831,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1,
                    read: true,

                },
                {
                    id: 2304544162,
                    name: "Me",
                    message: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!  Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! ",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 3209354298,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1,
                    read: true,

                },
                {
                    id: 834553831,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1,
                    read: true,

                },
                {
                    id: 34233454162,
                    name: "Me",
                    message: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!  Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! ",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 36772329298,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1,
                    read: true,

                },
                {
                    id: 8378283331,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1,
                    read: true,

                },
                {
                    id: 23434230162,
                    name: "Me",
                    message: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!  Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips! ",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 3205543559298,
                    name: "James",
                    message: "Thank you! That was very helpful!",
                    image: chat1,
                    read: true,

                },

            ]
        },
        {
            id: 266678,
            name: "Will Kenny",
            profile_photo: chat2,
            online: true,
            messages: [{
                    id: 123267,
                    name: "Will Kenny",
                    message: "My photo are really fantastic, aren't they?",
                    image: chat2

                },
                {
                    id: 228373,
                    name: "Me",
                    message: "These photos are really awesome... I know",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 3483343,
                    name: "Will Kenny",
                    message: "Thank you very much! love you so much",
                    image: chat2

                },

            ]
        },
        {
            id: 958678,
            name: "Beth Williams",
            profile_photo: chat3,
            online: false,
            messages: [{
                    id: 1333241,
                    name: "Beth Williams",
                    message: "The photos are undergoing production.",
                    image: chat3,
                    read: true,

                },
                {
                    id: 2642344,
                    name: "Me",
                    message: "Please let me know when they are ready...",
                    image: chatSmall2

                },
                {
                    id: 3323425,
                    name: "Beth Williams",
                    message: "I will. Thank you for your patience!",
                    image: chat3,
                    read: true,

                },

            ]
        },
        {
            id: 3737,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },
                {
                    id: 209377,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 734431,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 663273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 3777,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 3772027,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 394723,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 3701027,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 37747,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 4727,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 37747927,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 37742727,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 377727,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 237277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },
        {
            id: 3774,
            name: "Rev Shaw",
            profile_photo: chat4,
            online: false,
            messages: [{
                    id: 2277,
                    name: "Me",
                    message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
                    image: chatSmall2,
                    read: true,

                },
                {
                    id: 737831,
                    name: "Rev Shaw",
                    message: "Hey, what's up? ",
                    image: chat4,
                    read: true,

                },

                {
                    id: 382273,
                    name: "Rev Shaw",
                    message: "Wanted to ask if you’re available for a portrait shoot next week.",
                    image: chat4,

                },

            ]
        },


    ]
}



export const supportMessage = {
    id: 4727,
    name: "Rev Shaw",
    profile_photo: chat4,
    online: false,
    messages: [{
            id: 23732277,
            name: "Me",
            message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
            image: chatSmall2,
            read: true,

        },
        {
            id: 7374831,
            name: "Rev Shaw",
            message: "Hey, what's up? ",
            image: chat4,
            read: true,

        },

        {
            id: 3822373,
            name: "Rev Shaw",
            message: "Wanted to ask if you’re available for a portrait shoot next week.",
            image: chat4,

        },

        {
            id: 223277,
            name: "Me",
            message: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm",
            image: chatSmall2,
            read: true,

        },
        {
            id: 7378431,
            name: "Rev Shaw",
            message: "Hey, what's up? ",
            image: chat4,
            read: true,

        },

        {
            id: 3823273,
            name: "Rev Shaw",
            message: "Wanted to ask if you’re available for a portrait shoot next week.",
            image: chat4,

        },

    ]
}



export const categoryList = [{
        id: 1,
        name: "Bible Club",
        icon: require("./images/com_icon1.png"),
    },
    {
        id: 2,
        name: "Worship",
        icon: require("./images/com_icon2.png"),
    },
    {
        id: 3,
        name: "Services",
        icon: require("./images/com_icon2.png"),
    },
    {
        id: 4,
        name: "Camp",
        icon: require("./images/com_icon2.png"),
    },

]



export const communityReels = [{
        id: 1,
        name: "",
        post_pic: require("./images/com_status1.png"),
        user_photo: require("./images/photo1.jpg"),
    },
    {
        id: 2,
        name: "",
        post_pic: require("./images/exphoto3.jpg"),
        user_photo: require("./images/photo7.jpg"),
    },
    {
        id: 3,
        name: "",
        post_pic: require("./images/exphoto2.jpg"),
        user_photo: require("./images/photo6.jpg"),
    },
    {
        id: 4,
        name: "",
        post_pic: require("./images/exphoto1.jpg"),
        user_photo: require("./images/photo5.jpg"),
    },
    {
        id: 5,
        name: "",
        post_pic: require("./images/exphoto4.jpg"),
        user_photo: require("./images/photo4.jpg"),
    },
    {
        id: 6,
        name: "",
        post_pic: require("./images/com_status2.png"),
        user_photo: require("./images/photo3.jpg"),
    },
]

export const communityGroups = [{
        id: 10,
        name: "Multimedia",
        groupImage: require('./images/exphoto1.jpg'),
        friendsInGroup: [{
                id: 20,
                name: "Annette Orator",
                photo: require("./images/photo3.jpg"),
            },
            {
                id: 30,
                name: "Tracy Otello",
                photo: require("./images/photo2.jpg"),
            },
            {
                id: 40,
                name: "Tracy Daniel",
                photo: require("./images/photo4.jpg"),
            },
        ]
    },
    {
        id: 50,
        name: "Nubreeed",
        groupImage: require('./images/exphoto4.jpg'),
        friendsInGroup: [{
                id: 60,
                name: "Daniella Ogbon",
                photo: require("./images/photo4.jpg"),
            },
            {
                id: 70,
                name: "Susan Otello",
                photo: require("./images/photo5.jpg"),
            },
            {
                id: 80,
                name: "Anita Dee",
                photo: require("./images/photo4.jpg"),
            },
        ]
    },
    {
        id: 90,
        name: "Choir",
        groupImage: require('./images/exphoto3.jpg'),
        friendsInGroup: [{
                id: 100,
                name: "Daniella Ogbon",
                photo: require("./images/photo1.jpg"),
            },
            {
                id: 110,
                name: "Susan Otello",
                photo: require("./images/photo2.jpg"),
            },
            {
                id: 120,
                name: "Anita Dee",
                photo: require("./images/photo3.jpg"),
            },
        ]
    },


]


export const popularCategoriesList = [{
        id: 1,
        name: "Living By The Word",
    },
    {
        id: 2,
        name: "The Everyday Champion",
    },
    {
        id: 3,
        name: "His Sacrificial Love",
    },
    {
        id: 4,
        name: "Living By The Word",
    },
    {
        id: 5,
        name: "The Everyday Champion",
    },
    {
        id: 6,
        name: "His Sacrificial Love",
    },
    {
        id: 7,
        name: "Prayer and Fasting",
    },
    {
        id: 8,
        name: "The Power of Tithes and Offering",
    },
]



export const hotDealsBookList = [{
        id: 1,
        name: "Living By The Word",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 2,
        name: "The Everyday Champion",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 3,
        name: "His Sacrificial Love",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 4,
        name: "Living By The Word",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 5,
        name: "The Everyday Champion",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 6,
        name: "His Sacrificial Love",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 7,
        name: "Prayer and Fasting",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
    {
        id: 8,
        name: "The Power of Tithes and Offering",
        author: "Pastor Jeff",
        image: require("../assets/images/bookSalesImage.png"),
    },
]



export const userFinance = {
    username: "ASHLEY DOE",
    account_balance: 430,
    account_last_digits: "******3389",
    profile_photo: chat1,

    recent_transaction: [{
            id: 1,
            type: "TITHE",
            amoount: 100000,
            date: "June 4",
        },
        {
            id: 2,
            type: "OFFERING",
            amoount: 200,
            date: "May 4",
        },
        {
            id: 3,
            type: "TITHE",
            amoount: 10000,
            date: "Feb 4",
        },
        {
            id: 4,
            type: "OFFERING",
            amoount: 500,
            date: "Jan 4",
        },
    ]

}


export const userSearchedVideo = {
    profile_photo: chat1,
    searches: [
        {
            id: 20,
            name: "SON OF MAN",
            photo: require("./images/photo3.jpg"),
        },
        {
            id: 30,
            name: "SON OF MAN",
            photo: require("./images/photo2.jpg"),
        },
        {
            id: 40,
            name: "SON OF MAN",
            photo: require("./images/photo4.jpg"),
        },
    ]
}


// For Reels

export const SearchData = [
    {
        id: 0,
        images: [
            require("./images/photo2.jpg"),
            require("./images/photo4.jpg"),
            require("./images/photo3.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
            require("./images/photo3.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
            require("./images/photo3.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
        ]
    },
    {
        id: 2,
        images: [
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
            require("./images/photo2.jpg"),
            require("./images/photo4.jpg"),
            require("./images/photo3.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
            
        ]
    },
    {
        id: 3,
        images: [
            require("./images/photo4.jpg"),
            require("./images/photo3.jpg"),
            require("./images/photo3.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/photo2.jpg"),
            require("./images/photo4.jpg"),
            require("./images/exphoto2.jpg"),
            require("./images/exphoto1.jpg"),
            require("./images/exphoto3.jpg"),
        ]
    },

];


// Reels Video Data
export const reelsVideosData = [
    {
        id: 1,
        video: require("./videos/myshortVideo.mp4"),
        title: "Peter School",
        description: "This is a good description... Yo!!!",
        likes: '250k',
        isLiked: true,
        postedBy: {
            name: "tech_wizzdom",
            photoURL: require("./images/photo1.jpg"),
            followers: [
                {
                    id: 1,
                    name: "DannyJ",
                    photoURL: require("./images/photo1.jpg")
                },
                {
                    id: 2,
                    name: "JOY",
                    photoURL: require("./images/photo3.jpg")
                },
                {
                    id: 3,
                    name: "Daniella",
                    photoURL: require("./images/photo4.jpg")
                },
            ]
        }
    },
    {
        id: 2,
        video: require("./videos/anotherShort.mp4"),
        title: "Paula Pablo",
        description: "Yeyeyeye!!! This is a good description...",
        likes: '250k',
        isLiked: false,
        postedBy: {
            name: "tech_wizzdom",
            photoURL: require("./images/photo2.jpg"),
            followers: [
                {
                    id: 4,
                    name: "DannyJ",
                    photoURL: require("./images/photo1.jpg")
                },
                {
                    id: 3,
                    name: "JOY",
                    photoURL: require("./images/photo3.jpg")
                },
                {
                    id: 2,
                    name: "Daniella",
                    photoURL: require("./images/photo4.jpg")
                },
            ]
        },

    },
    {
        id: 3,
        video: require("./videos/myshortVideo.mp4"),
        title: "Love Cure",
        description: "I love you dear.",
        likes: '330k',
        isLiked: true,
        postedBy: {
            name: "tech_wizzdom",
            photoURL: require("./images/photo3.jpg"),
            followers: [
                {
                    id: 7,
                    name: "DannyJ",
                    photoURL: require("./images/photo1.jpg")
                },
                {
                    id: 6,
                    name: "JOY",
                    photoURL: require("./images/photo3.jpg")
                },
                {
                    id: 5,
                    name: "Daniella",
                    photoURL: require("./images/photo4.jpg")
                },
            ]
        }
    },
]






