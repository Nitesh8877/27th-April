function InsertionSortDesendingOrder(arr){

    let n=arr.length;
    for(let i=1;i<n;i++){
        let ele=arr[i];
  
        let j=i-1;
        while(j>=0 && ele>arr[j]){
            arr[j+1]=arr[j];
          
            j--;
        }
       
        arr[j+1]=ele;
    }
    return arr;
  
  }
  
let input=[];
for(let i=1;i<=100;i++){
    input.push(i);
}
  
  console.log(InsertionSortDesendingOrder(input));