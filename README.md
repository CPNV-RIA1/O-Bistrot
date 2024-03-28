# Ô-Bistrot
## Description
Explication du fonctionnement
## Getting started
### Prerequisites
List all dependencies and their version needed by the project as :
- IDE : visual Studio Code
- Package manager: npm
- OS supported : Windows 11(23H2), MacOs (Sonoma 14.2), Linux (Mint 21.3)
- ### Configuration
## Deployment
### On dev environment
For set up the project on your local machine, you need to follow the following steps:
- Clone the project from the repository
- Install the dependencies with the following command:
```npm install```
- Run the project with the following command:
```npm run dev```
- Open your browser and go to the following address:
  [http://localhost:5173/public_html/home.html](http://localhost:5173/public_html/home.html)

### On production environment
*available soon*

## Directory structure
## Design
- [HTML Template](https://www.free-css.com/free-css-templates/page277/pigga)
- [Zonning figma](https://www.figma.com/file/C4iOldeuuSRcGp3kcR0gpv/O-Bistrot?type=design&node-id=0%3A1&mode=design&t=AwjxqQ0ZgTjpz8BE-1)
## Collaborate

To collaborate on the project, the following conventions must be followed:
- git management is based on [gitflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow) conventions
- each story must be created in a dedicated feature with the following naming: `feature/BDD-name-of-the-feature`.
- commits must respect the following conventions:
  - `feat: implementation about something new in a feature`
  - `fix: fix a bug`
  - `refactor: refactor code`
  - `style: change style`
  - `docs: change documentation`
  - `test: add tests`
  - `chore: change configuration and update readme/.gitignore`
- The stories are technical based and follow the [icescrum](https://icescrum.cpnv.ch/p/RIA1PROJEC/#/planning/3923/details)
- Issues will be displayed on the purpose github issue page
- The discussion about the on working are being conducted in our personnal Discord (acces can be requested by contact)
    
## Structure 
```bash
O-Bistrot
.
├── public_html
│   └── assets
│       css
│       ├── imgs        
│       ├── js          // Our custom script and the one from the template
│       ├── scss        
│       └── vendors     // External JS library
└── src
    ├── test            // Classes for testing
    └── models          // Logical model
```
## Diagrams
- Basic understandings : [On figma](https://www.figma.com/file/yOVI2HH2C1dpsqDpLlH6it/Diagrams?type=design&node-id=2-2&mode=design&t=EIcA1AfOcoe1ms3t-0)
- Class Diagram : [On LucidChart](https://lucid.app/lucidchart/5ea62d06-7303-4392-9b2d-81b3774c5008/edit?viewport_loc=611%2C-324%2C1644%2C1045%2C0_0&invitationId=inv_0775b473-8e54-4bc9-8559-b5252b5dd1e9)
## Authors
- Victorien Montavon
- Cyprien Jaquier
- Sebastien Moraz
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.txt) file for details
## Contact
<p>Victorien Montavon : victorien.montavon@eduvaud.ch</p>
<p>Cyprien Jaquier : cyprien.jaquier@eduvaud.ch</p>
<p>Sebastien Moraz : sebastien.moraz@eduvaud.ch</p>
