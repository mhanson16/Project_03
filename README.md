# Project_03
Emission Project - Team 1
Xiaolin Ruan, Lucia Tablas, Maddy Hanson, Poonam Fandan


Our project analyzes raw csv data taken from Kaggle 
src: https://www.kaggle.com/datasets/thedevastator/global-fossil-co2-emissions-by-country-2002-2022 

The dataset explores historical Global CO2 Emissions data by Country on 6 main CO2 emission types: Coal, Oil, Gas, Cement, Flaring, and Other. 

We chose to use the dataset that gives the emissions by country's per capita as that helps to better compare each country's emissions regardless of geographical size or industry. Raw data can be found in the 'Intial_Data' folder. Dataset used was "GCB2022v27_percapita_flat.csv"

Cleaning the Data:
We used a series of SQL statements to clean the data and export the new file to csv. The raw data itself was already pretty usable, the only things we had to do was clean up some of the country names that contained special characters (ie Cote d'Ivoire, Curacao), fill in some blanks on ISO labels, and limit the historical data from original start year of 1750 to 1945. The cleaned dataset was then exported to csv and analyzed in Pandas and Jupyter Notebook.

SQL queries used to clean the data are in 'emissions.sql' file.

Analyzing the Data:
We all used our own Jupyter Notebooks to individually analyze the data and create our visualizations. Working files are in each individual branch in our Project 3 GitHub.

JS Library: 
The most challenging part of the assignment was working with a JS library that we hadn't covered in class. We chose to use ChartJS (https://www.chartjs.org/docs/latest/getting-started/) and the tutorials hosted by the wonderful developers at https://www.chartjs3.com/docs/chart/getting-started/. The end result is in the js file called 'app.js' and html file 'index.html'.

Web page is published using GitPages and can be accessed via the following link: https://mhanson16.github.io/Project_03/

Enjoy!