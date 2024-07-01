import project1 from '../assets/project/p1.png';
import project2 from '../assets/project/p2.png';
import project3 from '../assets/project/p3.png';
import project4 from '../assets/project/p4.png';
import project5 from '../assets/project/p5.png';
import project6 from '../assets/project/p6.png';
import project7 from '../assets/project/p7.png';
import project8 from '../assets/project/p8.png';
export const projects = [
      {
        id: 1,
        title: 'TravelHub',
        description: 'This is Website made with the help of React and NodeJs. Here you can find different tour pacakages and booking for the same can be done. Also Stripe Payment integration is done. You can see your bookings also in Profile section with the status of booking.Also, Chatbot is integrated.',
        image: project1,
        GitHub: 'https://github.com/anurag-2024/TravelHub',
        techStack: ['React', 'NodeJs', 'MongoDB', 'Stripe'],
        live: 'https://travel-hub-ruddy.vercel.app/'
      },
      {
        id: 8,
        title: 'CryptEase',
        description:'This project is a comprehensive Decentralized Finance (DeFi) Lending Platform where users can sign up, deposit funds using Razorpay, take loans, repay loans, invest in various cryptocurrencies, mint NFTs by watching videos, and buy/sell NFTs on the platform.',
        image: project8,
        GitHub: 'https://github.com/anurag-2024/CryptEase',
        techStack: ['MERN', 'Solidity','Ethereum','Razorpay'],
        live: 'https://crypt-ease.vercel.app/'
      },
      {
        id: 3,
        title: 'IIITU Website',
        description: 'This is a website made for my college IIIT Una which was a team project. Here you can find all the information about the college and also you can see the faculty and students of the college. Also, you can see the different clubs and societies of the college.',
        image: project3,
        GitHub: 'https://github.com/anurag-2024/iiitu-website',
        techStack: ['React', 'NodeJs', 'MongoDB'],
        live: 'https://iiitu-website.vercel.app/'
      },
      {
        id: 2,
        title: 'EduVibe',
        description: 'Here you can find different courses related to different fields and if you want to study from the course just add it to cart and do the payment and then enjoy your lessons.For payment razorpay is used so you can have multiple options to do payment. You can see your enrolled courses also in Profile section with the status of course.',
        image: project2,
        GitHub: 'https://github.com/anurag-2024/EduVibe',
        techStack: ['React', 'NodeJs', 'MongoDB']
      },
      {
        id: 4,
        title: 'Instagram Clone',
        description: 'This is a web clone of Instagram made with the help of React and NodeJS. Here you can post images and see the posts of other users. Also, you can like and comment on the posts. Also, you can see the profile of other users. It is very similar to Instagram Web and tried to replicate many functionality of Instagram Web.',
        image: project4,
        GitHub: 'https://github.com/anurag-2024/Instagram-Clone',
        techStack: ['React', 'NodeJs', 'MongoDB']
      },
      {
        id: 6,
        title: 'Portfolio',
        description: 'This is a portfolio website made with the help of React. Here you can find all the information about me and also you can see my projects and blogs. You can also contact me through the contact form. Also, you can see my resume and download it.',
        image: project7,
        GitHub: '',
        techStack: ['React', 'API']
      },
      {
        id: 5,
        title: 'BingeIt',
        description: 'This is a website made for movie and tv shows lovers. Here they can find latest and trending movies or tv shows. They can get movies/tv shows using many filters available in the website and they can see whole decription of the movie thier star cast, director, available languages etc details aboit each movies or tv shows.',
        image: project5,
        GitHub: 'https://github.com/anurag-2024/BingeIt',
        techStack: ['React', 'API'],
        live: 'https://binge-it.vercel.app/'
      },
      {
        id: 7,
        title: 'Login Signup',
        description: 'Here you can login and signup. Also, you can see the error message if you enter wrong credentials. After login, you can see the dashboard where you can update your details and also you can see the logout button. Used tokens for authentication and also used local storage for storing the token.',
        image: project6,
        GitHub: 'https://github.com/anurag-2024/Login-Signup',
        techStack: ['React', 'NodeJs', 'MongoDB']
      }
]

export default projects;