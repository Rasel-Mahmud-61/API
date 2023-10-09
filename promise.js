const outputValue=document.getElementById('display');
  async  function getdata(){

   const res=  await fetch("http://localhost:5500/API/data.txt");
   const data=await res.text();
    outputValue.innerText=data;
}