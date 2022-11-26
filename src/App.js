
import {useEffect, useState} from 'react';
import './App.css';
import Card from './Componts/Card';





function App() {

  const [articles,setArticles] = useState ([]);

    useEffect(()=>{

      fetch("https://techcrunch.com/wp-json/wp/v2/posts")
      .then ((res) => res.json())
      .then((data)=>{
        console.log(data)

        setArticles(data);
      })
    },[])

  return (
  <div>
    <h1>Maxoticicle Portal...!</h1>
    <div className='container'>
      <div className='mainSection'>
    {articles.map((article,index)=> {
      console.log(article);

    let title = article.parselyMeta["parsely-title"]
   let author = article.parselyMeta["parsely-author"]
   let  category = article.parselyMeta["parsely-section"]
   let date = new Date(article.date).toDateString();
   let excerpt = article.excerpt.rendered;
   let  featureding = article.parselyMeta["parsely-image-url"];
   let  raw_tags = String(article.parselyMeta["parsely-tags"]);
   let canonical_url = article.canonical_url;

   let tags = raw_tags.split(",").slice(1,5);


  
      return <Card title={title}
            author={author} 
           category={category}
           date={date} excerpt={excerpt} 
           featureding={featureding} 
           tags={tags}
           articleurl={canonical_url}/>;

    })}

    </div>


    <div className='sidebar'>
      <h3>Related News</h3>
        <ul>
          
          <li>Saudi Arabias sovereign wealth fund has formed a joint venture </li>
          <li>Commercial electric vehicle company Arrival has gotten a </li>
          <li>Rocket Lab is gearing up for a second attempt to catch a rocket </li>
        </ul>

        <h3>Related News</h3>
        <ul>
          
          <li>Saudi Arabias sovereign wealth fund has formed a joint venture </li>
          <li>Commercial electric vehicle company Arrival has gotten a </li>
          <li>Rocket Lab is gearing up for a second attempt to catch a rocket </li>
        </ul>
        <button>More Newa</button>
    </div>
    

      </div>
    </div>
    
  );
}

export default App;
