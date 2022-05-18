# Bug/Issue Tracking

Travelo-Hey! uses GitHub Issues to track current issues and bugs relating to different aspects of the project.

## How to submit a bug for tracking

From the [main repository website](https://github.com/aedanmc/travelo-hey) 

1. Navigate to the [Issues tab](https://github.com/aedanmc/travelo-hey/issues). 

2. Observe the list of open issues displayed and identify whether the issue you want to identify to the team has already been documented.

3. If the bug or issue has been identified already and you want to provide additional information, choose the bug from the list of open issues and add a comment following the format described in [Bug Documentation Guidelines](#bug-documentation-guidelines).

4. If the bug or issue has not yet been identified, press the button labeled "New Issue".

5. After the page loads, write a short but descriptive title that explains what the bug is.

6. In the box below the title, follow the guidelines mentioned in [Bug Documentation Guidelines](#bug-documentation-guidelines).


## Bug Documentation Guidelines

Use the bullet points below as a template for how to write helpful bug reports:
- A descriptive title in the appropriate place
- The browser you are using (including the version)
- The operating system you are using (Windows, OS X, Linux, etc)
- The location/webpage where you discovered the bug
- The behavior you expected to see
- The behavior you actually saw
- A sequence of steps taken to reproduce the bug, if you can.
  - If the steps to produce the bug are not clear to you, provide as much information as you can in under 70 words about the bug and the state of the program when you encountered it.
  - If you cannot reproduce the bug consistently, it is important that you offer detailed information in the other sections of your report.
  - If you cannot reproduce the bug at all, there is a good chance that the developers will not be able to either. Consider whether this is useful to the project or not.

## Example Bug Reports

The following two example bug reports offer a reference for how to format a bug report to on the GitHub issue tracker. The first one is a good example because it is descriptive and offers precise instructions for how to reproduce the bug. The second is a bad example because it does not offer unique or actionable information for how to reproduce the bug.

### Good bug report
Title: Clicking on a business does not load business information
Browser: Google Chrome version 101.0.4951.54
Operating System: Windows 10
Location: Search/Landing page under "Featured Spots"
Behavior expected: A page that showed more information about the business I clicked on should have loaded, including name, contact info, equality rating, etc.
Behavior seen: Nothing loaded when I clicked on a business I was interested in. I was delivered to a blank page.
Steps to reproduce:
1. Start Google Chrome from the taskbar.
2. Press Ctrl+N to open a new window.
3. Type http://localhost:8080 into the search bar and press enter.
4. Wait for the Travelo-Hey! landing page to load.
5. Click on a business under "Featured Spots".

### Bad bug report
Title: Business info page doesn't work
Browser: Google Chrome
Operating System: Windows
Location: Search/Landing page
Behavior expected: I see the business I clicked on.
Behavior seen: I did not see anything when I clicked on a business.
Steps to reproduce: Navigate to the website and click on a business.
