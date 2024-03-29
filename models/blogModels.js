import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog should have a title']
    },
    content: {
      type: String,
      // required: [true, 'Blog should have a body']
    },
    image: {
      type: String,
      required: [true, 'Blog should have an image']
      },
    date: {
      type: Date,
      // required: [true]
      default: Date.now()
    },
    
  },
);

const Blog = model('Blog', blogSchema);

export default Blog;