# Week 3 Status Report
*Team: Travelo-Hey!*

*Dates: April 21 - 27, 2022*

*Contributors: Aedan McCall, Alex Zuniga, Camila Christensen, Matt Broom, Mike Harris*

## Agenda
1. Get feedback on Architecture and Design
    - MVC is not a good option for the implementation of our project, because of the way the view changes. We should look more into the definition of MVVM.
    - The architeture doc for the back-end is really only the Node.js file. There are no class on components. We are using Express.js and other frameworks to retrieve the data from the database.
    - The back-end is not very flexible and it seems hard to scale. In order to add additional features it would make things hard. Easier if we think about Object Oriented Programming to make the back-end more flexible.
    - The structure of the doc is hard to follow. We need to keep track of the changes we make. Highlight the updates in the document.
2. API keys - how to store them for use?
    - Follow the guide
    - There is a difference between deployment and production and each one has its own guideline
    - For production, some of the secret keys will be included in the package.
3. Next.js vs. React
4. For the build system
    - Use Docker (not really related to build system but it was a suggestion)


## Team Report
1. Plans and Goals from Last Week
    - Scrum structure (make a document to delineate)
    - Progress Tracker
    - Finalize UI designs (ASAP)
    - Modify Github structure (move sketches into docs)
    - Finalize equality rating for companies/businesses
    - Hash out details with regards to software components
    - Setup MySQL database
    - Start on implementation for API agile style (with heavy communication!)
    - Begin working on UI implementation
    - Implement feedback on requirements document
        - Add use case for login

2. Progress and Issues
    - Progress
        -  Scrum structure
        -  Progress Tracker
        -  Finalize UI design
        -  Modify Github structure
        -  Finalize equality rating for companies/businesses
        -  Setup MySQL database
        -  Implement feedback on requirements document
    - Issues
        - Start on implementation for API agile style (with heavy communication!)

3. Plans and Goals for Next Week
    - Build system ready
    - Implementation of login page
    - Start on implementation for API agile style
    - Functionality for login page
    - Finalize Post Beta milestones


## Team Member Contributions
### Aedan McCall (they/them)
1. Plans and Goals from Last Week
    - Start implementing UI layout for front end with Alex
    - Coordinate project board tasks/ cards
2. Progress and Issues
- Progress:
        - Added milestones and issues for next deliverable to GitHub tracker
        - Began researching front-end implementation frameworks for React
        - Research testing frameworks to build sample tests
        - Discussed testing strategies as a team
        - Assigned individual pages and components for front end team to work on
    - Issues:
        - Feeling overwhelmed with what we have to do next (implementation, testing, CI, documentation)
        given how much time we have
        - Trying to figure out what our use case implementation will be
        (components, interfaces, etc)
3. Plans and Goals for Next Week
    - Plans:
        - Utilize the materials and decisions made for the software architecture deliverable
        to start writing code
        - Collaborate with the whole team on API components asynchronously
    - Goals:
        - Make significant progress towards first use case on both API and UI implementation
        - Decide on whether front end will use any testing frameworks or just visual inspection


### Alex Zuniga (they/she/he)
1. Plans and Goals from Last Week
    - Plans
        - Add new UI page for business information details and reviews
        - Discuss/add new UI page for leaving a review
            - Also figure out how a user can manage/view their reviews
    - Goals
        - Complete UI final designs/iterations
        - Begin implementation for front-end with Aedan
2. Progress and Issues
    - Progress
        - Divided UI into components with Aedan
        - Aided in Architecture and Design discussion and assignment
            - Added individual submission components
            - Worked collaboratively on other sections
        - Began looking at login page implementation
        - Created an implementation check in plan with Aedan
    - Issues
        - Worried that we will not have enough time to complete everything despite a schedule
        - Feeling overwhelmed with a clear starting direction (i.e. setting priorities for what needs to be done for beta UI implementation)
3. Plans and Goals for Next Week
    - Plans
        - Begin on UI implementation for login page
        - Work on decisions made in Architecture assignment
        - Collaborate with Aedan for UI and the team for API
    - Goals
        - Create skeleton of login page or make some sort of decent progress
        - Keep updated on Aedan's code
        - Work with team on any remaining issues

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
    - Work with backend in setting up MySQL database
    - Begin implementation of backend
    - Finalize details of equality rating for businesses
    - Assist in delineating specifics of Scrum meeting structure
2. Progress and Issues
    - Progress
        - Started using Github project tracker
        - Helped in completing Architecture & Design assignment
        - Finalized details with equality rating for businesses
    - Issues
        - Unfamiliarity with API keys
        - Have not started programming implementation for back-end (but do have MySQL database)
3. Plans and Goals for Next Week
    - Start API implementation (working towards first use case)
    - Back-end functionality for login page
    - Figure out hashing/salting for user passwords
    - Send Identity Platform code to front-end

### Mike Harris (they/them)
1. Plans and Goals from Last Week
    - Implement database table structure in GCP
    - Begin investing into Github project tracker tasks
    - Work with team to complete Architecture and Design assignment
2. Progress and Issues
    - Progress:
        - Implemented MySQL database on GCP and setup our tables
        - Started using GH Project Tracker
        - Developed Scrum procedure documentation
        - Figured out how to deploy project using App Engine API
        - Assisted team with Architecture and Design assignment
    - Issues:
        - Lack of familiarity with best practices of API keys
3. Plans and Goals for Next Week
    - Setup Node.js with Express.js framework
    - Integrate Google APIs into server
    - Integrate database calls to server
    - Work with team to complete Testing and CI assignment
