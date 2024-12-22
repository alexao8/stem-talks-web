# Webpage for STEM Talks Menorca event

## Local Development
First, install NodeJS
######       
    brew install node
Check you have installed it correclty by retrieving the node and npm versions
###### 
    node -v                            
    npm -v

then, install Angular
######       
    npm install -g @angular/cli

Set up project
#####
    npm install

Finally, execute the project in your local machine
#####
    ng serve

## Road to Production
In order to build a production candidate, execute the following command:
#####
    ng build --configuration production

This will generate a dist folder in your project, each file that is generated in that folder, needs to be added in 
your hosting of preference.