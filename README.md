# promise-issue

A reproduction demonstrating that making a server-side method call does not behave in the same way as making the same call from the client. We expect the final Promise to be resolved before the method returns (which is the behaviour seen when calling from the client). However, when called from the server, the Promise object is returned instead.

## Installation

    git clone https://github.com/robfallows/promise-issue promise-issue
    cd promise-issue
    meteor npm i
    meteor

The server's console log shows the result of calling the async method (shows `{}` - expected "42").

The client browser shows the result of calling the async method from the client (shows "42" as expected).

