const { faker } = require('@faker-js/faker');
const getPosts = function(){
  let posts = []
  for(let i =0;i<30;i++){
    let newPost = {
      id:faker.datatype.uuid(),
      tag:faker.word.verb(),
      title:faker.lorem.sentence(),
      body:faker.lorem.paragraphs(4, '<br/>\n'),
      company:faker.company.name(),
      createdAt:faker.date.recent(),
      reads:faker.datatype.number(9999),
      likes:faker.datatype.number(999),
      comments:faker.datatype.number(99),
      userName:faker.name.firstName()
    }
    posts.push(newPost)
  }
  return posts
}
const getPost = function(id){
  let commentList = []
  for(let i=0;i<4;i++){
    let newComment = {
      message:faker.lorem.sentence(),
      createdAt:faker.date.recent(),
      userName:faker.name.firstName(),
      company:faker.company.name(),
      likes:faker.datatype.number(999),
      parentId:null,
      id:faker.datatype.uuid(),
      postId:faker.datatype.uuid()
    }
    commentList.push(newComment)
  }
  commentList.push({
    message:faker.lorem.sentence(),
      createdAt:faker.date.recent(),
      userName:faker.name.firstName(),
      company:faker.company.name(),
      likes:faker.datatype.number(999),
      parentId:commentList[0].id,
      id:faker.datatype.uuid(),
      postId:null
  })
  return {
    id:faker.datatype.uuid(),
    tag:faker.word.verb(),
    title:faker.lorem.sentence(),
    body:faker.lorem.paragraphs(4, '<br/>\n'),
    company:faker.company.name(),
    createdAt:faker.date.recent(),
    reads:faker.datatype.number(9999),
    likes:faker.datatype.number(999),
    comments:commentList,
    commentCount:faker.datatype.number(9),
    userName:faker.name.firstName()    
  }
}

module.exports ={
  getPosts,
  getPost
}