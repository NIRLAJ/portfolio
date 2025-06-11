import React from 'react';
import star5 from '../assets/Images/5star.png'
import LeaderBoard from '../assets/Images/LeaderBoard.png'
import codeRelay from '../assets/Images/CodeRelay.png'
import Leetcode from '../assets/Images/Leetcode.png'
import Hacktrack from '../assets/Images/Hacktrack.png'


export const achievementData = {
    bio : "When life gives you lemons, make lemonade. I have always believed in this quote and have tried to make the most of every opportunity that comes my way",
    achievements : [
        {
            id : 1,
            title : '5 star in C++',
            details : 'Achived 5 star at HackerRank',
            date : '',
            field : 'Coding',
            image : star5
        },
        {
            id : 2,
            title : 'DSA Coding Quiz',
            details : 'Secure 53rd Rank out of 1,115',
            date : '',
            field : 'Coding',
            image : LeaderBoard
        },
        {
            id : 3,
            title : 'Code Relay Competition at Tech Invent',
            details : 'Winner of Code Relay Competition',
            date : '',
            field : 'Coding',
            image : codeRelay
        },
        {
            id : 3,
            title : 'Hack Track Competition',
            details : 'Secure Second Position in Hacktrack Held in Chandigarh University',
            date : '',
            field : 'Computer Science and Coding',
            image : Hacktrack
        },
        {
            id : 4,
            title : 'Solve 430+ Problems',
            details : 'Solved 430+ Problems on Leetcode',
            date : '',
            field : 'Coding',
            image : Leetcode
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/