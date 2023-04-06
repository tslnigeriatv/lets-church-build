const image01 = require("../../data/images/photo1.jpg");
const image02 = require("../../data/images/photo2.jpg");
const image03 = require("../../data/images/photo3.jpg");
const image04 = require("../../data/images/photo4.jpg");
const image05 = require("../../data/images/photo5.jpg");
const image06 = require("../../data/images/photo6.jpg");
const image07 = require("../../data/images/photo7.jpg");

export const data = [
    {
        id: 1,
        name: "Nonye Chigozie",
        region: "Edo State",
        timePosted: "3 Days Ago", 
        excert: "Sometimes in life, we tend to forget where we're going and only see where we've been that we've been and that leaves us negative.",
        images: [
            { image: image03, id: 1 },
            { image: image02, id: 2 },
            { image: image01, id: 3 }
        ], 
        likes: 166,
        comments: 1,
        profilePoto: image04
    },
    {
        id: 2,
        name: "Nonye Chigozie",
        region: "Edo State",
        timePosted: "3 Days Ago", 
        excert: "Sometimes in life, we tend to forget where we're going and only see where we've been that we've been and that leaves us negative.",
        images: [
            { image: image07, id: 3 },
            { image: image01, id: 4 },
            { image: image02, id: 5 }
        ], 
        likes: 36,
        comments: 6,
        profilePoto: image05
    },
    {
        id: 3,
        name: "Nonye Chigozie",
        region: "Edo State",
        timePosted: "3 Days Ago", 
        excert: "Sometimes in life, we tend to forget where we're going and only see where we've been that we've been and that leaves us negative.",
        images: [
            { image: image01, id: 6 },
            { image: image02, id: 7 },
            { image: image03, id: 3 }
        ], 
        likes: 266,
        comments: 4,
        profilePoto: image06
    }
]