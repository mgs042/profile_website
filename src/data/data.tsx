import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'M Gouri Sankar\'s Portfolio',
  description: "Portfolio Website of M Gouri Sankar",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm M Gouri Sankar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a fresher from <strong className="text-stone-100">Cochin University of Science and Technology</strong>, 
        looking to kickstart my career in the field of <strong className="text-stone-100">Information Technology</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">Tech</strong> enthusiast,
        with a passion for learning and experimenting with different domains.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Diligent and ambitious student with a strong
academic record, consistently demonstrating a
commitment to excellence and a passion for
learning. Strong creative and analytical skills. Team
player with an eye for detail.`,
  aboutItems: [
    {label: 'Location', text: 'Kerala, India', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Listening Music, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'B.Tech in Information Technology', Icon: AcademicCapIcon},
    {label: 'University', text: 'Cochin University of Science and Technology', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Hindi',
        level: 6,
      },
      {
        name: 'Malayalam',
        level: 10,
      },
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C#',
        level: 7,
      },
      {
        name: 'C++',
        level: 5,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'Django',
        level: 6,
      },
      {
        name: 'Flask',
        level: 7,
      },
      {
        name: 'PHP',
        level: 4,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Linux',
        level: 6,
      },
      {
        name: 'SQL',
        level: 4,
      },
      {
        name: 'Networking',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
 
  {
    title: 'Google Cybersecurity Proffessional Certificate',
    description: 'from Coursera',
    url: 'https://coursera.org/share/a3d67672293e5637d40f9ab8f009af70',
    image: porfolioImage7,
  },
  {
    title: 'Scientific Computing with Python',
    description: 'from freeCodeCamp',
    url: 'https://freecodecamp.org/certification/fccbd7fb318-b127-4e65-9839-25816c75fdfb/scientific-computing-with-python-v7',
    image: porfolioImage2,
  },
  {
    title: 'Aquametrics',
    description: 'An IoT Based Water Quality Monitoring System',
    url: 'https://aqua-f.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Ethical Hacking Training',
    description: 'from Internshala',
    url: 'https://drive.google.com/file/d/1TCxTjeqkYZVl9hBI5J8nRCAuee_YcAAd/view',
    image: porfolioImage9,
  },
  {
    title: 'TrashDash',
    description: 'A set of flutter apps that implement an on-demand waste management system',
    url: 'https://drive.google.com/drive/folders/1_8W9Wyd-6HU2AZq9D-83U-Cjqe3qjn8I?usp=sharing',
    image: porfolioImage6,
  },
  {
    title: 'Foundational C# with Microsoft',
    description: 'from freeCodeCamp',
    url: 'https://www.freecodecamp.org/certification/fccbd7fb318-b127-4e65-9839-25816c75fdfb/foundational-c-sharp-with-microsoft',
    image: porfolioImage5,
  },
  
  
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020-2024',
    location: 'Cochin University of Science and Technology',
    title: 'BTech in Information Technology',
    content: <p>CGPA: <strong>9.53</strong></p>,
  },
  {
    date: 'July 2020',
    location: 'Carmel CMI School',
    title: 'XII (CBSE)',
    content: <p>Percentage: <strong>97.4</strong></p>,
  },
  {
    date: 'May 2018',
    location: 'Carmel CMI School',
    title: 'X (CBSE)',
    content: <p>Percentage: <strong>96.4</strong></p>,
  },
];



/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I always look forward to hearing from you! Whether you have questions, feedback, or just want to say hi, there are several ways you can reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'mundancherygourisankar@gmail.com',
      href: 'mailto:mundancherygourisankar@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kerala, India',
      href: 'https://www.google.com/maps/place/Tirur,+Kerala/@10.91366,75.8353571,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba7b18ce2f8645d:0x460f5865302bbabc!8m2!3d10.9166586!4d75.9245118!16zL20vMDhzeXlz?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@mgs042',
      href: 'https://www.instagram.com/mgs042/',
    },
    {
      type: ContactType.Github,
      text: 'mgs042',
      href: 'https://github.com/mgs042',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mgs042'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/m-gouri-sankar-5220a8237/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mgs042/'},
];
