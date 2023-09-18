export const projects = [
  {
    title: "TODO application",
    desc: "TODO app based on the Laravel Framework with functionality such as: user roles, CRUD, " +
        "fulltext search, nested tasks with unlimited nesting level, flash messages, filters,",
    tags: [
      {
        name: "Laravel v8.83",
        color: "#60a5fa",
      },
      {
        name: "JavaScript",
        color: "green-600",
      },
      {
        name: "SQL",
        color: "green-600",
      },
    ],
    img: "todo_app.png",
    link: "https://todo.vodolaz.site/",
    code: "https://github.com/vodolserge/todo-app",
  },
  {
    title: "Digital Blog",
    desc: "A blog based on the Laravel Framework with an Admin Panel and CKEditor, " +
        "implementing basic CRUD operations and Search functionality.",
    descOptions: [
      'For access to the admin panel: ',
      'Go to `/login` route and login as Admin with credentials:',
      '✅ Login: admin@admin.net',
      'Password: 12345',
      '🚫 For Logout -> Go to - `/logout`'
    ],
    tags: [
      {
        name: "Laravel v7.21.0",
        color: "#60a5fa",
      },
      {
        name: "JavaScript",
        color: "green-600",
      },
      {
        name: "SQL",
        color: "green-600",
      },
      {
        name: "CKEditor",
        color: "green-600",
      },
      {
        name: "CKFinder",
        color: "green-600",
      },
    ],
    img: "laravel-blog.png",
    link: "https://blog.vodolaz.site/",
    code: "https://github.com/vodolserge/lara-blog/tree/release_23.3",
  },
  {
    title: "Shop tiny app",
    desc: "A small application - Shopping Cart Store. A brief exploration of the React library.",
    tags: [
      {
        name: "React JS",
        color: "red-600",
      },
      {
        name: "JavaScript",
        color: "green-600",
      },
      {
        name: "external API",
        color: "green-600",
      },
    ],
    img: "shop_react.png",
    link: "https://vodolserge.github.io/react-shop/",
    code: "https://github.com/vodolserge/react-shop",
  },
  {
    title: "Movies tiny app",
    desc: "A small application - `Movies`. A brief exploration of the React library: hooks.",
    tags: [
      {
        name: "React JS",
        color: "red-600",
      },
      {
        name: "JavaScript",
        color: "green-600",
      },
      {
        name: "external API",
        color: "green-600",
      },
    ],
    img: "movies_react.png",
    link: "https://vodolserge.github.io/react-tiny-app-movies/",
    code: "https://github.com/vodolserge/react-tiny-app-movies/tree/release_23.3",
  },
  {
    title: "Quiz: CDL Prep - General Knowledge",
    desc: "\"Quiz\" application for practicing the CDL exam. All questions are up-to-date for the year 2023, " +
        "and explanations are provided for all correct answers. Translation to another language is also " +
        "implemented for better comprehension and convenience.",
    tags: [
      {
        name: "React JS",
        color: "red-600",
      },
      {
        name: "JavaScript",
        color: "green-600",
      },
    ],
    img: "cdl_react.png",
    link: "https://vodolserge.github.io/cdl-test/",
    code: "https://github.com/vodolserge/cdl-test/tree/release_23.3",
  }
];
