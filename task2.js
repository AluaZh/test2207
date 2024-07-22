function createCats() {
    let cats = [];
    
    for(let i = 0; i < 10; i ++) {
        let cat = function() {
            console.log(`My index id ${i}`);
        }
        cats.push(cat);
    }
    return cats;
}

let animals = createCats();
animals[0]();
animals[5]();
