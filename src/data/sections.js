import Section from '../models/section';
import {
    FaLaptopCode,
    FaUser,
    FaPhoneAlt
} from "react-icons/fa";


const SECTIONS = [
    new Section(
        'About me',
        'The foundation of my continuous development is self studying. I am a stakeholder orientated and motivated individual, who can provide a high level website development and maintenance service. I am proactive, eager to lend a hand and learn from others so that I can engage with all activities. I deliver an excellent web development experience utilising the latest technologies. I am keen to join an organisation where I will be able to develop and expand my skillset.',
        FaUser
    ),
    new Section(
        'Skills',
        "I designed a website using a wide range of technologies and solutions that I fully understand (HTML, React, Redux, React Native, Javascript, Typescript, CSS, SASS, Bootstrap, Node.js, Express, Mongoose, Firestore, Mongo.db, SQL, Git). I feel confident using them and believe I am suitable for a wide range of Web Developer roles. When I design and build applications I often use new technologies and libraries that I haven't used before. Thanks to this approach I expand my knowledge and familiarise myself with new tools, and keep up to date in the fast changing space of web development.",
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