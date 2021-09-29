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