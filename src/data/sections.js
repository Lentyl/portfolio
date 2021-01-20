import Section from '../models/section';
import {
    FaLaptopCode,
    FaUser,
    FaPhoneAlt
} from "react-icons/fa";


const SECTIONS = [
    new Section(
        'About me',
        'Foundation of my continuous development is self studying. I am stakeholder orientated and motivated individual, who can provide a high development and maintenance process. I am proactive, eager to lend a hand and learn from others so that I can engage with all activities. I deliver excellent web development experience with modern technologies. I am keen to join an organisation where I will be able to develop and expand my skillset.',
        FaUser
    ),
    new Section(
        'Skills',
        "I designed website using a wide range of technologies and solutions that I studied. I feel much more confident with them now and became a better fit for the Web Developer role. When I design and build application I use a wide range of new technologies ad libraries that I haven't used before. Thanks to this approach I expand my knowledge and familiarise myself with new tools.",
        ''
    ),
    new Section(
        'Projects',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
        FaLaptopCode

    ),
    new Section(
        'Contact',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
        FaPhoneAlt
    ),
];

export default SECTIONS;