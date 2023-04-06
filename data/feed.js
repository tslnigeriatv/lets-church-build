const Person1 = require("./images/photo1.jpg");
const Person2 = require("./images/photo2.jpg");
const Person3 = require("./images/photo3.jpg");
const Person4 = require("./images/photo4.jpg");
const Person5 = require("./images/photo5.jpg");
const Person6 = require("./images/photo6.jpg");
const Person7 = require("./images/photo7.jpg");

export const feedData = [
    // the photoCount property here is not relevant when dealing with 
    // a real database since it can also be gotten from photos.length
    {
        "id": 1,
        "name": "Lydia",
        "photoCount": 3,
        "type": "me",
        "image": Person1,
        "photos": []
    },
    {
        "id": 2,
        "name": "Mariam",
        "photoCount": 3,
        "type": "friend",
        "image": Person2,
        "photos": []
    },
    {
        "id": 3,
        "name": "Lizzy",
        "photoCount": 1,
        "type": "friend",
        "image": Person3,
        "photos": []
    },
    {
        "id": 4,
        "name": "Faith",
        "photoCount": 3,
        "type": "friend",
        "image": Person4,
        "photos": []
    },
    {
        "id": 5,
        "name": "Jane",
        "photoCount": 2,
        "type": "friend",
        "image": Person5,
        "photos": []
    },
    {
        "id": 6,
        "name": "Janneth",
        "photoCount": 2,
        "type": "friend",
        "image": Person6,
        "photos": []
    },
    {
        "id": 7,
        "name": "Jephthah",
        "photoCount": 3,
        "type": "friend",
        "image": Person7,
        "photos": []
    }
];


// Kids section
const kids1 = require("./images/kids1.png");
const kids2 = require("./images/kids2.png");
const kids3 = require("./images/kids3.png");
const kids4 = require("./images/kids4.png");
const kidsImage = require("./images/kidsImage.png");



export const kidsVideos = {
    name: "WE ARE THE LIGHT",
    image: kidsImage,
    profile_photo: Person3,

    category: [
        {
            id: 372673,
            name: "Kids Feed",
            videos: [
                {
                    id: 1,
                    name: "SHOOL OF THE WORD",
                    photo: kids1,
                    video: ""
                },
                {
                    id: 2,
                    name: "WE ARE THE LIGHT",
                    photo: kids2,
                    video: ""
                },
                {
                    id: 3,
                    name: "TEENS NINJA",
                    photo: kids3,
                    video: ""
                },
                {
                    id: 4,
                    name: "WE ARE THE LIGHT",
                    photo: kids4,
                    video: ""
                },
            ]
        },
        {
            id: 287377,
            name: "Kids Gospel",
            videos: [
                {
                    id: 1,
                    name: "SHOOL OF THE WORD",
                    photo: kids4,
                    video: ""
                },
                {
                    id: 2,
                    name: "WE ARE THE LIGHT",
                    photo: kids3,
                    video: ""
                },
                {
                    id: 3,
                    name: "TEENS NINJA",
                    photo: kids2,
                    video: ""
                },
                {
                    id: 4,
                    name: "WE ARE THE LIGHT",
                    photo: kids1,
                    video: ""
                },
            ]
        },
        {
            id: 28373,
            name: "Parental Guidance",
            videos: [
                {
                    id: 1,
                    name: "SHOOL OF THE WORD",
                    photo: kids2,
                    video: ""
                },
                {
                    id: 2,
                    name: "WE ARE THE LIGHT",
                    photo: kids3,
                    video: ""
                },
                {
                    id: 3,
                    name: "TEENS NINJA",
                    photo: kids1,
                    video: ""
                },
                {
                    id: 4,
                    name: "WE ARE THE LIGHT",
                    photo: kids4,
                    video: ""
                },
            ]
        },
    ]

    
}







