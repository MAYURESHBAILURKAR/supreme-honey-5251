import axios from "axios";

const fetchData = async ({ page, limit, order, sort,FilterTitle,Filter }) => {
  console.log(FilterTitle,Filter)
  // try{
  //     let res=axios.get(`http://localhost:3004/smart-splurges`)
  //     console.log(res)
  // }catch(err){
  //     console.log(err)
  // }
  // let data=res.json()
  // console.log(data)

  //     let res =axios.get("http://localhost:3004/smart-splurges", {
  //     // params: {
  //     //   _page: page,
  //     //   _limit: limit,
  //     //   _sort: sort,
  //     //   _order: order
  //     // }

  //   });

  try {
    let res = await fetch(
      `http://localhost:3004/smart-splurges?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&${FilterTitle}=${Filter}`
    );
    let data = await res.json();
    return data;
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};
export default fetchData;
