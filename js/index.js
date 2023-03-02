const readsAll = (id) => {
    // https://openapi.programming-hero.com/api/news/{news_id}
    // document.getElementById('read-all').innerText = ``;
    // document.getElementById('read-all').innerText = readAll;
    
  
  };
  
  
  const mainProsscer = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
  
    try {
      const res = await fetch(url);
      const datas = await res.json();
        // console.log(datas.data.tools);
      getData(datas.data.tools);
    } catch (error) {
      console.log("hello", error);
    }
  };
  mainProsscer();
  
  const notFound = (data) => {
    if (data.length === 0) {
      document.getElementById("not-found").classList.remove("hidden");
    } else {
      document.getElementById("not-found").classList.add("hidden");
    }
  };
  const loader = (call) => {
    if (call) {
      document.getElementById("loader").classList.remove("hidden");
    } else {
      document.getElementById("loader").classList.add("hidden");
    }
  };
  
  const getData = (datas) => {
  
    const parent = document.getElementById("main-contain");
    
    datas.forEach((data) => {
        // const name = data.tools.name;
        console.log(data);

      const card = document.createElement("div");
  
        card.innerHTML = `
        <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
      >
  <a href="#">
  <img class="rounded-t-lg" src="${data.image}
  " alt="" />
</a>
<div class="p-5">
  <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>
  </a>
  <p class="mb-3 font-normal text-gray-500  dark:text-gray-400"> 1. Natural language processing <br> 2. Contextual understanding <br> 3. Text generation</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.name}</h5>
  </a>
  <p class="mb-3 font-normal text-gray-500  dark:text-gray-400"> 11/01/2022 </p>
  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      Read more
      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </a>
</div>  
</div>  
    `;
      parent.appendChild(card);
  
      // console.log(name,img);
    });
  
  
  
    //   const parent = document.getElementById("main-contain");
    //   list.innerHTML = "";
    //   datas.forEach((data) => {
    //     // console.log(data);
  
    //     // const { idMeal, strMeal, strMealThumb, strInstructions } = data;
    //     const div = document.createElement("div");
    //     div.innerHTML = `
    //       <div class="card w-96 bg-base-100 shadow-2xl">
    //       <figure><img src="${strMealThumb}" alt="Shoes" /></figure>
    //       <div class="card-body">
    //         <h2 class="card-title">
    //         ${strMeal}
    //           <div class="badge badge-secondary">NEW</div>
    //         </h2>
    //         <p>${strInstructions.slice(0, 128)}....</p>
    //         <div class="card-actions justify-end">
    //           <div class="badge badge-outline">Fashion</div>
    //           <div class="badge() badge-outline">Products</div>
  
    //         </div>
    //       </div>
    //     </div>`;
    //     parent.appendChild(div);
    //   });
  };