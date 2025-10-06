# Movie-Magic-sept-2025
SoftUni JS Back End Course Project
## Workshop 1 - Express and Templating
___
### Setup
- [x] Initialize Project
- [x] Add Express Server `npm i express`
- [x] Config Debugging
- [x] Add Workshop Resources
- [x] Setup Handlebars `npm i express-handlebars`
- [x] Setup static files
- [x] Render Home Page
- [x] Add Layout
- [x] Render About Page
### Architecture and dynamic rendering
- [x] Add home controller
- [x] Add movie data layer
- [x] Add movie service
- [x] Render movies on home page
- [x] Show no movies screen
---
### Create Movie
- [x] Add Movie Controller
- [x] show create movie page
- [x] Add routes
- [x] Add 404 page
- [x] Ready body data
- [x] Create movie
  - [x] Create action 
  - [x] Add service
  - [x] add model method for creating movie
- [x] Redirect after creation
- [x] Add unique id for each created movie
### Details Page
- [x] Add navigation button for detail page
- [x] Add route with param for details page
- [x] Get one movie from service
- [x] find movie by id from model
- [x] Render details page with dynamic data
### Search Page
- [x] Show static search page
- [x] Render all movies
- [x] Modify search form
- [x] Filter movies
  - [x] Filter movies by year
  - [x] Filter movies by genre
  - [x] Filter movies by title
- [x] Remember search words
### Bonuses
- [x] Dynamic page title
- [x] File Persistence
- [x] Rating 


### Prerequisites
- [x] Install MongoDB Community Server
- [x] Install Compass GUI
- [x] Install Mongosh GLI (Optional)

## Workshop 2 - MongoDB Database

### setup Database
- [x] Install mongoose `npm i mongoose`
- [x] Connect to Db
  
### Refactor Movies to use mongoose
- [x] Add movie model
 - [x] Create movie Schema
 - [x] Create movie model
- [x] import file movies to database
- [x] Fix own property handlebars problem with lean method
- [x] General fix for own property problem
- [x] Refactor details
- [x] Refactor create
- [x] Refactor search

### Add Cast
- [x] Add new resources
- [x] Create Cast Controller
- [x] Create Cast Page
- [x] Add cast model
- [x] Create Cast Service
- [x] Create Cast Functionality

### Attach Cast to Movie (relation)
- [x] Add attach cast button 
- [x] Add attach cast page
- [x] Add dynamic data to cast page
- [x] Show cast list in cast page
- [x] Add relation between cast and movie
- [x] Attach cast functionality

### Show Cast on Details (population)
- [x] Get movie casts filtered
- [x] Show casts on details page
- [x] Using population


### Bonuses

- [x] Filter casts if they are already attach
- [ ] Add new resources
- [ ] Name in movie
- [ ] Back reference from VSCode
- [ ] Add movie views to a folder

## Workshop 3 - Session and Authentication

### Initial Setup
- [x] Add resources

### Registration 
- [x] Add new controller `authController`
- [x] Add registration page
- [x] Add User model
- [x] Add User service
- [x] Handle registration (create user in database)
- [x] Add password hashing
  
### Login
- [x] Add login page
- [x] Handle login page
 - [x] Validate user
 - [x] Validate password
 - [x] Create token
 - [x] Return token to client
  
### Logout
- [x] Add logout action
- [x] Clear cookie
  
### Authorization 
- [x] Install cookie parser
- [x] Add auth middleware
- [x] Add isAuth route guard
- [x] Add isGuest route guard

### Dynamic Navigation
- [x] Group navigation by user type (all, authenticated and guest)
- [x] add auth info to handlebars context

### Show creator control buttons
- [x] Add edit and delete buttons on details page
- [x] Add creator as relation to movies
- [x] Add user as creator on movie create
- [x] Show buttons only for creators
 

### Delete Movies
- [x] Add delete action 
- [X] Add creator validation

### Edit Movies
- [ ] Add edit page

### Bonus
- [ ] Automatic login on register
- [ ] Invalidate token on logout
- [ ] Refresh token

