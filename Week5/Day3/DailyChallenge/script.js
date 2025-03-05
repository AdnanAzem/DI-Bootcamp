// Daily challenge : Creating Objects

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
// Create a class named Video. The class should be constructed with the following parameters:
//     title (a string)
//     uploader (a string, the person who uploaded it)
//     time (a number, the duration of the video - in seconds)

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    // Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

// Instantiate a new Video instance and call the watch() method.
const video1 = new Video("The Matrix", "The Wachowskis", 136);
video1.watch();

// Instantiate a second Video instance with different values.
const video2 = new Video("Star Wars", "George Lucas", 121);
video2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
const videos = [
    {title: "The Matrix", uploader: "The Wachowskis", time: 136},
    {title: "Star Wars", uploader: "George Lucas", time: 121},
    {title: "Avatar", uploader: "James Cameron", time: 162},
    {title: "The Lord of the Rings", uploader: "Peter Jackson", time: 201},
    {title: "The Dark Knight", uploader: "Christopher Nolan", time: 152}
];

// Bonus: Loop through the array to instantiate those instances.
videos.forEach(video => {
    const newVideo = new Video(video.title, video.uploader, video.time);
    newVideo.watch();
});