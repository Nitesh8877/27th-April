

function InsertionSort(arr){

    let n=arr.length;
    for(let i=1;i<n;i++){
        let ele=arr[i];
  
        let j=i-1;
        while(j>=0 && ele<arr[j]){
            arr[j+1]=arr[j];
          
            j--;
        }
        console.log(arr[j]);
        arr[j+1]=ele;
    }
    return arr;
  
  }
  
  let input=[5,6,11,12,13];
  
  console.log(InsertionSort(input));