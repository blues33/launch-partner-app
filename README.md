# Profile TM

Profile TM is a simple profile app inspired by launch partner's coding challenge. It's built using mongodb, node.js, and react.  

## Issues

### Authentication
I thought it was best to use Oauth for this project, and I set up everything that I would need for google, facebook,
twitter, and github, but without a heroku link working, I wasn't able to fully finish this feature.

### Heroku
I walked through all of the heroku setup, and fixed several bugs in order to get my heroku app up and running.
Unfortunately, there was still an issue with the connection and it's not loading the assets correctly. I think
it has something to do with my Procfile and how the assets are built, but my troubleshooting wasn't able to
account for this issue.

### S3
I setup an S3 account to handle picture uploads, but after debugging it extensively,
the permissions were still not allowing me to upload photos.

### Mongodb
Mongodb connection to the database works, and allows profile index viewing, and
profile creation. Because Oauth is not setup, anyone can create a profile at anytime.
