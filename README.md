# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# netflix app
- create vite@latest
- configure tailwind css
- Login
    - header
    - form
    - image
- signup
- Toggle both
- validation
- useRef
- creating validate.js in utils for email and password validaation using rejex
- useref for referencing input of form and then destructure to email.current.value check in console
- then use validate.js function and validate
- error msg set state that it display message. update msg from above task by setError = msg(validate logic)
- importing auth and its import statement in firebase file so that we can use anywhere
- copy paste the firebase signup code and also dont forget to import autb from utils
- replace the email and password by actual vlaue that is email.current.value// we have seen it be console log as getting it by use ref
- done sign in sign up from firebase documentation
- setup redux store
- on login just made signout and profile button
- and added onclick of logout and navigate to "/"
- now using firebase update user profile, update the name.
- bug fix of signin sign out
- user login logout handle for bug scene
- unsubscribe when unmount did in header
- called api from movielist->now playing that gives latest movie 
- taken the same f=syntax of apis and kept it in browse page and just made function of nowplayingmovies and called it in useeffect with one pair of bracket to load it once
- now using usedispatch adding the json.result in store but forst create slice and store
- now cur all that code of api callig and adding to store and add it in a custom hook in hooks folder. its just a nromal function. addNowPllayingMovies
- i had done logo as absolute in "/" but in "/browse" it ll cause problem that content was beginning from the same top of logo so used uselocation in header logo so that while its "/" its absolue and when "/browse" its not absolute
- now then normal just showed title description and 2 buttton
- next for bg video, took a new api that needs movie id and gives trailer so we already have all movies and even first movie in MAINMOVIES--STORE SE LIYE THE, so pass props and those accepts api id then if movie has two or more trailer then show 0 index trailer. bt before that we filtered the data woth only trailer bcz movie might have many things so used filter one
- also handled case that if there is no trailer then take first result 
- secondary component
- made horizontal list and it shows image then did some css
- align container 1 and 2 for better ui
- made another api calls and made a hook copy paste
- GPT feature
- made first header multilingual by redux store and used select for dropdown menub and from that onchange we take e.target.value and pass that to store where we already made a slice of language where default value is english.
- and then apply on placeholder and search by using selector and change dynamically . rememmber when using here use selectore we need to give as arraykey lang[allowlang].placeholer is an example.
- did that when its gpt page show button as home and when home page show gptmood
- also did that language feature only available on gpt page not in whole 

# feature
- login/signup
    - signin/signup form
    - authentication
    - 
