# Contacts

# To run the application on localhost
1) Please make sure Node is installed: open a terminal/command prompt, type node -v, then push Enter. If you cannot see the version number of your node, it must be installed. Visit https://nodejs.org/en/download/ to download and install Node.

2) Please open the project files by any code editors (VS code is suggested) then type `npm install` command to the terminal. Then pus Enter. This step is required to install the node modules to this project.

3) Use `npm start`. This command runs the app in the development mode and you can view the project in (http://localhost:3000). You can close the development mode by using ctr c, then type Y (as yes)

4) To run the written unit test please type the `npm test` then push Enter.


# Hosting
The app is hosted on Firebase. Please visit https://contacts-e3062.firebaseapp.com/contacts


# App architecture and key decisions

Routing:
    - I used React Router V6 for the routing. The 4 types of pages can be found in "pages" folder. 

Folder structure:
    - My components can be found in "components" or in "framework" folder. "framework" includes the general re-usable elements such as button, input, etc, while I put into "components" folder my app specific elements. I used subfolders in the components folder that are defined by topic/functionality to make it easier to overview and navigate.
    - Since creating a new contact and editing an existing contact should use the same fields, I merged them into the "ContactEdit" component to avoid the code duplications.

State and props management: 
    - Since it is a smallet app that still need to use some general/application level states I used context (useContext) for the states that are used by more components and local states (useState) when the state should be used only locally. In this app I did not prefer to use Redux because there is no general state that should be changed by every keystroke and the app size is not that big either to use the advantages of Redux. Even if I personally prefer Redux in this app it did not seem to be reasonable to use it.
    - To separate the functions of the components as clearly as possible I decided the manage the GET API calls in the pages level (Contacts and ContactDetails) that updates the context with the received contacts/contact data or pass them through props.
    - The Save and Delete API call are managed in SelectedContactDetails to separate them from the GET calls and also keep the ContactEdit clearer. ContactEdit handles its local functionality only (filling the form, changing picture etc).

Firebase, axios:
    - To make it simple for a demo app I chose firebase realtime database to store my contacts data and host my application there. I preferred to use simply GET/POST/PUT/DELETE requests to make it more general and in the future replace it with another db in case of need.
    - I used axios because I like it a little bit more than using fetch. I created a custom hook to handle the general parts of the axios calls and to handle the loading and error states.

Styling:
    - I used css modules, sometimes with clsx. Everything is customized, there are no external imports. 
    - In case of need I added different styling for the mobile view by using media@.
    - Since the styling of ContactEdit and ContactView are very similar I merged their module.css files into one file: ContactViewEdit.module.css

Git Actions:
    - I setup my git actions when I linked the app to firebase. With the current setting when there is a push action to the main branch, the automatic tests and the deployment to firebase run automatically. 
    - In case of more people on the project or more environments, it is suggested to setup the automatic deployment to a different branch (for example to a branch "deploy" or *environment name*) instead of linking it to the main. 