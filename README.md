# vue-hangman-2

This is a Vue-based implementation of the old children's game
hangman. The idea is to guess letters and then ultimately guess
the word or phrase before the little man figure is fully hanged.

## Porting from Vue 2

More than anything else, this app is a port of an old app I wrote
back in 2019 or so, here: https://github.com/xerocross/vue-hangman.
That app doesn't work anymore, and it is deprecated. Here, I did 
not re-write the app from whole cloth. Where possible, I simply 
moved code over and made minimal changes so that it would function.
It is not necessarily intended as an example of JavaScript written 
as I would write it today.The point of this is to *not* have something
broken on my portfolio.


## Concept

### Hand-rolled

In exercises I make for myself like this app I typically write 
as much of the code as I can in plain JavaScript, so if you inspect 
the code in my projects you will often see I have hand-rolled 
code that ordinarily would have been borrowed from standard 
libraries.

### Backend API Guess-and-Response

An important concept for this app is that the frontend actually
does not know the phrase. There is no way to inspect the state
of the frontend to see what the word or phrase is. Instead, the
frontend interacts with the backend API just as the guessing 
person playing the game interacts with the person who knows the 
word. The API keeps track of what the word/phrase is, and it
will answer questions about individual letters or if the frontend
guesses the entire phrase, but it will not just give you the phrase
if you give up.

That was an intentional design decision. Obviously I could have
encoded the entire list of phrases and all of the logic of this
game into the frontend. I decided it would be more fun to
mimic the the actual logic of guess-and-response.

## Technology

Under the hood, this app uses Vue 3 for the view, Vuex for state 
management, and Axios for AJAX. I used Axios rather than an ECMAScript 
6 shim because I did not like to use shims when I originally wrote 
Vue Hangman and I liked Axios. I used jQuery exclusively for visual 
effects. jQuery plays no role in application logic.