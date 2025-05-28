import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import Calculator from '../assets/Images/Calculator.png'
import WeatherForecast from '../assets/Images/WeatherForecast.png'
import Visitly from '../assets/Images/Visitly.png'
import PersonalPortfolio from '../assets/Images/PersonalPortfolio.png'

export const projectsData = [
    
    {
        id: 1,
        projectName: 'Calculator',
        projectDesc: 'Developed responsive and dynamic calculator',
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/Aryan-chaudhry/Projects/tree/main/Calculator',
        demo: 'https://aryan2629-calculator.netlify.app/',
        image: Calculator
    },{
        id: 2,
        projectName: 'Weather Forecast System',
        projectDesc: 'Developed a React-based weather app with 5-day forecasts, real-time tsunami/earthquake alerts (USGS), AI-generated weather warnings, interactive 3D globe, and custom location support via OpenCage API.',
        tags: ['React.js', 'Open Weather Map', 'OpenCage', 'USGS Api' ,'TailwindCSS', 'Javascript'],
        code: 'https://github.com/Aryan-chaudhry/Weather-Forecast',
        demo: 'https://weather-forecast-aryan.netlify.app/',
        image: WeatherForecast
    },
    {
        id: 3,
        projectName: 'Visitly, The Accomodation Platform',
        projectDesc: 'This is a clone of an e-commerce website sportsjam.in. My contribution to this project was the product catalogue page and its features, like sorting and filtering. The rest of the project was built by various members of the group',
        tags: ['Ejs', 'Node.js','Express.js', 'MongoDB', 'Rest Api', 'Cloudinary', 'Javascript', 'Passport-Google-OAuth2', 'Facebook OAuth'],
        code: 'https://github.com/Aryan-chaudhry/Visitly',
        demo: 'https://visitly-live.onrender.com/listings',
        image: Visitly
    },
    {
        id: 4,
        projectName: 'Personal Portfolio',
        projectDesc: 'If you want to Know who i am than this is the way',
        tags: ['React.js'],
        code: 'https://github.com/Aryan-chaudhry/PortFolio',
        demo: 'https://aryan-chaudhry.github.io/',
        image: PersonalPortfolio
    }, 
    // {
    //     id: 5,
    //     projectName: 'My Wallet',
    //     projectDesc: 'Are you getting worry that you cant handle income and expense :( Dont worry here is your "myWallet" which track your income and expense securly also give daily report,  you can also download them when every you want :)',
    //     tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Api'],
    //     code: 'https://github.com/Aryan-chaudhry/Weather-Forecast',
    //     demo: 'https://weather-forecast-aryan.netlify.app/',
    //     image:""
    // },   
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/