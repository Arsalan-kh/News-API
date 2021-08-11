const API_Key = "47922b7c921d4d1eb65a1c6411f81774" //API key
const ShowNews = document.querySelector(".output"); //get a div where our news card been shown//
const slider = document.querySelector(".slider");
var News = []; //global array variable where news is stored //

window.addEventListener('load', () => { //onload event //
    console.log("page is loaded");
    getNews();

})


let link = `GET https://newsapi.org/v2/everything?q=${category}&apiKey=${API_Key}` //store a api link in to variable

var getNews = (category) => { //declare getNews arrow function and pass the argument, then match the condition when user select the categories
    if (category && category.length !== 0) {
        link = ` GET https://newsapi.org/v2/everything?&apiKey=${API_Key}`;

    }
    //Fetching the news //
    fetch(link).then((res) => {
        return res.json();
    }).then((data) => {

        News = data.articles; //and then stored in global 'News' variable which we decleared above//

        RenderNews(); //calling a RenderNews function//

    }).catch((err) => { //this one catch the error //
        console.log(err);

    })

}

let RenderNews = () => { //decleared RenderNews function//
    ShowNews.innerHTML = ""; //we assing it empty string so that it does not duplicates news when we click a button on multiple time//
    News.forEach(articles => { //then we loop through News ad finally innerHtml our card structure and style//

        ShowNews.innerHTML += `
    <div class="card-deck mb-5">
    <div class="card">
    
    <span><a class="news-source" href="#">${articles.source.name}</a>  <i class="fa fa-bookmark-o"></i></span>
  
      <img  src="${articles.urlToImage}" class="card-img card-img-top" alt="...">
      <div class="card-body">
        <a href="${articles.url}"><h5 class="card-title">${articles.title}</h5></a>
        <p class="card-text ">${articles.description}</p>
        <p class="card-text"><small class=" ">${articles.publishedAt}</small></p>
      </div>
    </div>
    `
            //-------------I will update slider later!/--------------------/
        News.forEach(articles => {
                slider.innerHTML = `
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="${articles.urlToImage}" alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="${articles.urlToImage}" alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="${articles.urlToImage}" alt="Third slide">
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
      `
            })
            //--------------------Slider will be update later-------------------//

    });

}
