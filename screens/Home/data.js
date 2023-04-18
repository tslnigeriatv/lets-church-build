const image01 = require("../../data/images/photo1.jpg");
const image02 = require("../../data/images/photo2.jpg");
const image03 = require("../../data/images/photo3.jpg");
const image04 = require("../../data/images/photo4.jpg");
const image05 = require("../../data/images/photo5.jpg");
const image06 = require("../../data/images/photo6.jpg");
const image07 = require("../../data/images/photo7.jpg");

export const postData = [
    {
        _id: 1,
        name: "Nonye Chigozie",
        region: "Edo State",
        timePosted: "3 Days Ago", 
        excert: "Sometimes in life, we tend to forget where we're going and only see where we've been that we've been and that leaves us negative.",
        images: [
            { image: image03, _id: 1 },
            { image: image02, _id: 2 },
            { image: image01, _id: 3 }
        ], 
        likes: 166,
        comments: [
            {
                _id: 1,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image02,
                type: "friend"
            }
        ],
        profilePoto: image04,
        type: "me",
    },
    {
        _id: 2,
        name: "Nonye Chigozie",
        region: "Edo State",
        timePosted: "3 Days Ago", 
        excert: "Sometimes in life, we tend to forget where we're going and only see where we've been that we've been and that leaves us negative.",
        images: [
            { image: image07, _id: 3 },
            { image: image01, _id: 4 },
            { image: image02, _id: 5 }
        ], 
        likes: 36,
        comments: [
            {
                _id: 1,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image01,
                type: "friend"
            },
            {
                _id: 2,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image02,
                type: "friend"
            },
            {
                _id: 3,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image03,
                type: "friend"
            },
            {
                _id: 4,
                friend: "Mariam Lucy",
                message: "You are right...!",
                image: image04,
                type: "me"
            },
            {
                _id: 5,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image01,
                type: "friend"
            },
            {
                _id: 6,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image02,
                type: "friend"
            },
            {
                _id: 7,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image03,
                type: "friend"
            },
            {
                _id: 8,
                friend: "Mariam Lucy",
                message: "You are right...!",
                image: image04,
                type: "me"
            }
        ],
        profilePoto: image05,
        type: "friend"
    },
    {
        _id: 3,
        name: "Nonye Chigozie",
        region: "Edo State",
        timePosted: "3 Days Ago", 
        excert: "Sometimes in life, we tend to forget where we're going and only see where we've been that we've been and that leaves us negative.",
        images: [
            { image: image01, _id: 6 },
            { image: image02, _id: 7 },
            { image: image03, _id: 3 }
        ], 
        likes: 266,
        comments: [
            {
                _id: 1,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image07,
                type: "friend"
            },
            {
                _id: 2,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image06,
                type: "me"
            },
            {
                _id: 3,
                friend: "Mariam Lucy",
                message: "god is always good to whomever he pleases, all we have to do is live right.",
                image: image05,
                type: "friend"
            }
        ],
        profilePoto: image06,
        type: "friend"
    }
]