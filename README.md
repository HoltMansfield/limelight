OPERATION

    npm start
      Starts the development server.

    npm run build
      Bundles the app into static files for production.

    Npm test
      Starts the test runner.




INSTALLATION

    npm i



===========================================================================================

Assumptions made:

I assumed the login was weird because we have a static server.  Sure we could have a post endpoint return a user but then there really isn't any kind of authentication process happening.
If this was a production app we couldn't have the user info going over the wire in a human readable form.

Decisions made:

[Bootstrap]  I used it because it's old faithful.  I wouldn't likely recommend it for a production app in 2017 because the look is a little played out.

[Architecture] I tried to avoid the trap of just making everything a connected component just because
'connect' makes it so ridiculously easy to do so.  So for 'posts' and 'routes' that top component that represents the view is the 'smart' component which knows about the API and it distributes data to some 'dumb' components that deal with things like search, sort and displaying data.

[Tests] Bruh, do you even test?  I'm not yet at the point in react where I can write tests as fast as I can just bang out code.  I used some // Dev comments there that can show you how I automated my dev cycle.  I'm getting deeper into testing with enzyme and snapshots in some of my other github repos.  With Angular 4 I was using actual TDD and was very happy with my development flow.  I am in the process of reaching that level with react. 
