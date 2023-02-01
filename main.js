async function getNews(){
	
	var random = Math.floor(Math.random() * 15);
	
	var inc = random + 5;
	
	
	
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=HQDe36DrAzQaGGS7A6gFkE1xaGGAw27s')
    .then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = random; i < inc; i++){
            const output = document.getElementById('output');
            
            try{
                output.innerHTML += `
        <div class="col 4 m4 s12">
          
		<div class="row">

		<div class="col 6 m6 s12">
					
                    <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}"  style="height:200px;"><br>
        </div>
		<div class="col 6 m6 s12">
					<p class="card-title"><b>Title</b>:${response.results[i].title}</p>
                    
					
					
                        <p style="font-size:14px;" class="oneLine"><b>Link</b>:  <a href="${response.results[i].url}">${response.results[i].url}</a></p>
                    </div>
		  
		  
		  
		  </div>
		  
		  </div>
                    <br>
                    `
                console.log(response.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
            // console.log(response.results[i].title);
            // console.log(i);
        }
        
    })
}
getNews();
