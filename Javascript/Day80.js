/*Suppose we have two stacks and no other temporary variable.
 Is to possible to "construct" a queue data structure using only the two stacks? */

import { Stack } from "./Stack";
class Queueusingtwostacks {
    constructor (){
        this.stack1= new Stack
        this.stack2= new Stack
    }
    enqueue(){
     this.stack1.push(data) // This is a imported package data
    }
    dequeue(){
        if(this.stack1.size()==0 && this.stack2.size()==0){
            return undefined
        }
        if(this.stack2.size() == 0){
            while(this.stack1.size()!== 0){
                this.stack2.push(this.stack1.pop())
            }
        }
    return this.stack2.pop()
    }
}
export { Queueusingtwostacks }

let queue = new Queueusingtwostacks()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(5)

console.log(queue.dequeue())

/* This program will not run bcuz i haven't add the stack file .
 This is a just concept to do queue using two stacks */