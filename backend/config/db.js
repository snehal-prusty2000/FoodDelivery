import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(`mongodb+srv://SnehalFoodDelivery:Sneha123Food@cluster0.yyxepae.mongodb.net/food-delivery`)
    .then(()=>{
        console.log("DB Connected");
    })
}