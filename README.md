# READABLE UDACITY
This is the third project of the UDACITY React Nanodegree Program.

## Aim
Show the understanding of the use of React Native. 

## Functional description
The application is called Mobile Flaschcards. It lets the user to manage a set of decks and cards. The user can:
- Add new decks.
- Add cards to existing decks. A card is just an object containing a question and the given answer.
- Start on each desk a quiz. During the quiz, the user can check the answer to each question. The user must him/herself categorize each answer given whether it is correct or not.
- At end of the question set, the app indicates the total of correct answers. 

## Technical description
- The app was created with `create-react-native-app`
- Redux is used to manage most of the state
- The navigation is done through TabNavigator and StackNavigator
- The persistence of data is done through AsyncStorage
- The app was tested ONLY on iOS simulator

## Install
You can use locally on the computer the following way:
- clone the project: git clone https://github.com/ivivanov18/ReactNanoDegree-Mobile-Flashcards.git
- To install the dependencies run the command:
    - `yarn install` in the `mobile-flashcards` folder
- To start and use the app:
    - `yarn start`
    - choose the option from the menu corresponding to the iOS simulator