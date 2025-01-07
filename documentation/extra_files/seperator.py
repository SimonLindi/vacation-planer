import pandas as pd
import json

# Pfad zur CSV-Datei
file_path = 'inputquery.csv'  # Stelle sicher, dass der Dateiname korrekt ist

# Lade die CSV-Datei
data = pd.read_csv(file_path)

# Erstelle die `countries`-Collection
countries = data[['country', 'countryLabel']].drop_duplicates().rename(columns={
    'country': 'country_id',
    'countryLabel': 'country_name'
})

# Bereinigung von NaN-Werten in der `countries`-Collection
countries = countries.fillna('')  # Ersetzt NaN durch leere Strings

# Konvertiere zu JSON
countries_json = countries.to_dict(orient='records')

# Erstelle die `destinations`-Collection mit Fremdschlüssel zu `countries`
destinations = data.rename(columns={
    'place': 'destination_id',
    'placeLabel': 'name',
    'description': 'description',
    'coordinates': 'coordinates',
    'country': 'country_id'
})

# Auswahl relevanter Spalten
destinations = destinations[['destination_id', 'name', 'description', 'coordinates', 'country_id']]

# Bereinigung von NaN-Werten in der `destinations`-Collection
destinations = destinations.fillna('')  # Ersetzt NaN durch leere Strings

# Konvertiere zu JSON
destinations_json = destinations.to_dict(orient='records')

# Speichere die JSON-Dateien
with open('countries.json', 'w', encoding='utf-8') as f:
    json.dump(countries_json, f, indent=4, ensure_ascii=False)

with open('destinations.json', 'w', encoding='utf-8') as f:
    json.dump(destinations_json, f, indent=4, ensure_ascii=False)

print("JSON-Dateien wurden erfolgreich erstellt!")
