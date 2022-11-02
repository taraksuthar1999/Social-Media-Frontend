const { faker } = require('@faker-js/faker');


module.exports ={
  getPosts:function(){
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
}