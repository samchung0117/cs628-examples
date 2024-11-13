import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

import session from "express-session";
import passport from "passport";
import passportGitHub from "passport-github"
const GitHubStrategy = passportGitHub.Strategy;

const gitHubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

const users = [];
const User = {
  findOrCreate: ({ githubId }) => {
    let user = users.find(user => user.githubId === githubId);
    if (!user) {
      user = { id: users.length + 1, githubId };
      users.push(user);
    }
    return user;
  }
};

passport.use(
  new GitHubStrategy(
    {
      clientID: gitHubClientId,
      clientSecret: githubClientSecret,
      callbackURL: "https://curly-cod-vp49jg66qjgcp7p7-5050.app.github.dev/auth/github/callback"
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const user = await User.findOrCreate({ githubId: profile.id });
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/record", records);

app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('https://curly-cod-vp49jg66qjgcp7p7-3000.app.github.dev/home');
  });

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});