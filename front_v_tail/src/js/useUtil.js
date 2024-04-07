
//exportを使って、外部から使える変数に無名関数を登録
export const useUtil=()=>{
  
  const create_dom_for_blogsvue = (args)=>{
    // 前記事一覧表示用にデータを編集する無名関数
    // argsはdbからuseBackend使用後のjsonデータを想定
    // そのjsonデータを編集したい場合はここで編集してからreturn
    return args
  };
  const create_dom_for_tagsvue = (args)=>{
    // 1記事で使われているタグ一覧表示用にデータを編集する無名関数
    return args
  };

  const create_dom_for_showblogvue = (args)=>{
    // 1記事で使われているタグ一覧表示用にデータを編集する無名関数
    // console.log(args.mup)
    return args.mup
  };

  //useUtilとしてreturnするのは、各関数を入れた変数
  return {create_dom_for_blogsvue,create_dom_for_tagsvue,create_dom_for_showblogvue}
}

