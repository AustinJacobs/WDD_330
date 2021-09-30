const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();

// ------------- // 

function playVideo() {
    console.log(this);
}

playVideo();

// ------------- //

// Regular function inside of the method will not allow the use of 'this'. 
const video = {
    title: 'John Wick',
    tags: ['One', 'Two', 'Three'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(tag);
        });
    }
};

video.showTags();

// Proper way to use a function inside of the the ShowTags() method.
const video = {
    title: 'John Wick:',
    tags: ['One', 'Two', 'Three'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

// ------------- //

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

// Looping through all properties of the superman object. 
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}