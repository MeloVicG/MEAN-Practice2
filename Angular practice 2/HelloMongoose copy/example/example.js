console.log('in example');
const something = "bob";
const somethingElse = "carl";

//--------part 1 ---------
//module.export is exporting a function
// module.exports = {
    //     something : something,
    //     somethingElse : somethingElse
    // }
    
    
    //--------part 2 ---------

// module.export = (app) => { 
//     app.get('/', (req,res) => {
//         res.render('index')
//     })
// }

// module.exports = (app) => { 
//     app.name = 'bob'
// }

// ---part 3 ---

module.exports = { 
    something: something,
    somethingElse: somethingElse,
    index: (req,res) => {
        // res.render('index')
        console.log('rendering index');
    } 
}
