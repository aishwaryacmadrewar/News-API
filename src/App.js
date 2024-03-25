
import './App.css';
import News from "./News";
 import {useEffect,useState} from "react";
function App() {
  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("technology")
  useEffect(()=>{
     
  fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1787b34c9b2a41b5b42558497df9b3bb`)
  .then((response)=>response.json())
  .then((news)=>{setArticles(news.articles);
  console.log(news.articles)})
  .catch((err)=>{console.log(err)})
  },[category])
  return (
    <div className="App">
      <header className="header">
      <h1>News Tak</h1>
      <input type="text" onChange={(event)=>{ 
        if(event.target.value!==""){
          setCategory(event.target.value);
          console.log(event.target.value);
        }
        else{
          setCategory("technology");
        }}
      }
      placeholder="Seach News"
      />
      </header>
      <section className="news-article">
        {
          
          
           articles.length!==0?
           articles.map((article)=>{
             return(
             <div>
                <News article={article}/>
                </div>
             )
           })
           :
           <h3>No News Found for Searched text</h3>
        }
      
      
      </section>
    </div>
  );
}

export default App;
