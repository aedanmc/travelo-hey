# Week 4 Status Report
*Team: Travelo-Hey!*

*Dates: April 28 - May 4, 2022*

*Contributors: Aedan McCall, Alex Zuniga, Camila Christensen, Matt Broom, Mike Harris*

## Agenda
- Needing to simplify our use case in order to get enough complete for the beta release, especially considering that the login page is likely going to be more difficult to implement in time

## Team Report
1. Plans and Goals from Last Week
    - Build system ready
    - Implementation of login page
    - Start on implementation for API agile style
    - Functionality for login page
    - Finalize Post Beta milestones
2. Progress and Issues
    - Progress
        - Set up CI w/ Google Cloud Build
        - Testing framework set up
        - Hashed out how tests and CI will be integrated together
        - Continued development of components for front-end
        - Developed concrete code review process for team
    - Issues
        - Components behind schedule for beta release (for front-end and for back-end)
            - Need to simplify and solidify new beta release use case
        - Server-side package.json build file scripts not setup properly yet - still in progress
3. Plans and Goals for Next Week
    - Catch up on components in anticipation for beta release
        - Implementation of login page (or another equivalent for potential new use case)
        - Functionality for login page (or another equivalent for potential new use case)
    - Finish setup of package.json build file scripts
    - Complete beta release assignment including presentation

## Team Member Contributions
### Aedan McCall (they/them)
1. Plans and Goals from Last Week
    - Plans:
        - Utilize the materials and decisions made for the software architecture deliverable
        to start writing code
        - Collaborate with the whole team on API components asynchronously
    - Goals:
        - Make significant progress towards first use case on both API and UI implementation
        - Decide on whether front end will use any testing frameworks or just visual inspection
2. Progress and Issues
    - Progress:
        - Started writing code for front end using Material UI
            - Draft version of first component in front-end folder (link?)
        - Decided that front end will use react-testing-library and
        Jest
        - Wrote first test for React components
    - Issues:
        - Struggling with getting work done on time for beta implementation
        - Considering whether login use case is the right beta goal

3. Plans and Goals for Next Week
    - Finish implementing layout for first use case
    - Finish implementing functionality for first use case
    - Add front end tests as needed


### Alex Zuniga (they/she/he)
1. Plans and Goals from Last Week
    - Plans
        - Begin on UI implementation for login page
        - Work on decisions made in Architecture assignment
        - Collaborate with Aedan for UI and the team for API
    - Goals
        - Create skeleton of login page or make some sort of decent progress
        - Keep updated on Aedan's code
        - Work with team on any remaining issues
2. Progress and Issues
    - Progress
        - Divided up the login page into potential components within MUI 
        - Created a hand written skeleton of psuedo-code layout for the login page's components 
        - Implemented CI between our Github repo and GCP (with Matt)
        - Wrote triggers for various actions that start a build 
        - Aided in writing up the CI portions for the CI & Testing assignment
    - Issues
        - Still a bit worried that we will not have enough time to complete everything but hoping that a new use case will fix this
        - 
3. Plans and Goals for Next Week

### Camila Christensen (she/they)
1. Plans and Goals from Last Week
    - Work on progress tracker (add some milestones, tags and tasks)
    - Meet with Matt and Mike to finalize equality rating for companies/businesses
    - Setup and populate database
    - Contribute to the architecture and design assignment
2. Progress and Issues
    - Progress
        - Implemented database on GCP and populated countries table
        - Inserted milestones and tasks in the GitHub Projects
        - Assisted team with Architecture and Design assignment
        - Developed database documentation
        - Team lead responsabilities
    - Issues
        - Lack of familiarity with yaml and GCP

3. Plans and Goals for Next Week
    - Assist with the implementation of the server
    - Create yaml file
    - Start implementation for the managing login/sign in page
    - Work with team to complete Testing and CI assignment


### Matt Broom (he/they)
1. Plans and Goals from Last Week
    - Start API implementation (working towards first use case)
    - Back-end functionality for login page
    - Figure out hashing/salting for user passwords
    - Send Identity Platform code to front-end
2. Progress and Issues
    - Progress
        - Set up CI w/ Google Cloud Build (alongside Alex)
        - Assisted in filling out CI & Testing assignment, specifically portions related to CI
        - Created cloudbuild.yaml files for use in building w/ CI
        - Set up my individual API keys
        - Discussed code review process with rest of team
    - Issues
        - Still need to do deeper research into hashing/salting of user passwords through Identity Platform
        - Further work required on back-end in preparation for beta (APIs & database connection)
3. Plans and Goals for Next Week
    - Ensure/finalize implementation of back-end for beta release
    - Assist in integration of APIs & database queries w/ server
    - Add to & clean up documentation in preparation for beta release
    

### Mike Harris (they/them)
1. Plans and Goals from Last Week
    - Setup Node.js with Express.js framework
    - Integrate Google APIs into server
    - Integrate database calls to server
    - Work with team to complete Testing and CI assignment
2. Progress and Issues
    - Progress:
        - Updating server side package.json scripts
        - Setup database connection
        - Modularized back-end files
        - Began ACID and CRUD test implementations
    - Issues:
        - Testing and CI assignment took more than expected, spending more time trying to figure our NPM scripts
        - Was unable to integrate Google APIs and database calls to server
3. Plans and Goals for Next Week
    - Integrate Google APIs to server
    - Integrate database calls to server
