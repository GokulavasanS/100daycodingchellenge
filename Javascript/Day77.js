 // Find the consecutive numbers in the list

 function Consecutive (list){
    let result = []
    let temp = []

    list.sort((a,b) => a - b)

    for (let i=0;i<list.length;i++){
        if(list[i]+1 === list[i+1]){
            temp.push(list[i])
        }else{
            temp.push(list[i])
            if(temp.length> result.length){
                result= temp
            }
            temp=[]
        }
    }
    return result
 }
 list = [7,8,1,3,4,9,2]
 console.log(Consecutive(list))
