# Group_Typescript_Quiz

I.	The Purpose of this Project

This project was developed to showcase our understanding of TypeScript with React, along with Tailwind CSS, while highlighting our creativity and teamwork. We named it Swedish Words Quiz, a simple web-based game that anyone can play. The project features React components built using TypeScript.

II.	How to run the project

Begin by opening the project folder in Visual Studio Code. Then, open a terminal, type cd client, and press Enter. After that, run npm run dev. Now, you can see the project's output. Feel free to explore and have fun play the game. Enjoy!


III.	The roles each group member played

a.	Nav styling by Yui 
b.	Welcome Page by Megumi  
c.	Button component with style by Dawn
d.	Quiz Questions by Megumi  
e.	Quiz component by Yui 
f.	Levels page (mainly only styling) by Megumi  
g.	Registration by Megumi 
h.	README by Dawn  

Others: 
a.	Component Developer (double checking in the end if the Quiz works with the components) by Megumi  
b.	TypeScript Specialist (double checking if TS are correct in the end) by the team 
c.	Styling Expert (check if styling is correct and consistent on coding and on page) by Yui and Megumi  

IV.	Any challenges we face and how we overcame it

**The .gitignore**
We faced several challenges while working on this project. Megumi initially published the repository on GitHub, and we created individual branches for our assigned tasks. However, when we cloned the repository using GitHub Desktop and opened it in Visual Studio Code, we encountered numerous errors due to the missing node_modules folder inside the client directory. This folder is crucial for maintaining the project structure and tracking tool configurations. To resolve the issue, we consulted our instructor, who advised us to include a .gitignore file in the GitHub project and it works!

**The Button Components**
Dawn encountered difficulties when declaring and importing the button component in various individual components. In Welcome.tsx, an error occurred with the button component. To fix the error, we imported useNavigate to handle navigation to the next page of the game and the button component finally works in Welcome.tsx!

**Tailwind css in Button Component**
Yui discovered that the button component wasn't being used by the other individual components. Instead, they were relying on the styles from index.css. We all wondered why this was happening. After some investigation, we found that the project was still recognizing and applying index.css styles, even though we hadn't explicitly imported it. This was because it had been installed globally in the project folder. Yui suggested switching to Tailwind CSS for styling, and Megumi proposed using className to ensure the project recognizes Tailwind CSS in Button component instead of index.css. After a brainstorming session and some hands-on work, we successfully updated the project to use the button component styled with Tailwind CSS.

**Tailwind css button not centered**
One of the pages in our project had buttons that weren’t centered. As usual, we shared advice, conducted research, and learned together. In the end, Yui resolved the issue on the quizTwo page by applying Tailwind CSS classes, including flex, justify-center, min-h-200, min-h-min, and items-center, to properly center the buttons.


----

Conclusion
Effective communication is the cornerstone of successful teamwork. By fostering open dialogue, team members can gain a deeper understanding of each other's perspectives, support one another, and collaboratively address challenges. Sharing ideas and insights leads to mutual benefits, helping the team complete projects more efficiently and successfully.

Acknowledgements
I would like to express my gratitude to my teammates, Yui and Megumi, for their patient guidance in helping me navigate GitHub, especially since it was my first time using it extensively. We collaborated closely, fixing bugs together and offering each other valuable advice. Special thanks also go to our instructor, Michiel van der Gragt, for providing us with these challenges, which have greatly enhanced our understanding of TypeScript and contributed to our growth as developers.
