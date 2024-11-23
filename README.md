# Meal-Website
**Description**: This project gives you the opportunity to build a responsive recipe website using data from TheMealDB API.Recipe information has been fetched and displayed it on my website, including the meal's image, title, instructions, ingredients, and a YouTube link for video instructions. After completion of the project i was able to demonstrate my ability to consume an Application Programming Interface(API), manipulate JSON data, and design a visually appealing, user-friendly interface that works across both mobile and desktop devices.

## Table of Contents

1. [Project Name](#project-name)
2. [Table of Contents](#table-of-contents)
3. [Introduction](#Overview)
4. [Live Demo](#live-demo)
5. [Features](#features)
6. [Technologies Used](#technologies-used)
7. [Setup and Installation](#setup-and-installation)
8. [Usage](#usage)
9. [Media Queries](#Media-Queries)
10.[Screenshots](#screenshots)
11. [License](#license)
12. [Author(s)](#authors)

## Overview
This project is built using HTML, CSS and Javascript.Fetching data from API which allows developers to use existing functions and data without having to build them from scratch.  The foliowing API endpoint to fetch meal data was used:"https://www.themealdb.com/api/json/v1/1/search.php?s=chicken".


## Live-demo
- Check out the live Demo of the project: [Live Demo] https://meal-website-gkr2.onrender.com
-  A live video using loom: link to loom 

## Technologies Used

-HTML5
-CSS3
-ES6

## Features
- **Responsive Design**: The layout adjusts to various screen sizes using media queries.
- **Custom properties**: Utilizes CSS variables for theme colors, making it easy to adjust the overall color scheme.
- **Responsive Layout**: Built a responsive website that looks great on both mobile and desktop screens using CSS media queries.Used the mobile-first approach,start by designing for mobile, then added styles for larger screens.
-**Dynamic Content Rendering**:Dynamically displayed the meal information fetched from TheMealDB API. The meal picture, meal title, description to cook, ingredients, and YouTube link have been rendered dynamically using JavaScript.
-**YouTube Integration**:For each meal, displayed a YouTube link that redirects users to the video recipe.
-**Ingredient List**:For each meal,5 ingredients was listed used in the recipe.

## Setup Instructions

1. **Clone the Repository**:
```sh
git clone https://github.com/musyelevateher/Meal-Website.git
```
2. **Navigate to the project Directory**:
```sh
cd Meal-Website
```
3. **Open the HTML Files**:
 Open `index.html` in your preffered web browser to view the project.

 ##Usage 

 -The CSS file (`style.css`) includes various sections with classes that define the layout and styles for the web page.
 -To make any adjustments,edit the `styles.css` file, and the changes will reflect on the web page upon refreshing the browser.
 - All Chicken meals will be dynamically rendered using Javascript "main.js".

 ## KEY HTML Structure

 Here is a quick of the key HTML Structure:
 ```html
 <!-- Header Section -->
  <header>
    <h1>Meal Finder</h1>
  </header>
  <main id="meal-container" class="meals-grid">
    <!-- All Chicken meals will be dynamically rendered here -->
  </main>
  

### Key CSS Styles
- The CSS code starts with defining root variables for consistent theming.
- media queries provide responsive design adjustments at various breakpoints.
##  Key Javascript structure
-Function to fetch all chicken meals
-Check if meals exist
-Function to render a meal
-Collect first 5 ingredients
-Create dynamic content for each meal
-Append the meal to the container
-Fetch and render all chicken meals on page load


## Screenshots

Include screenshots or GIFs of your project in action. This helps users understand what your project looks like and how it functions. screenshots for mobile and desktop view.

![Screenshot 1] c:\Users\USER\Pictures\Screenshots\Screenshot (32).png
![Screenshot 2] c:\Users\USER\Pictures\Screenshots\Screenshot (33).png

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- **Name:** Musayyiba Shu'aibu
- **Email:** musayyiba@gmail.com
- **GitHub:** [musyelevateher](https://github.com/musyelevateher)

