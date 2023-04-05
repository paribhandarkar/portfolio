const MiniProjectsData = [
  {
    summary: "Digital Clock",
    descriptionHeading: `Brief Description:`,
    description: `I created a functional and visually appealing clock using web development technologies.
      
      Using HTML, I created the structure and content of the clock. Then, with CSS, I was able to style the clock's appearance to make it look attractive and appealing. Finally, with the help of JS, I added functionality to the clock by using built-in date and time functions to display the current time.
      
      My digital clock project, which is accessible to anyone with an internet connection, is what I think best exemplifies the power of web programming. Knowing that I can produce something that others may view and use online is a wonderful feeling.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned about the setInterval() function and how to actually implement it.

      I also learned about Date(), which I had never used before.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I overlooked the fact that when the time is a single digit number, we must display a zero in front of it. This wasn't particularly difficult, but it made me more aware of the small details.`,
    linkSource: `https://github.com/paribhandarkar/digital-clock`,
    linkLive: `https://paribhandarkar.github.io/digital-clock/`,
  },
  {
    summary: "Mini Calendar",
    descriptionHeading: `Brief Description:`,
    description: `I've created a really cool mini calendar using HTML, CSS, and JavaScript. The page displays the current date and has a simple, minimalist design.

      But the most exciting part is that I've used JavaScript to dynamically get the current date and display it on the page. This means that no matter when you access the page, it will always show the current date.
      
      I achieved this by using JavaScript's Date object to get the current date, and then dynamically updating the HTML on the page to display that date. This way, the calendar is always up-to-date, without me having to manually change the date every day.
      
      Overall, it's a really cool and useful project that showcases the power and versatility of JavaScript for web development. Plus, it's a great way to keep track of the date and stay organized!`,
    newHeading: `New things I learned:`,
    newDescription: `Learned how to use the "toLocaleString" method to get a string representation of the date.`,
    linkSource: `https://github.com/paribhandarkar/mini-calendar`,
    linkLive: `https://paribhandarkar.github.io/mini-calendar/`,
  },
  {
    summary: "New Year Countdown",
    descriptionHeading: `Brief Description:`,
    description: `I used HTML to provide the structure and content of the countdown, and CSS to style its appearance. Then, using JS, I was able to handle the countdown's functionality by utilizing built-in date and time functions.

    One of the coolest features of my New Year's countdown is how it dynamically updates every second, showing the exact amount of time until the new year. Anyone who uses it will have a fun and interactive experience.
    
    I believe that my project is a great example of the power of web development, as it allows anyone with an internet connection to access and interact with my New Year countdown. Overall, I'm really proud of what I've accomplished, and I hope that my project inspires others to create their own engaging and interactive applications using web development technologies.`,
    newHeading: `New things I learned:`,
    newDescription: `Date() objects may be produced in nine different ways, and I particularly liked the new Date (year, month, day, hours, minutes, seconds).

    I also learned that JavaScript counts months from 0 to 11: January has a value of zero. December has a value of 11. Also, if you don’t pass anything to Date(), it will return today’s date.
    
    Found out about the getTime() method and how, by default, it returns the amount of milliseconds that have passed since January 1st, 1970 at 00:00:00. But, I was able to locate any date I wanted when I coupled it with Date().`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I chose 01 for January because I was unaware that the Date() object only accepts the months 0 to 11, so I received the incorrect amount of days. But, I quickly realised what was going on and changed it to 00 to receive the correct number of days for January.`,
    linkSource: `https://github.com/paribhandarkar/new-year-countdown`,
    linkLive: `https://paribhandarkar.github.io/new-year-countdown/`,
  },
  {
    summary: "Analaog Clock",
    descriptionHeading: `Brief Description:`,
    description: `To create a clock with the Rolex logo that shows the current time, I'll be using JavaScript to dynamically retrieve the time from the user's browser. By converting this time into degrees, I can display the appropriate angle on the clock face to accurately represent the current time. This will allow the user to see the time at a glance and enjoy the stylish design of the Rolex logo.

    I used HTML to create the basic structure of the clock face, including the circular outline and the markers for the hours and minutes. Then, I used CSS to style the clock, including setting the background color, font styles, and the position of the hour and minute markers.
    
    Finally, I used JavaScript to create the moving hands of the clock. I created functions to calculate the angle of the hands based on the current time, and then used CSS transforms to rotate the hands to the correct positions.
    
    Overall, creating an analog clock using HTML, CSS, and JavaScript was a great way for me to practice my front-end web development skills, including working with the DOM, handling user events, and creating animations. I'm proud of my accomplishment and look forward to using these skills in future projects!`,
    newHeading: `New things I learned:`,
    newDescription: `I had never used querySelector() before, but I was able to see the distinctions between it and getElementById() as well as when to utilise each.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I spent a lot of time creating the clock shape using CSS. I had a specific image in mind, and it took some experimentation to translate that image into code. I had to adjust various CSS properties and values to achieve the desired appearance, which was a detailed and time-consuming process.

    In addition to the overall clock appearance, I also needed to figure out how to make the clock arrows display the current time accurately. This involved using JavaScript to access and manipulate the current time, as well as calculating the appropriate angles for the clock arrows.
    
    Despite the challenges I faced, I am pleased with how everything turned out. Creating something as intricate as a clock from scratch can be a rewarding experience for designers and developers, and I found the process to be both challenging and satisfying.`,
    linkSource: `https://github.com/paribhandarkar/analog-clock`,
    linkLive: `https://paribhandarkar.github.io/analog-clock/`,
  },
  {
    summary: "Month Calender",
    descriptionHeading: `Brief Description:`,
    description: `I'm excited to share my month calendar created using HTML, CSS, and JavaScript! While it may not have all the bells and whistles of a fully-featured calendar, I think you'll find it to be a useful tool for planning and scheduling. The calendar offers a clear and concise view of the current month. While it doesn't have interactive features such as adding events or appointments, you can still use it to plan out your schedule and stay on top of important dates. With some further development, I hope to expand its functionality in the future. Overall, I'm proud of what I've created and I hope you find it helpful as well.`,
    newHeading: `New things I learned:`,
    newDescription: `Making the month calendar was a great learning experience for me. One of the most interesting things I discovered was the toDateString() method, which made it easy to convert dates into a more readable format.

    Using getDay() and for loops were also new concepts that I incorporated into my project. It was great to see how they could be used to create a more efficient and streamlined calendar. I'm excited to continue building on these skills and see how they can be applied in other projects.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `Getting the first and last day of each month dynamically was definitely one of the biggest challenges I faced when creating the calendar. I had to do a lot of research and experimentation to figure out how to do it effectively. Additionally, the CSS portion of the project required a lot of trial and error to get everything lined up perfectly.

    As for changing the highlight for the current day using loops, that was definitely something that took me some time to grasp. But with some practice and persistence, I was ultimately able to make it work.
    
    All in all, I definitely learned a lot while working on this project, and I'm looking forward to applying what I learned to future projects.`,
    linkSource: `https://github.com/paribhandarkar/month-calendar`,
    linkLive: `https://paribhandarkar.github.io/month-calendar/`,
  },
  {
    summary: "Rotating Image Gallery",
    descriptionHeading: `Brief Description:`,
    description: `I'm really excited to share with you my rotating image gallery that I created using HTML, CSS, and JavaScript! It's a really cool feature that allows me to showcase a set of images on my website in a continuous loop, rotating them one by one. I think this feature adds a lot of visual interest and can make anything more engaging for visitors.

    I started by creating a simple HTML structure that includes a container for the images and some navigation buttons. Then, I used CSS to style the gallery and make it look great. I added some animations and transition effects to make the images rotate smoothly and added some hover effects to the navigation buttons to make them more interactive.
    
    Finally, I used JavaScript to add the functionality to the gallery. I wrote a script that cycles through the images and updates the display with the current image. I also added event listeners to the navigation buttons so that users can manually navigate through the gallery if they want to.`,
    newHeading: `New things I learned:`,
    newDescription: `It's great to learn about CSS custom properties! I now know that they're defined with the --prefix, and that they let you define a value once and use it multiple times throughout your CSS code. This makes your code more flexible and reusable, and simplifies updates to styles across your entire website by just changing the value of the custom property.

    I've also discovered Lorem Picsum, which is a free online service that provides random placeholder images for testing or demonstration purposes. To specify the image size and aspect ratio, I can use a specific URL format. The service offers a variety of options, such as blur and grayscale effects. Overall, I think Lorem Picsum is a fantastic tool for generating placeholder images quickly and easily!
    
    Learned about the transform-style: preserve-3d; CSS property and how it is used to preserve the 3D transformations of child elements in a 3D transformed parent element.
    
    Learned how to utilize the perspective() function and how it determines how far away the 3D object is from the user and sets the perspective distance for 3D transforms.
    
    For the first time, I used addEventListener() and learned how to use it in practice.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `One of the main challenges I faced was related to the setTimeout method that I was using to rotate the images in the gallery. Initially, I had set up the setTimeout method to rotate the images every few seconds automatically. However, I noticed that whenever I clicked on the previous or next button, it would mess up the gallery and the images would stop rotating.

    After doing some research and experimenting, I learned that I needed to use the resetTimeout method in order to fix this issue. The resetTimeout method allows me to clear the current timeout and start a new one, which ensures that the images in the gallery continue to rotate smoothly, even after the user interacts with the navigation buttons.
    
    I had to understand how to use resetTimeout and integrate it into my code to ensure that the images continued to rotate as intended, even after a user interaction. This required some experimentation and tweaking of my code, but ultimately, I was able to implement the resetTimeout method successfully and the gallery now functions smoothly.`,
    linkSource: `https://github.com/paribhandarkar/rotating-image-gallery`,
    linkLive: `https://paribhandarkar.github.io/rotating-image-gallery/`,
  },
  {
    summary: "Background Image Scroll Effect",
    descriptionHeading: `Brief Description:`,
    description: `So, I've created this cool background image scroll effect that changes the opacity of the background image as the user scrolls down the page. It's a simple yet engaging visual effect that adds some personality and style to my website or application. I used HTML, CSS, and JavaScript to create this effect, which allows me to provide my users with a dynamic and interactive experience that helps them engage with my content in new and exciting ways. Overall, it's a great way to make my website or application stand out and create a more immersive experience for my users.`,
    newHeading: `New things I learned:`,
    newDescription: `I used the background-attachment: fixed and how I can use it to create a "parallax" effect, where the background image appears to move at a different speed than the rest of the content, giving the page a more dynamic and interactive feel.

    I also learned about window.pageYOffset which is a JavaScript property that returns the number of pixels that the document has been scrolled vertically from the top. This property is often used in conjunction with other JavaScript and CSS properties to create scrolling effects and animations on web pages.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `When I was creating the scrolling effect with my background image, one of the biggest challenges I faced was setting the initial backgroundSize and opacity values. I knew that I wanted the background image to change as the user scrolled down the page, but I wasn't sure what values to use to get the effect I was looking for.

    At first, I chose some arbitrary values for backgroundSize and opacity, but the effect wasn't quite what I wanted. I had to spend some time experimenting with different values to find the right combination that would create the effect I had in mind.
    
    This was a bit frustrating, as it required a lot of trial and error. But I eventually found a set of values that worked well and created the scrolling effect I wanted. Once I had the initial values set up, I was able to use JavaScript to adjust the backgroundSize and opacity as the user scrolled down the page, which gave me the effect I was looking for.
    
    Overall, this experience taught me the importance of choosing meaningful values when working with CSS properties like backgroundSize and opacity. It also reminded me that sometimes it takes a bit of experimentation to get things just right, and that's okay! With a bit of persistence and creativity, I was able to overcome this challenge and create a scrolling effect that added a lot of visual interest to my web page.`,
    linkSource: `https://github.com/paribhandarkar/background-image-scroll-effect`,
    linkLive: `https://paribhandarkar.github.io/background-image-scroll-effect/`,
  },
  {
    summary: "Real Time Character Count",
    descriptionHeading: `Brief Description:`,
    description: `For this project, I'm creating a text area with real-time character count and limit functionality using JavaScript. I want to provide a user-friendly experience for anyone filling out a form or input field by letting them know how many characters they have remaining as they type, and preventing them from typing any more characters once they've reached the limit.

    I'm using JavaScript to dynamically update the total character count and remaining characters in real time, as the user types. Once they reach the character limit, I'm disabling the text area and changing the remaining character count to zero, so the user knows they've hit the limit.`,
    newHeading: `New things I learned:`,
    newDescription: `Learned about the addEventListener ("keyup") and how the function you specify is executed when a user releases a key on their keyboard. This can be useful for implementing keyboard shortcuts or performing live search as a user types in a search box.`,
    linkSource: `https://github.com/paribhandarkar/real-time-character-counter`,
    linkLive: `https://paribhandarkar.github.io/real-time-character-counter/`,
  },
  {
    summary: "Random Password Generator",
    descriptionHeading: `Brief Description:`,
    description: `I created a simple password generator app using JavaScript, HTML, and CSS. The app allows users to generate a random password with a length of 14 characters, which can include uppercase and lowercase letters, numbers, and special characters. The app has a "copy" button that allows users to easily copy the generated password to their clipboard.

    I also added an alert message that appears for 2 seconds after the password is copied, letting the user know that the password has been copied successfully. The app is responsive and can be used on both desktop and mobile devices. Overall, it was a fun project that allowed me to practice my JavaScript skills and learn more about DOM manipulation.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned some new concepts while working on the password generator app.

    readonly -  For instance, I discovered the readonlykeyword in HTML, which allowed me to create input fields that could not be modified by the user.
    
    I also learned about Content Delivery Networks (CDNs), which are networks of servers used to provide faster and more reliable delivery of web content like JavaScript libraries and CSS stylesheets.
    
    I learned how to use the fa-2x CSS class to display Font Awesome icons at a size of 2 times their original size. I also learned how to use the transform: scale(0.95) CSS property to scale an element, such as a Font Awesome icon, to a size of 95% of its original size.
    
    In addition, I discovered the inputEl.setSelectionRange(0, 9999) JavaScript method, which allowed me to select all the text in an input field, making it easier to copy the generated password to the clipboard.
    
    Finally, I learned about the navigator.clipboard JavaScript object, which provided a simple way to work with the clipboard. I used the writeText() method to copy the generated password to the clipboard when the user clicked the "copy" button.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I faced a few challenges while working on the password generator app. One of the main issues I encountered was the number of new concepts I needed to use and implement. It was challenging to keep track of everything at first, but I tried my best to break down each new concept into smaller parts to better understand how they worked and how to use them in my project.

    Another challenge I faced was with the setTimeout method. It took me a little while to get the hang of it, but I spent some time experimenting with different approaches and testing them out until I found a solution that worked.
    
    Despite these challenges, I learned a lot from this project and feel more confident in my ability to work with these new concepts going forward.`,
    linkSource: `https://github.com/paribhandarkar/random-password-generator`,
    linkLive: `https://paribhandarkar.github.io/random-password-generator/`,
  },
  {
    summary: "Button Ripple Effect",
    descriptionHeading: `Brief Description:`,
    description: `I created a button with a ripple effect using HTML, CSS, and JavaScript. The button has a blue background and a shadow, and when I hover over it, a pink circle expands from the center to create a ripple effect. I used CSS ::before pseudo-elements and transform to create the circle, and JavaScript to calculate the position of the user's mouse and update the CSS custom properties used for the ripple animation. I'm happy with how the button turned out and feel like it adds some interactivity to my webpage.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned a lot from this project! I now understand that pageX and pageY are properties of the MouseEvent object that represent the coordinates of the mouse pointer relative to the entire document, and offsetLeft and offsetTop are properties of an HTML element that represent its position relative to its offset parent. 

    Additionally, I learned about the setProperty() method, which is used to set custom CSS properties for an element. 
    
    Finally, I learned about the mouseover event, which is triggered when the mouse pointer enters an element. Overall, this project was a great learning experience for me.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I faced a few challenges while working on this project. Firstly, I had trouble differentiating between the pageX and pageY coordinates, which are relative to the entire document, versus the offsetLeft and offsetTop coordinates, which are relative to an element's offset parent. 

    Secondly, I struggled to find a way to grab the mouse pointer's position specifically on the button, as opposed to the document as a whole. 
    
    Finally, I had some difficulty understanding how to use the setProperty() method to set custom CSS properties for an element. 
    
    However, with some research and experimentation, I was able to overcome these challenges and successfully complete the project.`,
    linkSource: `https://github.com/paribhandarkar/button-ripple-effect`,
    linkLive: `https://paribhandarkar.github.io/button-ripple-effect/`,
  },
  {
    summary: "Random Color Generator",
    descriptionHeading: `Brief Description:`,
    description: `I recently completed a JavaScript project where I created a web page with a container that held 30 small color containers, each with a randomly generated hex code. I used JavaScript to create the color containers and loop through them to generate the hex codes and assign them to the containers. I also used JavaScript to style each container to have a background color matching its respective hex code. It was a fun and educational project that helped me develop my JavaScript skills, and I learned about new concepts like createElement() and querySelectorAll().`,
    newHeading: `New things I learned:`,
    newDescription: `During this JavaScript project, I had the opportunity to learn some new concepts that are highly useful when working with HTML elements. Specifically, I learned how to use createElement() to dynamically create new HTML elements like div's and p's and appendChild() to add them to an existing parent element.

    Moreover, I was able to utilize querySelectorAll() to select multiple elements with a specified class name and then loop through them using forEach(), performing an action on each element. This allowed me to efficiently update the content and layout of the web page.
    
    Overall, these concepts are highly valuable for creating dynamic and engaging web pages, and I am excited to continue expanding my knowledge of JavaScript and web development.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I faced a few challenges while working on this project. Firstly, I had trouble differentiating between the pageX and pageY coordinates, which are relative to the entire document, versus the offsetLeft and offsetTop coordinates, which are relative to an element's offset parent. 

    Secondly, I struggled to find a way to grab the mouse pointer's position specifically on the button, as opposed to the document as a whole. 
    
    Finally, I had some difficulty understanding how to use the setProperty() method to set custom CSS properties for an element. 
    
    However, with some research and experimentation, I was able to overcome these challenges and successfully complete the project.`,
    linkSource: `https://github.com/paribhandarkar/random-color-generator`,
    linkLive: `https://paribhandarkar.github.io/random-color-generator/`,
  },
  {
    summary: "Video Trailer Popup",
    descriptionHeading: `Brief Description:`,
    description: `In this project, I created a video trailer popup for the album "Reputation" by Taylor Swift using HTML, CSS, and JavaScript. The popup contains a video trailer of the album and a close icon to exit the popup. I used CSS to style the layout and added transitions to make it look visually appealing. Finally, I used JavaScript to handle the popup functionality, including displaying and hiding the popup and controlling the video playback. Overall, I enjoyed working on this project and am happy with the end result.`,
    newHeading: `New things I learned:`,
    newDescription: `So, I learned that the pause() method in JavaScript can be used to pause a video element. In this project, we use it to pause the video when the user clicks the close icon to hide the trailer.

    Additionally, I learned that the currentTime property can be used to set the current playback time of a video element. In this project, we set it to 0 when the user closes the trailer, so that the next time they open it, it starts from the beginning.
    
    Lastly, I learned about the controls attribute in the video tag. This attribute adds standard video controls, such as play/pause, volume, and seek bar, to the video element without the need for custom controls. This was used in this project to allow users to play/pause the video and control the playback.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `When I was working on this project, I faced a challenge where the video would keep playing even after I closed the video popup using the close icon. To solve this issue, I had to use the pause() method of the video element to stop the video from playing and set the currentTime property to 0 to reset the video back to the beginning. This allowed me to ensure that the video was completely stopped when the user closed the popup, and prevented it from continuing to play in the background.`,
    linkSource: `https://github.com/paribhandarkar/video-trailer-popup`,
    linkLive: `https://paribhandarkar.github.io/video-trailer-popup/`,
  },
  {
    summary: "Heart Trail Animation",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple web animation that uses the mouse movement of the user to generate heart icons that float around the screen. The heart icons are randomly sized and colored, and they disappear after a set amount of time. The animation is created using JavaScript and CSS, and it uses an external icon resource from the website Iconsfinder.com. The project provides a good example of how to use mouse movement and animation effects on a webpage, and how to incorporate external icon resources into a project.`,
    newHeading: `New things I learned:`,
    newDescription: `So, I learned that the pause() method in JavaScript can be used to pause a video element. In this project, we use it to pause the video when the user clicks the close icon to hide the trailer.

    Additionally, I learned that the currentTime property can be used to set the current playback time of a video element. In this project, we set it to 0 when the user closes the trailer, so that the next time they open it, it starts from the beginning.
    
    Lastly, I learned about the controls attribute in the video tag. This attribute adds standard video controls, such as play/pause, volume, and seek bar, to the video element without the need for custom controls. This was used in this project to allow users to play/pause the video and control the playback.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `When I was working on this project, I faced a challenge where the video would keep playing even after I closed the video popup using the close icon. To solve this issue, I had to use the pause() method of the video element to stop the video from playing and set the currentTime property to 0 to reset the video back to the beginning. This allowed me to ensure that the video was completely stopped when the user closed the popup, and prevented it from continuing to play in the background.`,
    linkSource: `https://github.com/paribhandarkar/heart-trail-animation`,
    linkLive: `https://paribhandarkar.github.io/heart-trail-animation/`,
  },
  {
    summary: "Blurred Background Popup",
    descriptionHeading: `Brief Description:`,
    description: `This is a simple webpage that demonstrates a blurred background popup. The webpage contains a container with a background image and a button that, when clicked, displays a popup window with a blurred background. The popup window prompts the user to enter their email and offers a 20% discount in return. The popup window can be closed by clicking on the 'x' icon or outside the popup window. The webpage is created using HTML, CSS, and JavaScript.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned about filter
    It is a CSS property that allowed me to apply visual effects to an element. In this project, I used the blur() and brightness() functions.`,
    linkSource: `https://github.com/paribhandarkar/blurred-background-popup`,
    linkLive: `https://paribhandarkar.github.io/blurred-background-popup/`,
  },
  {
    summary: "Animated Search Bar",
    descriptionHeading: `Brief Description:`,
    description: `The code creates an animated search bar using HTML, CSS, and JavaScript, with a stylish design that includes a shadow effect, magnifier and microphone icons, and a transparent input field.

    The most notable feature of this animated search bar is the animation effect that is triggered when the magnifier icon is clicked. The search bar container toggles the "active" class, which changes the width of the container to 50 pixels and hides the input field and microphone icons. This creates a smooth animation effect that looks visually appealing.
    
    Overall, this project shows how HTML, CSS, and JavaScript can be used to create visually appealing and functional user interfaces. The code is well-written and easy to understand, making it a good example for developers who want to learn how to create similar designs.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned about the toggle() method, which is a JavaScript method used to add or remove a class from an HTML element. When you call toggle() on an element, it adds the specified class to the element if it doesn't already have it, and removes the class if it does.

    In the context of the animated search bar project, toggle() is used to add and remove the "active" class from the search bar container element. When I click on the magnifier icon, the "active" class is added to the container element, which triggers the animation effect that changes the width of the container and hides the input field and microphone icons. Clicking the magnifier icon again removes the "active" class, which triggers the animation effect that restores the search bar to its original state. 
    
    I found this method to be really useful, and I can see how it could be applied to other web development projects in the future.`,
    linkSource: `https://github.com/paribhandarkar/animated-search-bar`,
    linkLive: `https://paribhandarkar.github.io/animated-search-bar/`,
  },
  {
    summary: "Social Media Selector Menu",
    descriptionHeading: `Brief Description:`,
    description: `This is a simple project that creates a social media selector menu using HTML, CSS, and JavaScript. The menu is designed with a flexbox layout and features a button-like element with a chevron-down icon and a hidden list of social media platforms represented by their respective icons and names. When the menu is clicked, the list of social media platforms slides down, and when a platform is selected, its name replaces the default "Social Media" text on the button. 

    The JavaScript code handles the menu toggle and platform selection events by toggling CSS classes to show/hide the platform list and update the button text. The Font Awesome library is used to provide the social media icons. The background gradient and other CSS properties give the menu a pleasing aesthetic.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `To replace the default "Social Media" text on the button with the name of the selected platform, it was necessary to add an event listener to each social media list item. The event listener updated the button text with the inner HTML of the selected list item. Properly selecting and updating the correct HTML element with the selected platform name required careful attention to detail.`,
    linkSource: `https://github.com/paribhandarkar/social-media-selector-menu`,
    linkLive: `https://paribhandarkar.github.io/social-media-selector-menu/`,
  },
  {
    summary: "Multiplication App",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple multiplication app that tests your multiplication skills. The app generates two random numbers and asks you to multiply them. You can submit your answer, and the app will let you know if your answer is correct or not. Your score is displayed on the form, and it is incremented if you answer correctly and decremented if you answer incorrectly. The app uses local storage to store your score, so you can continue playing the game and keep track of your progress. It's a fun and easy way to practice your multiplication skills!`,
    newHeading: `New things I learned:`,
    newDescription: `While working on the multiplication app, I learned how to use the "autofocus" and "autocomplete" attributes on input elements. I found that setting "autofocus" was particularly helpful because it automatically focuses the user's attention on a specific input field when the page loads. This can help guide the user's experience and make the form more user-friendly.

    I also learned how to use JSON methods to store and retrieve data from local storage. Initially, I was confused about how to update the score value in local storage without resetting it to zero each time the page reloaded. However, I learned that by using JSON.stringify() to store the score in local storage and JSON.parse() to retrieve it, I could update the score value without losing its previous value.
    
    Overall, I found that working with local storage was a useful skill to have as a web developer. It allowed me to store data on the user's computer and retrieve it later, which can be useful for a variety of purposes such as tracking user progress or maintaining user preferences.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `One of the challenges I faced when working on the multiplication app was updating the score. Initially, the score would start from 0 every time I refreshed the page, which was not what I wanted. I wanted the score to persist even after the app was closed or the page was refreshed.

    To solve this challenge, I decided to store the score in local storage. Local storage is a feature in modern web browsers that allows web developers to store data in the browser. This data persists even after the browser window is closed or the computer is shut down. I created a new function called "storeInLocalStorage()" to store the score in local storage whenever it was updated.
    
    When the app loads, I retrieve the score from local storage and display it on the form. This way, the score remains persistent across page loads and app restarts.
    
    Using local storage to store data in web applications is a common solution to this type of challenge. It allows us to store data locally on the user's computer and retrieve it later, which is useful for maintaining state and keeping track of user progress in web applications.`,
    linkSource: `https://github.com/paribhandarkar/multiplication-app`,
    linkLive: `https://paribhandarkar.github.io/multiplication-app/`,
  },
  {
    summary: "Random Emoji",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple web application that displays a random emoji character and its Unicode code point. The application uses the Fetch API to retrieve a list of emoji objects from the Emoji API and creates an array of objects containing the Unicode character and code point for each emoji.

    When the user clicks the "Click" button, a random number is generated, and the corresponding emoji object is selected from the array. The selected emoji's character and code point are then displayed on the screen.
    
    The project uses async/await to fetch data from the API and generate the array of emoji objects. Additionally, it uses basic event handling and DOM manipulation to update the screen when the button is clicked.`,
    newHeading: `New things I learned:`,
    newDescription: `I learned about two new concepts in JavaScript: async and await. These are used to make asynchronous code more readable and easier to work with. By using the async keyword before a function and the await keyword before a promise, we can write asynchronous code that looks more like synchronous code. This makes it easier to understand what's happening in the code and reduces the likelihood of errors.

    I also learned about the json() method in JavaScript. This is a method that's used to parse JSON data that's returned from an API or other source. It takes the raw JSON data as input and returns a JavaScript object that can be easily manipulated and worked with. This is useful when working with APIs that return data in JSON format, as it allows us to easily extract and use the data in our application.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I faced some challenges while working on this project. One of the main challenges I encountered was understanding the async and await keywords, which are used for asynchronous programming in JavaScript. I wasn't familiar with this concept before, so I had to do some research and experimentation to figure out how to use them properly.

    Another challenge I faced was working with the json() method, which is used to extract JSON data from an HTTP response. I hadn't used this method before, so I had to learn about it and figure out how to incorporate it into my code.
    
    Overall, these challenges were difficult at first, but I was able to overcome them with some persistence and problem-solving. I learned a lot in the process, and I feel more confident in my abilities as a JavaScript developer now.`,
    linkSource: `https://github.com/paribhandarkar/random-emoji`,
    linkLive: `https://paribhandarkar.github.io/random-emoji/`,
  },
  {
    summary: "Loading Bar",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple loading bar that fills up over time. It was created using HTML, CSS, and JavaScript, and it uses a combination of a counter and a loading bar to visually indicate progress. The loading bar is initially empty, and the counter displays the current percentage of completion. The counter and the loading bar are updated once every 20 milliseconds until the counter reaches 100%, at which point the loading bar is completely filled and the process is complete. This project is a great way to practice working with HTML, CSS, and JavaScript, and it can be customized in many ways to suit different needs and purposes.`,
    newHeading: `New things I learned:`,
    newDescription: `Learned the difference between setTimeout() and setInterval(), when to use each, and what the consequences of using each could be.

    The consequences of using each are that setInterval() can cause multiple instances of a function to be running simultaneously, which can lead to unexpected behavior or performance issues. On the other hand, setTimeout() ensures that each instance of the function completes before the next one is called. This means that using setTimeout() can be better in certain situations, such as updating a progress bar where you want to ensure that each step completes before the next one is called.
    
    In general, it's important to consider the context in which you're using these methods and choose the one that's best suited for the task at hand.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `When I initially used setInterval() in my code, I noticed that the counter was continuously increasing and the loading bar was never stopping. This happened because setInterval() schedules a function to be executed repeatedly at a specified interval, regardless of whether the previous function call has completed or not. This means that multiple instances of the function can run simultaneously, causing unexpected behavior or performance issues.

    However, later i realized that the setTimeout() method must be used instead, which schedules a function to be executed once after a specified delay. This ensured that each instance of the function had to complete before the next one was called. The counter and loading bar were updated once every 20 milliseconds until the counter reached 100%, at which point the function stopped running.
    
    To fix the issue with setInterval(), I would need to ensure that the previous call to the function had completed before scheduling the next one. This can be done by using a boolean variable to indicate whether the function is currently running, and to only schedule a new call to the function if it's not already running. Alternatively, I could use clearInterval() to stop the interval once the counter reaches 100%.`,
    linkSource: `https://github.com/paribhandarkar/loading-bar`,
    linkLive: `https://paribhandarkar.github.io/loading-bar/`,
  },
  {
    summary: "Emoji Rating",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple feedback form that allows users to rate a product or service on a scale of 1 to 5 stars. It is a web page built with HTML, CSS, and JavaScript, and it includes a form where users can input their feedback and a star rating system that allows users to select the number of stars they wish to give. The stars are interactive, meaning that they change color when clicked on, and the selected number of stars is displayed below the star rating system. The project is a great example of how to build an interactive rating system using basic web development tools.`,
    newHeading: `New things I learned:`,
    newDescription: `Learned how to properly use forEach method and how this project uses the forEach method to loop over elements in an array and attach event listeners, as well as to update the appearance of the star elements based on user interaction.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I had some challenges while working on this project. Specifically, I had some questions about how certain parts of the code worked. In particular, I had questions about the arguments used in the forEach loop and how to properly use it. I also had questions about the updateRating function and how it was changing the active state of the star icons. Overall, I was able to overcome these challenges and learn more about how to use these JavaScript features effectively in my projects.`,
    linkSource: `https://github.com/paribhandarkar/emoji-rating`,
    linkLive: `https://paribhandarkar.github.io/emoji-rating/`,
  },
  {
    summary: "Dark Mode Toggle",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple implementation of a dark mode toggle switch for a webpage. When the switch is toggled on, the background color of the webpage changes to a dark theme, and the switch circle changes color as well. The implementation is done using HTML, CSS, and JavaScript. The HTML contains the switch input element and label, while the CSS is used to style the switch elements and animate the switch circle. The JavaScript code handles the functionality of the switch, updating the webpage's background color and storing the user's preference using local storage. The result is a basic but effective way to add a dark mode toggle feature to a webpage.`,
    newHeading: `New things I learned:`,
    newDescription: `1. I learned about localStorage, which is a built-in web API that allows web developers to store data on a user's local machine. It provides a simple way to save data locally and retrieve it later.
    2. JSON.stringify(): I also learned about the JSON.stringify() method, which is a built-in JavaScript method that is used to convert a JavaScript object into a JSON string. JSON stands for JavaScript Object Notation and is a lightweight format for storing and transporting data.
    3. localStorage.setItem(): Another thing I learned was the localStorage.setItem() method, which is used to store a key-value pair in the browser's local storage. The setItem() method takes two arguments: the name of the key and the value you want to store.
    4. localStorage.getItem(): I learned about the localStorage.getItem() method, which is used to retrieve a value stored in the browser's local storage. The getItem() method takes the name of the key as an argument and returns the corresponding value.
    5. JSON.parse(): I also learned about the JSON.parse() method, which is a built-in JavaScript method that is used to convert a JSON string back into a JavaScript object. This method is the opposite of JSON.stringify().
    
    Overall, I learned about how to use localStorage to store and retrieve data on a user's local machine, as well as how to use JSON.stringify() and JSON.parse() to convert data between a JavaScript object and a JSON string. These skills can be useful for building web applications that need to store and retrieve user preferences or other data on the user's device.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I've had some difficulty understanding some of the JavaScript methods used in the code of this project. Specifically, I had trouble understanding localStorage.setItem(), localStorage.getItem(), and JSON.parse(), and how to use them in the context of the project. `,
    linkSource: `https://github.com/paribhandarkar/dark-mode-toggle`,
    linkLive: `https://paribhandarkar.github.io/dark-mode-toggle/`,
  },
  {
    summary: "Mouse Movement",
    descriptionHeading: `Brief Description:`,
    description: `This project is a simple implementation of a dark mode toggle switch for a webpage. When the switch is toggled on, the background color of the webpage changes to a dark theme, and the switch circle changes color as well. The implementation is done using HTML, CSS, and JavaScript. The HTML contains the switch input element and label, while the CSS is used to style the switch elements and animate the switch circle. The JavaScript code handles the functionality of the switch, updating the webpage's background color and storing the user's preference using local storage. The result is a basic but effective way to add a dark mode toggle feature to a webpage.`,
    newHeading: `New things I learned:`,
    newDescription: `1. I learned about localStorage, which is a built-in web API that allows web developers to store data on a user's local machine. It provides a simple way to save data locally and retrieve it later.
    2. JSON.stringify(): I also learned about the JSON.stringify() method, which is a built-in JavaScript method that is used to convert a JavaScript object into a JSON string. JSON stands for JavaScript Object Notation and is a lightweight format for storing and transporting data.
    3. localStorage.setItem(): Another thing I learned was the localStorage.setItem() method, which is used to store a key-value pair in the browser's local storage. The setItem() method takes two arguments: the name of the key and the value you want to store.
    4. localStorage.getItem(): I learned about the localStorage.getItem() method, which is used to retrieve a value stored in the browser's local storage. The getItem() method takes the name of the key as an argument and returns the corresponding value.
    5. JSON.parse(): I also learned about the JSON.parse() method, which is a built-in JavaScript method that is used to convert a JSON string back into a JavaScript object. This method is the opposite of JSON.stringify().
    
    Overall, I learned about how to use localStorage to store and retrieve data on a user's local machine, as well as how to use JSON.stringify() and JSON.parse() to convert data between a JavaScript object and a JSON string. These skills can be useful for building web applications that need to store and retrieve user preferences or other data on the user's device.`,
    challengesHeading: `Challenges I faced:`,
    challengesDescription: `I've had some difficulty understanding some of the JavaScript methods used in the code of this project. Specifically, I had trouble understanding localStorage.setItem(), localStorage.getItem(), and JSON.parse(), and how to use them in the context of the project. `,
    linkSource: `https://github.com/paribhandarkar/dark-mode-toggle`,
    linkLive: `https://paribhandarkar.github.io/dark-mode-toggle/`,
  },
];

export default MiniProjectsData;
