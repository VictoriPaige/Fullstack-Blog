# V-log
V-log is a fullstack interactive CRUD application. This app was designed to display personal pieces written and publish by Victoria Atkinson. The platform utilizes the MERN stack implementation. Users are allowed to navigate through the application and submit commentary on individual pieces. 


## 🗄️ Features List: 
- Features of V-log include: 
  - CRUD operations 


### 💻 MVP:

- Blog functionality:
  - Includes a navigation bar
- Article functionality: 
  - Link with preview of each article
  - Article page displays other articles availabile at the bottom
- CRUD Operations
- Comment functionality:
  - User creates a comment
  - User adds comment to article posting
  - User deletes comment from article posting
  - Article page shows updated commentary


### ⏩ Post-MVP:

- Usability of artcles

  - Able to share content elsewhere
  - Author having the ability to edit and delete in app

- Search content available 
- Users ability to up or down vote on preexisting comments
- Timestamp comments and articles submittes
- Creating a signup option to get alerted on newly puublished articles


## 📍API Endpoint Documentations:

- ```GET /api/articles/:name ``` 

  - Retrieve article information


- ```POST /api/articles/:name/add-comments```

  - Enable user to update article with comment


## ➿ Wireframes:

### Mobile Version:
![V-log Read ME](https://user-images.githubusercontent.com/105768093/187495986-8260d777-5d80-403c-a1b7-2e9077229004.png)


### Desktop Version: 
![Home Page](https://user-images.githubusercontent.com/105768093/187502666-e0af5053-e2ea-4d4e-9c1a-26ff1f49f7fc.png)
![Article Page](https://user-images.githubusercontent.com/105768093/187502704-42ab92c0-76e6-4c52-a228-d735cccb8a2b.png)


## 📊 Component Hierarchy: 
```Container
  |__ Clients 
    |__ Components
    |__ Pages
```

## 📦 Dependencies:

FrontEnd:

- tailwindcss
- whatwg-fetch
- body-parser
- cors
- nodemon
- react/react router
- react 
- styled-components
- .env

Backend:

- autoprefixer
- postcss
- express
- mongoDB/mongoose
- concurrently

Testing:

- postman
