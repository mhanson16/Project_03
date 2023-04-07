-- Drop Tables if Existing
DROP TABLE IF EXISTS emissions_by_countries cascade;

-- Create table and view column datatypes
CREATE TABLE emissions_by_countries (
    country VARCHAR(100),
    iso VARCHAR(100),
    year INT,
    total FLOAT,
	coal FLOAT,
	oil FLOAT,
	gas FLOAT,
	cement FLOAT,
	flaring FLOAT,
	other FLOAT
);

-- View the table to ensure all data has been imported correctly
SELECT * 
FROM emissions_by_countries
WHERE iso = 'AFG';

-- Clean the table 
-- 1. Delete rows where year less than 1945
DELETE FROM emissions_by_countries
WHERE year < 1945;

-- 2. Fill out the missing ISO code
UPDATE emissions_by_countries
SET iso = 'FEA'
WHERE Country = 'French Equatorial Africa';

UPDATE emissions_by_countries
SET iso = 'FWA'
WHERE Country = 'French West Africa';

UPDATE emissions_by_countries
SET iso = 'KOF'
WHERE Country = 'Kuwaiti Oil Fires';

UPDATE emissions_by_countries
SET iso = 'LEI'
WHERE Country = 'Leeward Islands';

UPDATE emissions_by_countries
SET iso = 'PIP'
WHERE Country = 'Pacific Islands (Palau)';

UPDATE emissions_by_countries
SET iso = 'RYI'
WHERE Country = 'Ryukyu Islands';

-- 3. Rename the countries with symbol
UPDATE emissions_by_countries
SET country = 'Cote dIvoire'
WHERE iso = 'CIV';

UPDATE emissions_by_countries
SET country = 'Curacao'
WHERE iso = 'CUW';

UPDATE emissions_by_countries
SET country = 'Reunion'
WHERE iso = 'REU';

-- 4. Replace Nulls with 0s
UPDATE emissions_by_countries
SET total = 0
WHERE total IS NULL;

UPDATE emissions_by_countries
SET coal = 0
WHERE coal IS NULL;

UPDATE emissions_by_countries
SET oil = 0
WHERE oil IS NULL;

UPDATE emissions_by_countries
SET gas = 0
WHERE gas IS NULL;

UPDATE emissions_by_countries
SET cement = 0
WHERE cement IS NULL;

UPDATE emissions_by_countries
SET flaring = 0
WHERE flaring IS NULL;

UPDATE emissions_by_countries
SET other = 0
WHERE other IS NULL;

-- 5. Reorder the year column
SELECT * FROM emissions_by_countries 
ORDER BY country, year ASC;

-- 6. Select the year from 2017 to 2021
SELECT * FROM emissions_by_countries
WHERE year >= 2017
ORDER BY year, country ASC;
