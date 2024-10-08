let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

const noType:string[] = album.map((type) => {
    if(type){
        return `${type.slice()}`
    }  else {
        return "invalid";
    }
})

//idk, will do it later with fresh mindset 