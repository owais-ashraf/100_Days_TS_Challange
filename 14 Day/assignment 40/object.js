function music_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(music_album("Ozil", "Chabahar"));
console.log(music_album("Asad", "Tere Bin"));
console.log(music_album("Saad", "Aur", 12));
