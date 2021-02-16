// Start Arrays
// Projects Array
const projects = [
  {
    name: 'my-goals',
    description: 'No description',
    date: new Date('2021-01-30T03:32:00'),
  },
  {
    name: 'Team Project',
    description: 'goals for first team project',
    date: new Date('2020-12-01T08:00:00'),
  },
  {
    name: 'Personal Project',
    description: 'No description',
    date: new Date('2021-02-02T12:30:00'),
  },
  {
    name: 'Project 4',
    description: 'No description',
    date: new Date('2021-02-04T09:14:00'),
  },
  {
    name: 'NSS-goals',
    description: 'goals to achieve at NSS',
    date: new Date('2021-02-02T10:00:00'),
  },
];

let sortedProjects = [];
// Organizations Array
const organizations = [
  {
    img: "images/orgImgs/oi_nss.png",
    name: "nss-evening-cohort-14",
    repos: 30,
    topFive: ['productCards','petAdoption','sortingHat','gitSub','instaFam'],
  },
  {
    img: "images/orgImgs/oi_org1.png",
    name: "React Ladies",
    repos: 32,
    topFive: ['searchEngine','dataMapper','weatherApp','snowMap','gpsLocator'],
  },
  {
    img: "images/orgImgs/oi_org2.png",
    name: "TN Code Pros",
    repos: 20,
    topFive: ['trafficMap','liveMusicCalendar','restaurantRater','nhlStatsKeeper','barRaterApp'],
  },
  {
    img: "images/orgImgs/oi_org3.png",
    name: "Fortune 500 Devs",
    repos: 27,
    topFive: ['stockModel','facebookUserStats','tiktokAPI','blackRockFunds','appleOptimizer'],
  },
];
// Packages Array
const packages = [
  {
    name: "Docker",
    description:
      "A software platform used for building applications based on containers — small and lightweight execution environments.",
    iconImgSrc: "packagesIcons/Docker.png",
  },
  {
    name: "Apache Maven",
    description:
      "A default package manager used for the Java programming language and the Java runtime environment.",
    iconImgSrc: "packagesIcons/Apache-Maven.png",
  },
  {
    name: "NuGet",
    description:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
    iconImgSrc: "packagesIcons/NuGet.png",
  },
  {
    name: "RubyGems",
    description:
      "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    iconImgSrc: "packagesIcons/RubyGems.png",
  },
  {
    name: "npm",
    description:
      "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    iconImgSrc: "packagesIcons/npm.png",
  },
  {
    name: "Containers",
    description:
      "A single place for your team to manage Docker images and decide who can see and access your images.",
    iconImgSrc: "packagesIcons/Containers.png",
  },
];
// Repos Array
const repos = [
  {
    name: "example-repo",
    description: "This is an example of what a repository will look like.",
  },
  {
    name: "create-your-own-repo",
    description: "Use the form below to create repositories of your own.",
  },
];

const favoriteRepos = [];

// Pins Array
const pins = [
  {
    name: "🖥️ affirmation-generator",
    description:
      "This app randomly generates an affirmation statement. Built by React.js.",
    id: "aaa",
  },
  {
    name: "🖥️ github-clone",
    description: "Powered by HTML, CSS, Vanilla Javascript, Bootstrap.",
    id: "bbb",
  },
  {
    name: "🖥️ accessibility-hacks",
    description: "Snippets to enhance app accessibility.",
    id: "ccc",
  },
  {
    name: "🖥️ m0nicas-portfolio",
    description: "Personal portfolio site, deployed through Netlify.",
    id: "ddd",
  },
];
// End Arrays

export default { projects, sortedProjects, organizations, packages, repos, favoriteRepos, pins };
