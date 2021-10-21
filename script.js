//fibonocc Number generator
const result = document.getElementById('result');

    let indexNum = 0



function submitValue(){
    let input = document.getElementById('input').value;
    indexNum = input

    function fibonocc1Generator(n){
        let output = []
        if(n === 1){
            output =[0]
        }else if(n === 2){
            output = [0, 1]
        }else{
            output = [0, 1]
            for(var i = 2; i < n; i++){
                output.push(output[output.length -2] + output[output.length -1])
            }
        }
        return output  
    }
    
    output = fibonocc1Generator(indexNum)
    console.log(output)
    result.innerHTML = output.join(', ')
}




