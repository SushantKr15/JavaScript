function song(id, name, artist, releaseYear, genre, duration, album){
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.artist = artist;
    this.releaseYear = releaseYear;
    this.duration = duration;
    this.album = album

}

var id = 001;
var name = "Natural";
var artist = "Imagine Dragon";
var genre = ["Alternative", "Indie"];
var releaseYear = 2018;
var duration = {
    hr: 0,
    min: 3,
    ss: 10,
};
var album = "Origins";

var song1 = new song(id, name, artist, releaseYear, genre, duration, album);
console.log(song1)  