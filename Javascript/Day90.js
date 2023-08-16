// How to remove duplicates from an array of objects ?

let hiruzen = [
    {title:"C",author:"Dennis Ritchie" },
    {title:"Java",author:"James Gosling"},
    {title:"Javascript" , author:"Brenden Eich"},
    {title:"C" , author:"Dennis Ritchie"}
]

let mapping = hiruzen.map(({title}) => title)
let filtering = hiruzen.filter(({title},index) => !mapping.includes(title,index+1))
console.log(filtering);