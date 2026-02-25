// primitive data type Symbol,Number,Boolean,String,Null,Undefined,BigInt

const number = 1232
const bigNumber = 124314234243123131231432424234234n
const string = "page"
const bool = true
const n = null
const symbol = Symbol('Private')
const notDefined = undefined


// non-primitive types arrays,object and function

let heroes = ['iron-man','Super-man','Spider-man','Babar-zimbabar']
const portFolio = {
    id : Symbol(1),
    name : "Sharjeel",
    age : 13,
    job : "vella"
}

let sharjeel = function(){
      Object.entries(portFolio).map(([key,value])=>{
        console.log(`this ${key} is that value ${value.toString()}`)
      })
}

sharjeel();
