const links = [
    {
        label: "Week 1",
        url: "week1/index.html",
        
    },

    {
        label: "Week 2",
        url: "week2/index.html"
    },

    {
        label: "Week 3",
        url: "week3/index.html"
    },

    {
        label: "Week 4",
        url: "week4/index.html"
    },

    {
        label: "Week 5",
        url: "week5/index.html"
    },

    {
        label: "Todo Challenge",
        url: "todo/index.html"
    },

    {
        label: "Week 7",
        url: "week7/index.html"
    },

    {
        label: "Week 8",
        url: "week8/index.html"
    },

    {
        label: "Week 9",
        url: "week9/index.html"
    },

    {
        label: "Week 10",
        url: "week10/index.html"
    },

    {
        label: "Week 11",
        url: "week11//client/week11.html"
    },

    {
        label: "Final Project",
        url: "parcel/src/index.html"
    }
];

let list = document.querySelector('ol');

links.forEach((item)=> {
    let li = document.createElement('li');
    let a = document.createElement('a');

    li.appendChild(a)

    a.setAttribute('href', item.url);
    a.innerHTML = item.label;

    document.querySelector('ol').appendChild(li);
})