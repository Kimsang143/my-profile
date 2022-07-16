import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    nickName: "Jim Jim",
    firstName: "NHIK",
    lastName: "Kimsang",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Cambodia'
        },
        {
            emoji: "💼",
            text: "Back-End Developer at EliteVigour"
        },
        {
            emoji: "📧",
            text: "nhik.kim.sang@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/love.honey.3386",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://www.instagram.com/jimjim_369/?hl=en",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://www.linkedin.com/in/kim-sang-jimjim-89a6a9152",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/s_sangkim",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Kimsang. I'm a Back-End Developer. I studied ICT at Institute of Technology of Cambodia, I enjoy long watch anime and new teachnology. You should hire me!",
    skills:
        {
            proficientWith: ['React Native', 'React JS', 'version control', 'Docker', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator'],
            programming_language: ['Python', 'Javascript', 'Node js'],
            framework: ['Django', 'React Native', 'React JS', 'Socket io'],
            DevOp: ['Docker', 'Ubuntu', 'Centos 7', 'Nginx'],
            tool: ['Figma'],
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "Project 1",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     image: mock1
        // },
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     image: mock2
        // }
        
    ]
}