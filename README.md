# Vanhack English Pre-Test

_This is was a submission to [Vanhack](https://www.vanhack.com) for vanhackathon 2019_

## Overview

### Demo

You can access and test your proficiency [here](https://google.com)

#### Install and run

For instructions for the **Backend**, please [click here](https://github.com/willianbs/vhk-backend-speech/).

For the **Frontend**, you just need to run as a default React app:

`git clone https://github.com/willianbs/vhk-frontend-speech.git`

Go to the project directory and use:

`npm install` or `yarn`

After all dependencies are downloaded, use: `npm start`

Open <http://localhost:3000> to view it in the browser.

## Design and Architecture

### Frontend App

A lightweight React.js app

### Backend API

The backend api was implemented as a Python simple server with Flask to deal with the upload request and the speech analysis. No login required at this time.

## About the project

### Problem

One important part of VanHack process is the English verification process.
It needs a real person to evaluate all entries and it can take a lot of time of a small team.

### Solution

My idea can go 2 ways (or both):

- Using as a tool for the users (Premium only?) to test their proficiency before submitting each video. So they'll know if they've performed well enough to get a good grade.
- As an auto evaluation system for the Staff to reject/approve based on AI and if the machine isn't able to get it right or there's a claim, the Staff can optimize the work.

And that's about it :)
