const mongoose = require('mongoose');

const mongourl = 'mongodb+srv://arshiyamakwana:Arshiya1983@cluster0.kfobomo.mongodb.net/gofood';

const mongodb = async () => {
    try {
        await mongoose.connect(mongourl);
        console.log('MongoDB connected');

        const foodCollection = mongoose.connection.db.collection("food_item");
        const categoryCollection = mongoose.connection.db.collection("food_category");

        const foodData = await foodCollection.find({}).toArray();
        const catData = await categoryCollection.find({}).toArray();

        global.food_item = foodData;
        global.foodCategory = catData;


        console.log("Food and Category data set to global");

        console.log("FOOD ITEM COUNT:", global.food_item.length);
        console.log("CATEGORY COUNT:", global.foodCategory.length);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = mongodb;
