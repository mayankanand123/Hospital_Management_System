import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};



// import mongoose from 'mongoose';

// const dbConnection = async () => {
//   console.log('MongoDB URI:', process.env.MONGO_URI); // Verify the URI is being loaded
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       dbName: 'MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM',
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Database connected successfully');
//   } catch (error) {
//     console.error('Some error occurred while connecting to the database:', error);
//   }
// };

// export default dbConnection;

