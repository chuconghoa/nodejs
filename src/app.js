import mongoose from "mongoose";
import express from 'express';
 const app = express();
 app.use(express.json());
 app.get('/api',()=>{
      console.log('test')
 })
  export const viteNodeApp = app
 