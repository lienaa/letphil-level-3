# Level 3 Notes

## React Intro

Used to render only the parts of the page that needs to be changed, instead of rerendering the entire page.

1. Set up environment

   - `npm create vite@latest .`
   - Select framework: React
   - Install [Axios](https://axios-http.com/docs/intro)  
     `npm i axios`
   - Install [Tailwind](https://tailwindcss.com/docs/installation/using-vite)  
     `npm i tailwindcss @tailwindcss/vite`

     - Configure Vite plugin vite.config.js

     ```js
     import tailwindcss from "@tailwindcss/vite";

     export default defineConfig({
       plugins: [tailwindcss()],
     });
     ```

     - Import Tailwind CSS
       `@import "tailwindcss";`

- Destructuring
- Components

  - Input states without forms

    Create state variable and HTML input on change trigger

    ```jsx
    const [state, setState] = useState("");

    <input>
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
    />
    ```

  - Form input state
    Create state variable and HTML form

    ```jsx
    const [state, setState] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!studentId) return;

        const url = `http://exampleapi.com/${state}`
        const { data } = await axios.get(url);
    }

    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Search<button/>
    </form>
    
    ```

## React Router

## Custom React Hooks

## Zustand + Todo App

State management

## Backend Express Server

### Express Server

1. Set up environment, install packages

   ```powershell
   npm init
   npm i express dotenv
   npm i cors
   ```

2. Include the following in package.json  
   type: module for exporting and importing modules  
   script to start server with node, watch and reload index.js for changes

   ```json
   {
     "type": "module",
     "scripts": {
       "dev": "node --watch index.js"
     }
   }
   ```

   #### index.jsx file

- Import libraries

  ```js
  // Express for backend server and creating endpoints
  import express from "express";
  // Cors for allowing access to this server from another domain
  import cors from "cors";
  ```

- Create Express application object

  Application object is the entire server

  ```js
  const app = express();
  app.listen(3000);

  // Allows for use of methods like
  app.get();
  app.post();
  ```

- Define Middleware - things that run in the middle of a request

  ```js
  app.use(express.json());
  app.use(cors());
  ```

- Create endpoints - web url endpoints

  ```js
  // Get request to '/'
  app.get("/", (req, res) => {
    res.send({ message: "This is the backend" });
  });

  // Get request to '/:id/category/:categoryId'
  app.get("/:id/category/:categoryId", (req, res) => {
    const { id, categoryId } = req.params;
    res.status(200).send({
      message: `The id and category id are: [${id}, ${categoryId}]`,
    });
  });

  const userDB = [
    { id: 1, name: "Tony", age: 12 },
    { id: 2, name: "Joe", age: 14 },
    { id: 3, name: "Larry", age: 15 },
  ];

  // localhost:3000/newUser
  // header: {
  //  Content-Type: "application/jason"
  // }
  // body: {
  //  id:4,
  //  name: "Steve",
  //  age: 18,
  // }

  // Post request to create newUser
  app.post("/newUser", async (req, res) => {
    console.log(req.body);
    const { id, name, age } = req.body;
    await userDB.push({ id, name, age });
    res.status(203).send(userDB);
  });
  ```

- REST Client - for simulating HTTP POST

  ```http
  POST http://localhost:3000/newUser HTTP/1.1
  # Header
  Content-Type: application/json

  # Body
  {
      "id": 4,
      "name": "Tom",
      "age": 20
  }
  ```

## Front End

In App.jsx we can use Axios to GET or POST to our server.

- GET

  ```jsx
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/");
    const data = response.data;
    console.log(data);
  };
  ```

- POST

  ```jsx
  // Structure the object being POST
  const options = {
    headers: {
      ContentType: "application/json",
    },
    body: {
      id: 4,
      name: "Tom",
      age: 15,
    },
  };

  // Include our url, and options.body with POST
  const postData = async () => {
    const response = await axios.post(
      "http://localhost:3000/newUser",
      options.body
    );

    // Response is returned
    // Defined in the POST on the backend
    console.log(response.data);
    setUsers(response.data);
  };
  ```

## Practice/Homework

- Mock API (Pokemon)
- Create an App with 6 end points
  - 3 GETs by ID, Type, Etc.
  - 1 UPDATE, 1 DELETE, 1 CREATE/POST
- Create an account on [Supabase](https://supabase.com/), uses the PostgreSQL language
