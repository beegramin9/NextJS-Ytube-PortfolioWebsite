/* logic의 content, 즉 변하지 않는 Constants */
//! Projects Component
export const arrayOfProject = [
  {
    title: 'Gatsby Dev Blog',
    description: "I could not deny how much of a great help it has been from many other's dev Blogs. So I decided to make my own. \nThis blog is made with Gatsby and gets access to data through GraphQL. No, I did not just decide to use premaid-blog providing services like devDojo, I wanted make mine on my own! \nThe contents always see to be updated in real time, and you can always come over to check out 😊",
    image: '/images/projects/Blog.gif',
    tags: ['https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=Gatsby&logoColor=white',
    'https://img.shields.io/badge/GraphQL-d90f80?style=flat-square&logo=GraphQL&logoColor=white', 
    'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white'],
    link: 'https://www.google.com/',
    readme: 'https://github.com/beegramin9/Gatsby-Skillthrive-Blog',
    id: 0,
  },
  {
    title: 'Movie Archive Webapp',
    description: "This project works on a movie list api, added with custom responsive design.\nIt follows the conventional React folder structure which makes it scalable and sustainable.\nThere are many reusable features such as custom Axios&pagination Hook, styled components, routers and loading spinner.\nThe social media icons at the header and footer lead to my social accounts, and About page contains a prologue of this project.",
    image: '/images/projects/Movieapp.gif',
    tags: ['https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white', 
          'https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white', 
          'https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white'],
    link: 'https://beegramin9.github.io/ReactJS-Nomad-MovieApp/#/',
    readme: 'https://github.com/beegramin9/ReactJS-Nomad-MovieApp',
    id: 1,
  },
  {
    title: 'Paintbrush Clone',
    description: "Realizing how much of a skill booster cloning practice is, I wanted to continue on cloning projects but needed a unique one that would make my work stand out.\nThis clone is a mock-up of Window paint brush, made with MDN Canvas API. Main features are drawing, filling, erasing and reseting, all of which are interactive with the colors off of the buttons.",
    image: '/images/projects/Paintbrush.gif',
    tags: ['https://img.shields.io/badge/MDNCanvas-01756c?style=flat-square&logo=MDN Web Docs&logoColor=white',
    'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white', 
    'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white', 
    'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white'],
    link: 'https://beegramin9.github.io/HCJ-Nomad-PaintBrushClone/',
    readme: 'https://github.com/beegramin9/HCJ-Nomad-PaintBrushClone',
    id: 2,
  },
  {
    title: 'Pizza recipe app',
    description: "@TheNetNinja!\nIt occured to me somehow, that It would be awesome to let my alert & popup components a little animation and provide users a better experience.\nThen I found out Framer Motion React library and perfect crash course on Youtube🎞, TheNetNinja. \n And here it is!",
    image: '/images/projects/Pizza.gif',
    tags: ['https://img.shields.io/badge/Framer-df0eb1?style=flat-square&logo=Framer&logoColor=white',
          'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white', 
          'https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white'],
    link: 'https://beegramin9.github.io/React-NetNinja-FramerMotion/',
    readme: 'https://github.com/beegramin9/React-NetNinja-FramerMotion',
    id: 3,
  },
  {
    title: 'Momentum Clone',
    description: "This project started from a plain CSS-less todo-list tutorial, improved after to be a Momentum Clone.\nThe most well-marked new feature is the separated pending and finished list, where todos are transferable onto another section, data persistence supported by Local Storage.\nOther new features are Alert, Weather and background image API which will be reusable at any needed time, name form and clock with cool CSS.",
    image: '/images/projects/Momentum.gif',
    tags: ['https://img.shields.io/badge/LocalStorage-FF3621?style=flat-square&logo=Databricks&logoColor=white',
          'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white', 
          'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white', 
          'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white'],
    link: 'https://beegramin9.github.io/HCJ-Nomad-MomentumClone/',
    readme: 'https://github.com/beegramin9/HCJ-Nomad-MomentumClone',
    id: 4,
  },
  /* 
  {
    title: 'Calculator Clone',
    description: "The calculator functionality is pulled through by Javascript ES6 Class, which made easier to store and call the values and operator functions the separately.\nThe number blocks and button blocks are constructed within CSS3 grid, flex, which made easier to remain intact when the web moves responsively.",
    image: '/images/projects/Calculator.gif',
    tags: ['https://img.shields.io/badge/ES6-004027?style=flat-square&logo=JSON&logoColor=white',
    'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white', 
    'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white', 
    'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white'],
    link: 'https://beegramin9.github.io/HCJ-Nomad-CalculatorClone/',
    readme: 'https://github.com/beegramin9/HCJ-Nomad-CalculatorClone',
    id: 0,
  },
  */
];

export const arrayOfTimeLine = [
  { year: '2014', text: 'Majored in Mathematics Education, Inha Univ, Korea', },
  { year: '2018', text: 'Exchange student in Oldenburg Univ, Germany', },
  { year: '2019', text: 'First started programming with Python', },
  { year: '2020', text: 'Completed coding bootcamp at Hoseo training college, Korea', },
  { year: '2021', text: 'Building my own projects', },
];

export const arrayOfAccomplishmentData = [
  { number: '2+', text: 'Competent technology stacks', },
  { number: 777, text: 'Total Github commits', },
  { number: 20, text: 'Countries I have travelled'},
  { number: 2, text: 'Bilingual', }
];

/* 
https://heropy.blog/2018/01/10/netlify/
*/