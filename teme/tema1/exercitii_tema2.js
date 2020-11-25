arr1 = ["Love", "I", "Javascript"];
arr2 = ["Paul",
        1,
        false,
        { name: "Jon Snow"}, 
        [1, 2, 3], 
        null, 
        undefined, 
        function() { 
            console.log('Test')
        } ];


arr1[0] = "I";
arr1[1] = "Love";
console.log(arr1);

for(index in arr2) {
    console.log(index,":", arr2[index], " - ", typeof arr2[index])
};

class MyNumber {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }

    messageEven = " is an even number.";
    messageOdd = " is an odd number.";
    messageM = " is a multiple of ";
    messageNotM = " is not a multiple of ";

    isEven() {
        if(this.value % 2 == 0) {
            console.log(this.name + this.messageEven);
        }
    }

    isOdd() {
        if(this.value % 2 != 0) {
            console.log(this.name + this.messageOdd);
        }
    }

    multipleOf(div) {
        if(this.value % div == 0) {
            console.log(this.name + this.messageM + div);
        }
        else {
            console.log(this.name + this.messageNotM + div);
        }
    }
}

const one  = new MyNumber(1, "One");
const two = new MyNumber(2, "Two");
const twenty = new MyNumber(20, "Twenty");

one.isEven();
one.isOdd();
two.isEven();
two.isOdd();
twenty.multipleOf(5);
twenty.multipleOf(7);

///////////////CANVAS//////////////////

const canvas = document.getElementById("square");
/**@type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    console.log(this);
    context.fillStyle = "salmon";
    context.fillRect(Math.random()*500, Math.random()*300, 70,70);
});



