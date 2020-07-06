# Programmers' Co-op Creator
big read dog

  ### By Frederick Ernest, Thomas Glenn, Beverly Potts, & Taylor Somers

## Description

  [Description of program functionality & intent presented as an elevator pitch.]

## Languages & Technologies Used:

  ### Programming Languages & Libraries
  * Bootstrap
  * CSS
  * HTML
  * JavaScript
  * jQuery
  * Node
  * WebPack

  ### Operating Systems & Programs
  * Brave
  * Git Bash
  * Google Chrome
  * Microsoft Windows 10
  * Visual Studio Code

## Installation

  1.  Download a web browser, such as Apple Safari, Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2.  Navigate to https://github.com/taylorsomers/coop.
  3.  Click the green "Clone or download" button at the right of the screen.
  4.  Select "Download ZIP."
  5.  Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6.  Open the directory containing the extracted files.
  7.  Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
  8.  Enter the command "$ npm install" in the terminal and press "Enter".
  9.  Follow the "Instructions for Obtaining an API Key" section below to obtain your unique API key for [API(s)].
  10.  Enter the command "$ npm run build" in the terminal and press "Enter".
  11. Enter the command "$ npm run start" in the terminal and press "Enter".
  12. The program should open and run with its user interface accessible in your default web browser.

  ### Instructions for Obtaining an API Key

    1.  Download a web browser, such as Apple Safari, Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
    2.  Navigate to [API webpage].
    3.  Click the button to sign up for a new account or sign in to your existing account.
    4.  Navigate to the section of the API webpage that contains your API key.
    5.  Copy your API key.
    6.  Return to your cloned or downloaded copy of the program you are setting up and open the terminal.
    7.  Make sure you have entered the root menu of the program directory.
    8.  Enter "$ touch .env" into the terminal.
    9.  Open the .env file you have just created and type "API_KEY = " into the file.
    10. Paste your copied API key into the .env file directly after "API_KEY = ".
    11. Review any JavaScript files (*i.e.*, those ending in ".js") in the src subdirectory of the program directory for API calls from the API from which you have obtained the key.
    12. In any of the API calls, identify the section of the API URL that contains the sequence "appid=[API-KEY-GOES-HERE]".
    13. Replace "[API-KEY-GOES-HERE]" with "${process.env.API_KEY}".
    14. Make sure all files in the program directory and subdirectories are saved.
    15. Repeat this process for any other APIs that are called in the program.

## Specifications

  | Program Behavior | Example Behavior | Example Output |
  | ----------- | ----------- | ----------- |
  | Program will allow the user to progress from one screen to another. |  |  |
  | Program will take email and password from user to create a user profile stored in the browser. |  |  |
  | Program will take user's state, LinkedIn profile link, and GitHub profile link, and store them with their user profile. |  |  |
  | Program will present information on successive pages once the user profile has been created. |  |  |
  | Program will present contact information for worker co-op development organizations on a page following presentation of basic information on worker co-ops. |  |  |
  | Program will provide API search function that allows the user to check with the U.S. patent office and see if their preferred business name is trademarked. |  |  |
  | Program will provide API search function that allows the user to check with their state Secretary of State API to see if their preferred business name is trademarked. |  |  |
  | Program will inform user that their company name cannot include the word "Cooperative" if they are registering it in California unless it is specifically registered as a cooperative corporation (not an LLC). |  |  |
  | Program will direct user to the IRS page(s) for forming an LLC. |  |  |
  | Program will direct user to their state Secretary of State's webpage for registering an LLC. |  |  |
  | Program will provide boilerplate worker co-op charter with chosen business name. |  |  |
  | Program will allower user to select calendar dates on which they are available for the founding meeting. |  |  |
  | Program will provide boilerplate worker co-op founding meeting agenda with necessary business items, including selection of President/CEO and Treasurer/CFO. |  |  |
  | Program will provide links to crowdsource services allowing the co-op to raise money for incorporation fees, registration fees, and bookkeeping software. |  |  |
  | Program will provide link to IRS page with forms for creating LLC (which will need to be submitted with names of officers). |  |  |
  | Program will provide link to local credit unions at which the Treasurer/CFO can apply for business checking & savings accounts. |  |  |
  | Program will provide user with link to QuickBooks Online to set up bookkeeping system for the co-op. |  |  |
  | Program will provide links to financial institutions that provide startup capital and non-equity funding (such as revenue-based startup financing) |  |  |

  

## Known Bugs

  * No known bugs at this time. If any are discovered, please feel free to reach out and let me know. If you would like to contribute any fixes or improvements, please do!

### Contributors

  * Frederick Ernest
  * Thomas Glenn
  * Beverly Potts
  * Taylor Somers

### License

This website is licensed under the GNU General Public License GPLv3. (C) 2020 Frederick Ernest, Thomas Glenn, Beverly Potts, Taylor Somers. All rights reserved.