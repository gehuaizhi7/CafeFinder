const mongoose = require('mongoose');
const cities = require('./cities');
const descripors = require('./seedHelpers');
const Cafe = require('../models/Cafe');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/cafefinder');
}

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() =>{
    await Cafe.deleteMany({});
    for(let i=0; i<300; i++){
        const onecity = sample(cities);
        const price = Math.floor(Math.random()*10)+5;
        const cafe = new Cafe({
            author: '62d5b70a6c72de40ba708e98',
            location: `${onecity.city}, ${onecity.state}`,
            geometry: {
              type: "Point",
              coordinates: [
                onecity.longitude,
                onecity.latitude
              ]
            },
            title: `${sample(descripors)} Cafe`,
            images:[
                {
                  url: 'https://res.cloudinary.com/dett3hylc/image/upload/v1658349073/CafeFinder/mtwko6h0qjtwrefcuj2j.jpg',
                  filename: 'CafeFinder/mtwko6h0qjtwrefcuj2j'
                },
                {
                  url: 'https://res.cloudinary.com/dett3hylc/image/upload/v1658349073/CafeFinder/lebyfa23sflaj2gtexfl.jpg',
                  filename: 'CafeFinder/lebyfa23sflaj2gtexfl'
                }
              ],
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque a tempore, at dolorum vero, quos temporibus debitis accusamus dicta commodi ad obcaecati quam deserunt, voluptatum explicabo voluptate ullam. Est.',
            price
        })
        await cafe.save();
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
})
