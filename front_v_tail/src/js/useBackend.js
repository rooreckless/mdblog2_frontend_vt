
//exportを使って、外部から使える変数に無名関数を登録
export const useBackend=()=>{
  
  //-fetchを使い、BlogsTop用のjsonファイルからデータを取得するルートを呼び出す--------------
  const get_blogstop= async()=>{
    try{
      const res = await fetch("/blog_app/get_blogstopjson")
      
      //fetch結果の本文のみ抽出しJSON化してreturnしPromiseResultに詰める
      const resjson = await res.json()
      return resjson
      //呼び出した側はawait でこの関数を呼び出せば、PromiseResultが取り出せます
    }catch(e){
      console.log("error---")
      console.log(e)
    }
  }
  

//-fetchを使い、flaskの1件だけmdファイルの内容をgetするルートを呼び出す----------------
  // const get_article = async(filename)=>{
  //   try{
  //     const res = await fetch("/blog_app/get_article/"+filename)
  //     //fetch結果の本文のみ抽出しJSON化してreturnしPromiseResultに詰める
  //     const resjson = await res.json()
  //     return resjson
  //     //呼び出した側はawait でこの関数を呼び出せば、PromiseResultが取り出せます
  //   }catch(e){
  //     console.log("error---")
  //     console.log(e)
  //   }
  // };

  // fetchを使い、flaskから、記事のjsonデータを受け取る(md用とipynbからの変換html用と分ける)
  const get_article = async(filename,contenttype)=>{
    
      if(contenttype=='md'){
        try{
          const res = await fetch("/blog_app/get_article_md/"+filename)
          //fetch結果の本文のみ抽出しJSON化してreturnしPromiseResultに詰める
          const resjson = await res.json()
          return resjson
          }catch(e){
            console.log("error---")
            console.log(e)
          }
      }else if(contenttype=='ipynb'){
        try{
          const res = await fetch("/blog_app/get_article_ipynb/"+filename)
          //fetch結果の本文のみ抽出しJSON化してreturnしPromiseResultに詰める
          const resjson = await res.json()
          return resjson
        }catch(e){
          console.log("error---")
          console.log(e)
        }
      }else{
        console.log("contenttype="+contenttype+" is not authorized")
      }

      
      //fetch結果の本文のみ抽出しJSON化してreturnしPromiseResultに詰める
      // const resjson = await res.json()
      // return resjson
      //呼び出した側はawait でこの関数を呼び出せば、PromiseResultが取り出せます
    
  };

  const get_articles_by_tag = async(tag_name)=>{
    try{
      const res = await fetch("/blog_app/get_articles_by_tag/"+tag_name)
      
      //fetch結果の本文のみ抽出しJSON化してreturnしPromiseResultに詰める
      const resjson = await res.json()
      return resjson
      //呼び出した側はawait でこの関数を呼び出せば、PromiseResultが取り出せます
    }catch(e){
      console.log("error---")
      console.log(e)
    }
  }

  //useBackendとしてreturnするのは、各関数を入れた変数
  return {get_blogstop,get_article,get_articles_by_tag}
}

