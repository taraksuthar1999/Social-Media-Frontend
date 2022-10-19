export const getPost=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve([{
            id:1,
            title:"I don't wanna work in corporate anymore",
            body:"I don't want to work in corporate anymore. I don't want to have a manager or go through performance reviews or put up with office politics. I'm sick of watching immensely talented people wasting their talent on idiotic products. I'm sick of stupid people speaking over everyone only to show off and feed their tiny egos. I don't care about prestige or none of that shit. I just wanna do something that makes sense and earn enough money to sustain my lifestyle (nothing very luxurious). I just don't know what that could be. Any ideas/advice?",
            createdAt:new Date().toISOString()
          },{
            id:2,
            title:'Where to live with 500k',
            body:"Hi Blind friends,Where would you live in the US if you are",
            createdAt:new Date().toISOString()
          }])  
        },1000)
    })
  }