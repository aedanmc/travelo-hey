## Setting up a Domain Name Service

Usually, you will want to register a domain name for your site. You can use a public domain name registrar, such as [Google Domains](https://domains.google.com/about/), 
to register a unique name for your site. If you want complete control of your own [domain name system (DNS)](https://wikipedia.org/wiki/Domain_Name_System), you can use [Cloud DNS](https://cloud.google.com/dns) to
serve as your DNS provider. The Cloud DNS documentation [includes a quickstart](https://cloud.google.com/dns/quickstart) to get you going.

## Pre-requisites
- Create a GCP project
- Have the project on Github
- Enable Cloud Build API
- Enable Cloud App Engine API

## Migrate Project to GCP
1. Go to the search windows and enter "Repository"
2. Click on Source Repositories.
3. Click on **Get started** and **Create repository**.
4. Then, select **Connect external repository**.
5. Under Git provider choose Github and click on Connect to GitHub.
Next a dialog window will open where you'll need to log into GitHub (if you're not already) and then confirm the connection between Google 
Cloud and GitHub. When the connection is made, a window with your GitHub repositories will appear. Choose the one you'd like to connect with 
your Google Cloud project.
6. Click on the **Connect selected repository** button.
A new page with your Google Cloud repository will open. It will have the code from GitHub in it.

## Set up Build Config File (yaml)
-

## Use Cloud Build
1. Open your [Cloud Build Triggers page](https://console.cloud.google.com/cloud-build/triggers)
2. Choose your project if it had not been chosen
3. Click **+Create Trigger** button
4. These are the following fields that you have to fill

**Name:** the name of the trigger. You can name it whatever you want, but because I am creating a trigger when I push to master, I’m naming it 
`“push-master-branch”`

**Event:** there are three kinds of events that you can choose: Push to a branch, Push a new tag, and Pull request (although only for GitHub). 
Since I am creating a trigger when I am pushing a commit, I choose “Push to a branch”

**Source:** if you have chosen “Push to a branch” in the event, it will show **Repository** and **Branch** option. Since I have added the repository, 
I can choose it in the dropdown. Also, this is where you can choose which branch push will trigger the build. All the branches that you have 
pushed to Github will be shown in the dropdown. In this case, I choose **“^master$”**.

**Build configuration**: there should be nothing that you need to change. But to make sure, check if the input is like the following.

## Setup Google App Engine
Because Cloud Build will build the repository to an App Engine application, we should create it first.
1. Go to [App Engine tab](https://console.cloud.google.com/appengine) in your GCP console
2. Click Create Application button
3. Choose your Region
4. Click Create App button
5. You will be asked the Language and Environment options which are optional. Choose “Node.js” for the Language options so you will be given Node.js documentation links for App Engine in the next page.

## Deploying Website
- Using Cloud Shell:
  1. Open the Cloud Shell (look for it in the search bar)
  2. A terminal window will appear (in the bottom of the screen). Enter:
```gcloud app deploy app.yaml```
  3. When it asks you "Do you want to continue?" enter: Y

- Using App Engine:
  1. Download Cloud SDK and follow instructions in the GCP page

## Updating the Code
Whenever the code is updated, do the following:
Upload the code to GitHub
Deploy the code to GAE using this command: 
```gcloud app deploy app.yaml```
