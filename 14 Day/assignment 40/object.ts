function music_album(artist : string, title : string, tracks? : number){
    let album = {artist, title};
    if(tracks){
        album['tracks'] = tracks;
}
    return album; 
}
console.log(music_album("Ozil", "Chabahar"));
console.log(music_album("Asad", "Tere Bin"));
console.log(music_album("Saad", "Aur", 12));


