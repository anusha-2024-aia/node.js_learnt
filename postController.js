//ES MODULES

const posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
];

export const getPosts = () => posts;

// for index.js without printing { } braces we should use export default instead of export const getPosts = () => posts;