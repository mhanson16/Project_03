db.countries.delete_many({'Year': {'$lt': 1945}})

db.countries.updateMany({}, {$rename: {"ISO 3166-1 alpha-3":"ISO"}})

db.countries.updateMany({"Country": "French Equatorial Africa"}, {$set: {"ISO": "FEA"}})

db.countries.updateMany({"Country": "French West Africa"}, {$set: {"ISO": "FWA"}})

db.countries.updateMany({"Country": "Kuwaiti Oil Fires"}, {$set: {"ISO": "KOF"}})

db.countries.updateMany({"Country": "Leeward Islands"}, {$set: {"ISO": "LEI"}})

db.countries.updateMany({"Country": "Pacific Islands (Palau)"}, {$set: {"ISO": "PIP"}})

db.countries.updateMany({"Country": "Ryukyu Islands"}, {$set: {"ISO": "RYI"}})

db.countries.updateMany({"ISO": "CIV"}, {$set: {"Country": "Cote dIvoire"}})

db.countries.updateMany({"ISO": "CUW"}, {$set: {"Country": "Curacao"}})

db.countries.updateMany({"ISO": "REU"}, {$set: {"Country": "Reunion"}})
