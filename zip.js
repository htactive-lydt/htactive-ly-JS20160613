Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        subArray.forEach(function(itemInSubArray) {
            results.push(itemInSubArray)
        });
    });

    return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
    map(function(item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
    concatAll();
};

// Exercise 6: Combine videos and bookmarks by index

var videos = [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        }
    ],
    bookmarks = [
        { id: 470, time: 23432 },
        { id: 453, time: 234324 },
        { id: 445, time: 987834 }
    ],
    counter,
    videoIdAndBookmarkIdPairs = [];

for (counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    // Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
    videoIdAndBookmarkIdPairs.push({ videoId: videos[counter].id, bookmarkId: bookmarks[counter].id })
}

console.log(videoIdAndBookmarkIdPairs);

// Exercise 7: Implement zip

Array.zip = function(left, right, combinerFunction) {
    var counter,
        results = [];

    for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
        // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
        results.push(combinerFunction(left[counter], right[counter]));
    }

    return results;
};

// Exercise 8: Combine videos and bookmarks by index

var videos = [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
        }
    ],
    bookmarks = [
        { id: 470, time: 23432 },
        { id: 453, time: 234324 },
        { id: 445, time: 987834 }
    ];

let zip = Array.zip(videos, bookmarks, (video, bookmark) =>
    ({ videoId: video.id, bookmarkId: bookmark.id }));

console.log(zip);

// Exercise 9: Retrieve each video's id, title, middle interesting moment time,
//  and smallest box art url.

var movieLists = [{
        name: "New Releases",
        videos: [{
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "interestingMoments": [
                    { type: "End", time: 213432 },
                    { type: "Start", time: 64534 },
                    { type: "Middle", time: 323133 }
                ]
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "interestingMoments": [
                    { type: "End", time: 54654754 },
                    { type: "Start", time: 43524243 },
                    { type: "Middle", time: 6575665 }
                ]
            }
        ]
    },
    {
        name: "Instant Queue",
        videos: [{
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "interestingMoments": [
                    { type: "End", time: 132423 },
                    { type: "Start", time: 54637425 },
                    { type: "Middle", time: 3452343 }
                ]
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "interestingMoments": [
                    { type: "End", time: 45632456 },
                    { type: "Start", time: 234534 },
                    { type: "Middle", time: 3453434 }
                ]
            }
        ]
    }
];

//------------ COMPLETE THIS EXPRESSION --------------
var videos = movieLists.concatMap(movieList => movieList.videos);
var listVideoMap = videos.concatMap(video => {
    var boxarts = video.boxarts.reduce((smallest, curr) =>
        (curr.height * curr.width < smallest.height * smallest.width) ? curr : smallest);
    var moments = video.interestingMoments.filter(moment => moment.type == "Middle");
    return Array.zip(boxarts, moments, (boxart, moment) => ({ id: video.id, title: video.title, time: moment.time, url: boxart.url }));
    // return boxarts;
});
console.log(listVideoMap);

// Exercise 10: Converting from Arrays to Trees

var lists = [{
            "id": 5434364,
            "name": "New Releases"
        },
        {
            "id": 65456475,
            "name": "Thrillers"
        }
    ],
    videos = [{
            "listId": 5434364,
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "listId": 5434364,
            "id": 675465,
            "title": "Fracture"
        },
        {
            "listId": 65456475,
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "listId": 65456475,
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];


let arrayIntoList = lists.map(list => ({
    name: list.name,
    videos: videos.filter(video => video.listId == list.id)
        .map(video => ({ id: video.id, title: video.title }))
}));

console.log(arrayIntoList);