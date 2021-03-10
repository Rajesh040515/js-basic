const movie = [


    { title: 'a', year: '2018', rating: '4' },
    { title: 'b', year: '2018', rating: '4' },
    { title: 'c', year: '2018', rating: '3' },
    { title: 'd', year: '2018', rating: '4.5' },

]
const title = movie
    .filter(m => m.year === 2018 && m.rating >= 3)
    .sort((a, b) => a.rating = b.rating)
    .reverse()
    .map(m => m.title)
console.log(title);