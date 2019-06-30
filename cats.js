const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the database
/*const george = new Cat({
    name: "Mr. Nebitt",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if (err) {
        console.log("Something went wrong!");
    }   else {
            console.log("We just saved a cat to the DB:");
            console.log(cat);
    }
});*/

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
    console.log(err);
    } else {
        console.log("Here is your new cat:");
        console.log(cat);
    }
});

//retreive all cats from the DB and console.log each one

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Error!");
        console.log(err);
    }   else {
        console.log("All the cats...");
        console.log(cats);
    }
});