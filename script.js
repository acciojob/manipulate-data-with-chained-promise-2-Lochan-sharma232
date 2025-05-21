//your JS code here. If required.
function arraytransform() {
	let myPromise= new Promise(function(resolve,reject){
	setTimeout(function(){
		 return resolve([1,2,3,4]);
	},1000)	
	})
	myPromise.then((response)=>{
	console.log(response);
        let fil=response.filter((item)=>{
			if(item%2==0){
				return true;
			}
		})
		output.textContent=fil;
		return fil;
	
    }).then((response)=>{
        console.log(response);
		setTimeout(function(){
			let mul =response.map((item,index)=>{
				return item*2;
			
            })
            console.log(mul);
		output.textContent=mul;
			},2000)
	})
}
arraytransform();