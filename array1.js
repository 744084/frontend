//



let person=[
          {name: "amit", age:25},     //[{}] Array Object
          {name: "Mayank", age:25}
        ];
function f2(item, index){
    console.log(`${index} =>${item.name},${item.age}`);
}
person.map(f2)
