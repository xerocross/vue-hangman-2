# vue-hangman-2

This is a Vue 3-based implementation of the old children's game
hangman. The idea is to guess letters and then ultimately guess
the word or phrase before the little man figure is fully hanged.

## Updates


### JS => TypeScript

I changed the project from JavaScript to TypeScript. At the same time,
I fixed some of the issues that still existed from the original verion 1
of my app, which included upgrading the backend too.

### May 2023 Vue 2 => Vue 3

More than anything else, this app is a port of an old Vue Hangman app I wrote
back in 2019 or so, here: https://github.com/xerocross/vue-hangman.
That app doesn't build anymore even on my own computer because of
updates to Node and to the app's dependencies. It is therefore deprecated. 
Here, I started with a fresh Vue 3 project, but I did not re-write the app from whole cloth. Where possible, I 
simply moved code over from the old project and made minimal changes so that it would 
function in Vue 3. It is not necessarily intended as an example of JavaScript 
written as I would write it today (circa May 2023). The point of this is 
simply to fix something on my portfolio that was broken.

I'm still working on porting the unit tests.


## Concept

### Hand-rolled

In exercises I make for myself like this app, I typically write 
as much of the code as I can in plain JavaScript, so if you inspect 
the code in my projects you will often see I have hand-rolled 
code that ordinarily would have been borrowed from standard 
libraries. Other times the point is to *practice* using some
library. In any event, my exercise apps such as this one are *not* 
examples of how I would write code for a production environment 
except where specifically indicated. That does not mean I do sloppy 
work. I do intend to write and
test my code to the highest standards I can. It just means that
I know that in the field it's better to use battle-tested 
libraries.

### Backend API Guess-and-Response

An important concept for this app is that the frontend actually
**does not know the game phrase**. There is no way to inspect the state
of the frontend to see what the word or phrase is. Instead, the
frontend interacts with the backend API, which I also wrote, 
just as the guessing person playing the game interacts with the 
person who knows the game word. The API keeps track of what the 
word/phrase is, and it
will answer questions about individual letters or it will answer
yes/no if the frontend
guesses the entire phrase, but it will not simply give you the
phrase on demand.

That was an intentional design decision. Obviously I could have
encoded the entire list of phrases and all of the logic of this
game into the frontend. I decided it would be more fun for me as
the developer to mimic the the logic of guess-and-response.

## Technology

Under the hood, this app uses Vue 3 for the view, Vuex for state 
management, and Axios for AJAX. I used Axios rather than an ECMAScript 
6 shim because I did not like to use shims when I originally wrote 
Vue Hangman and I liked Axios. I used jQuery exclusively for visual 
effects. jQuery plays no role in application logic.

For unit testing, I am using Jest, vue-jest, and @vue/test-utils.

### The Backend API

The backend API which provides the game phrase is a one-page Node
script together with a text document listing the game phrases. It
is extremely simple. Express is the server framework. That said,
I have decided not to publish the code for the backend because 
I do not want to 
publish the list of phrases used by this hangman app.

## Still In Progress

Porting over the testing is still in progress. Also, I believe the
app needs more testing than what was included in the original Vue
Hangman. I will continue working on that incrementally.