// Write your cade below:
function caclRemaindar(num1,num2) {
    return num1%num2;
};

function caclSum(array) {
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
};

function caclSumInConditon(array,num3) {
    var sum=0;
    for(var i=0;i<array.length;i++){
        if(array[i]<num3){
            sum+=array[i];
        }
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}