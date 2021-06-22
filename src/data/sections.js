import Section from '../models/section';
import CT_FL from '../img//MARIUSZ_PODGÓRSKI_CTFL_2021_EN.pdf'
import Certificate from '../components/Certificate'
import {
    FaLaptopCode,
    FaUser,
    FaPhoneAlt
} from "react-icons/fa";


const SECTIONS = [
    new Section(
        'About me',
        '',
        FaUser
    ),
    new Section(
        'Skills',
        "I designed a website using a wide range of technologies and solutions that I fully understand (HTML, React, Redux, React Native, Javascript, Typescript, CSS, SASS, Bootstrap, Node.js, Express, Mongoose, Firestore, Mongo.db, SQL, Git, Selenium, Python, Pytest,). I feel confident using them and believe I am suitable for Web Developer/Software QA Engineer roles. When I design and build applications I often use new technologies and libraries that I haven't used before. Thanks to this approach I expand my knowledge and familiarise myself with new tools, and keep up to date in the fast changing space of web development.",
        ''
    ),
    new Section(
        'Projects',
        '',
        FaLaptopCode

    ),
    new Section(
        'Contact',
        '',
        FaPhoneAlt
    ),
];

export default SECTIONS;