Hi!

That`s a homework for E13 unit.



**There are:**
- setted webpack.config for development/production;
- setted Husky (pre-commit check);
- setted JSON-server;
- setted Eslint;

Also there are two different output directories for two modes (dev/prod).



**In project implemented following:**
- HMR while app works in development mode;
- possibility start app by development or production environment;
- start dummy server with some data inside;
- real-time errors checking (if file`s autosave included and turned on at your IDE);
- make request and get some data from server;
- make request for create new object and send to server;
- see error`s notification at the page if server unavailable;


**Before start:**
- run "npm install" at the terminal for required environment;
- check command list in package.json. Following are available:
  

    // **for app compilation**
  
    "build": "webpack --config webpack.config.dev.js",
  
    "final-build": "webpack --config webpack.config.prod.js",
  

    // **for separated webpack-server launch (depends from config)**
  
    "start-dev": "webpack serve --config webpack.config.dev.js",
  
    "start-prod": "webpack serve --config webpack.config.prod.js",
  

    // **for joint launch user`s app + server**
  
    "start:app-dev-db": "concurrently \"npm run start-dev\" \"npx json-server --watch database.json\"",
  
    "start:app-db": "concurrently \"npm run start-prod\" \"npx json-server --watch database.json\""
