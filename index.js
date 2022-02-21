

function getData(country,topic){
    document.getElementById("news").innerHTML="";

    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${topic}&apiKey=b50ec4554a7b41d2a206c8dc819e08ef`)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data)
        let news = data.articles;
        console.log(news);
        for(n=0;n<news.length;n++){
            // console.log(news[n].title);
            let newsContainer = document.createElement("div");
            newsContainer.classList.add("news_container");
    
            let newsImage = document.createElement("div");
            newsImage.classList.add("image");
    
            let img = document.createElement("img");
            img.setAttribute("src",news[n].urlToImage);
            newsImage.appendChild(img);
    
            let newsDetails = document.createElement("div");
            newsDetails.classList.add("details");
    
            let newsH3 = document.createElement("h3");
            newsH3.classList.add("h3");
            newsH3.append(news[n].title)
    
            let newsH5 = document.createElement("h5");
            newsH5.classList.add("h5");
            newsH5.append(news[n].description);
    
            let newsBtn = document.createElement("button");
            newsBtn.classList.add("btn");
            newsBtn.append("Read Full Article")
    
            newsDetails.appendChild(newsH3);
            newsDetails.appendChild(newsH5);
            newsDetails.appendChild(newsBtn);
    
            newsContainer.appendChild(newsImage);
            newsContainer.appendChild(newsDetails);
    
            document.getElementById("news").appendChild(newsContainer);
        }
    })
    .catch((err) => {
        console.log(err)
    });
    
}

getData("in","business");

function search(){
    let country = document.getElementById('country').value;
    let topic = document.getElementById('topic').value;
    getData(country, topic);
}
