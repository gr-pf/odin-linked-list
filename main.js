import { LinkedList } from "./linked-list.js";
import { Node } from "./node.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
console.log("contains dog: ", list.contains("dog"));
list.append("hamster");
const popNode = list.pop();
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log("size: ", list.size());
console.log("head: ", list.head());
console.log("tail: ", list.tail());
console.log("popNode: ", popNode);
console.log("contains cat: ", list.contains("cat"));
console.log("contains dog: ", list.contains("dog"));
console.log("index snake: ", list.findIndex("snake"));
console.log("index dog: ", list.findIndex("dog"));
console.log("index 2: ", list.at(2));

list.insertAt(4, "chicken", "horse", "monkey");
list.removeAt(4);
console.log(list.toString());
console.log("size: ", list.size());
console.log("head: ", list.head());
console.log("tail: ", list.tail());
