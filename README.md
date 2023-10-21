# sCO2p App

Please READ:
After downloading zip.

Extract content in folder like Documents etc..
C://User/Documents/Scoop-main/client <------

Name of project folder is 'client' by default

User the terminal to navigate to the 'client' folder.

Client folder is were you will enter all npm commands

To Run sCO2pApp in localhost:

- Install nodejs
- Install visual Studio Code
- Open terminal, Enter node -v (should see version of nodejs if installed correctly)
- Enter npm install in terminal (Enables npm commands to be used in terminal)
- Enter npm install react-router-dom in terminal of project folder (Scoop-main/client) to use react properties
- Enter npm install @fortawesome/react-fontawesome in terminal of project folder (Scoop-main/client) to display icons
- Enter npm install --save @fortawesome/fontawesome-svg-core in terminal of project folder (Scoop-main/client) to display icons
- Enter npm install --save @fortawesome/free-solid-svg-icons in terminal of project folder (Scoop-main/client) to display icons
- Enter npm start in terminal of project folder

To Access dashboard:

- Login username is abc
- Login password is 123

Dashboard feature:

- User can add live comments
- Write in text area and click post to add comment
- Comment box will add scroll bar when > 2 comments are added

Dashobard Updates (10/14/2023)

- Ride Matcher
- Event Feed

BRIEF DESCRIPTION OF THE ISSUE WE ARE TRYING TO SOLVE
Our app, now integrated with IBM Watson's chat bot, offers a personalized travel and event experience while taking a significant step towards reducing CO2 emissions. By facilitating carpooling and connecting users to shared events, we are actively promoting eco-friendly travel practices and a greener, more sustainable future. Join us in reducing your carbon footprint and creating a more environmentally conscious community of travelers.

How our technology solution can help
Carpooling and eco-friendly choices reduce transportation CO2 emissions significantly.

IBM AI service(s) used
IBM Watson Assistant was used in this project. It's graphically located on the homepage of our software. Programmatically, it is used as a component in our React app. The embedded HTML code is located in the client folder. If you open the "src" folder and click on "components," and then "ChatBot.js," you will see that the source is directed to the HTML file, and it's wrapped in an iframe tag. This is the solution we used to get our chatbot on our site. We used dialog, custom intents, as well as system-generated intents such as #General_greeting, #General_ending, and #General_about_you. In addition, we created entities for the bot to find locations and events the member is seeking out. We plan to expand the capabilities in V2 by opening up locations beyond the New England region, as well as implementing Watson Search to better serve members' very unique and individual needs. We aim to pair them with other members who have similar likes and interests derived from their responses to the questions located in the "view full profile" button in the user's profile section.

![Screenshot of My App](Scoop.drawio.png)

1. User access the site and is greeted by a welcome message and a widgit to access Watson.
2. The user searches for events they want to go to. The chat bot will ask where (city, state) so it can refine its search.
3. The bot "searches" the city or state in the New ENgland region that the user specified for the events requested and returns how many car pools it has found with people compatible to the member.
4. The bot sets up a car pool for the user with the best match.
