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
[V-log Read.ME.zip](https://github.com/VictoriPaige/Fullstack-Blog/files/9455092/V-log.Read.ME.zip)


## 📊 Component Hierarchy: 


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
