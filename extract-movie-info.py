import sys
import requests
import sqlite3

MOVIESA = 131262
MOVIES = 131300
FIELDS = 7

#Fields for moviesList:
#movieID | imdbID | name | year | genres | ageRating | posterLocation

linksPath = "../ml-20m/links.csv"

moviesList = [[None for _ in range(FIELDS)] for _ in range(MOVIES)]

genres = [
    "Action",
    "Adventure",
    "Animation",
    "Children's",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Film-Noir",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ]


linksFile = open(linksPath, "r", encoding = 'latin-1')


def splitGenre (genStr, genres):
    movieGenList = genStr.split(",")
    results = []

    for i in range(len(movieGenList)):
        for j in range(len(genres)):
            if movieGenList[i].strip().lower() == genres[j].strip().lower():
                print(movieGenList[i], j)
                results.append(j)
                print(results)

    return ','.join(str(item) for item in results)


for line in linksFile:
    if line.split(",")[0] != "movieId":
        movieID = int(line.split(",")[0])
        imdbID = line.split(",")[1]

        moviesList[movieID-1][0] = movieID
        moviesList[movieID-1][1] = imdbID


#Getting poster and age rating info form RapidApi

for item in moviesList:
    if item[0]!= None:
        imdbID = item[1]

        movieKey = "tt" + str(imdbID)

        html_param = "?i=" + movieKey + "&r=json"

        url = "https://movie-database-imdb-alternative.p.rapidapi.com/" + html_param

        print ("Getting info for movie ", item[2])
        print("IMDB ID = " + movieKey, "url = " + url)

        response = requests.get(url,
          headers={
            "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com",
            "X-RapidAPI-Key": "d469e3dbdcmsh964f8e4bc01543dp14e974jsnf74b27499c23"
          }
        )

        if (response.status_code == 200) :
            print("Success")
            movieDict = response.json()
            item[2] = movieDict["Title"]
            item[3] = movieDict["Year"]
            item[4] = splitGenre(movieDict["Genre"], genres)
            item[5] = movieDict["Rated"]
            item[6] = movieDict["Poster"].replace("SX300", "SX800")
        else :
            print("Error")
            item[2] = "error"
            item[3] = 0
            item[4] = "error"
            item[5] = "error"
            item[6] = "error"




''' Information we have available from the API call
"Title" |
"Year" |
"Rated" |
"Released" |
"Runtime" |
"Genre"|
"Director" |
"Writer" |
"Actors" |
"Plot"|
"Language" |
"Country" |
"Awards" |
"Poster" |
"Ratings" |
"Metascore" |
"imdbRating" |
"imdbVotes" |
"imdbID" |
"Type" |
"DVD" |
"BoxOffice" |
"Production" |
"Website" |
"Response" |
'''




#Loading the data into the sql database
dbPath = "./Serendipity/src/backend/database.db"
conn = sqlite3.connect(dbPath)

cursor = conn.cursor()
for row in moviesList:
    if row[0] != None:
        # Insert a rows of data
        cursor.execute('INSERT INTO movies VALUES (?,?,?,?,?,?,?)', row)

conn.commit()
conn.close()


'''
 cursor.execute('INSERT INTO movies(movieId, imdbId, name, year, genre, age rating, poster) VALUES (\'' +
        movieId + '\', \'' +
        imdbId + '\', \'' +
        name + '\', \'' +
        year + '\', \'' +
        genre + '\', \'' +
        ageRating + '\', \'' +
        poster + '\', \');';
'''
