# Level 3 Notes

## React Intro

Used to render only the parts of the page that needs to be changed, instead of rerendering the entire page.

1. Set up environment
    - npm create vite@latest .
    - Select framework: React

- Destructuring

## React Router

## Custom React Hooks

## Zustand + Todo App

State management

## Backend Express Server

Express Server

1. Set up environment

    ```powershell
    npm i express
    npm i cors
    ```

2. index.jsx file

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
        app.listen(3000)
        
        // Allows for use of methods like
        app.get()
        app.post()
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
            res.send({ message: "This is the backend" })
        });

        // Get request to '/:id/category/:categoryId'
        app.get("/:id/category/:categoryId", (req, res) => {
            const { id, categoryId } = req.params;
            res.status(200).send({ message: `The id and category id are: [${id}, ${categoryId}]` })
        })

        const userDB = [
            {id: 1, name: "Tony", age: 12},
            {id: 2, name: "Joe", age: 14},
            {id: 3, name: "Larry", age: 15},
        ]

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
            await userDB.push({ id, name, age, });
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
