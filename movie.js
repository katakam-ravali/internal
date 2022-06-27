async function display()
{
    const url='https://imdb-api.com/API/AdvancedSearch/k_y87yrb5g?title_type=feature&user_rating=5.0,8.5&genres=family&countries=in&languages=te';
    const response=await fetch(url);
    const data=await response.json();
    return Promise.resolve(data);
}
display().then(function(data)
{
    console.log(data);
    let {results}=data;
    table=document.getElementById("table");
    results.forEach(element => {
        let{title,imDbRating}=element;
 
  table.innerHTML+='<tr><td>'+title+'</td><td>'+imDbRating+'</td></tr>';
});
})