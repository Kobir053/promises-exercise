// 1
const successPromise = () => {
    return new Promise((resolve, reject) => {
        resolve("Success!")
    })
}
successPromise()
.then((res) => console.log(res)
);

// 2
const exercise2 = (fname,lname) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${fname} ${lname}`);
            
        }, 1000);
    })
}
exercise2("kobi", "raviv")
.then((res) => console.log(res)
)

// 3
const subtractTen = (num) => {
    return new Promise((resolve, reject) => {
        if(typeof(num) != "number")
            reject("this is not a number!")
        setTimeout(() => {
            resolve(num - 10)
        }, 500);
    })
}
const addFive = (num) => {
    return new Promise((resolve, reject) => {
        if(typeof(num) != "number")
            reject("this is not a number!")
        setTimeout(() => {
            resolve(num + 5)
        }, 500);
    })
}
const multiplyByTwo = (num) => {
    return new Promise((resolve, reject) => {
        if(typeof(num) != "number")
            reject("this is not a number!")
        setTimeout(() => {
            resolve(num * 2)
        }, 500);
    })
}

addFive("gdg")
.then((res) => multiplyByTwo(res))
.then((res) => subtractTen(res))
.then((res) => console.log(res))
.catch((err) => console.error(err))

// 4
const divide = (num1,num2) => {
    return new Promise((resolve, reject) => {
        if(num2 == 0 || typeof num2 != "number")
            reject(new Error("cannot divide by zero"));
        else
            setTimeout(() => {
                resolve(num1/num2);
            }, 500);
    })
}
divide(1,"h")
.then((res) => console.log(res))
.catch((err) => console.error(err))

// 5
async function asyncFunc() {
    const name = await exercise2("kobi", "raviv");
    console.log(name);

    const num = 5;
    const add = await addFive(num);
    const mulitiply = await multiplyByTwo(add);
    const subtract = await subtractTen(mulitiply);
    console.log(subtract);
}
asyncFunc();

// 6
async function asyncFunc2(num1, num2){
    try{
        const afterDividing = await divide(num1,num2);
        console.log(afterDividing);
    }
    catch(err){
        console.error(err);
    }
} 
asyncFunc2(4,2);