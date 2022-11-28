



$(window).load(function(){
   
    $('.loading').fadeOut();
    
 });



var arr=[];

var test= new XMLHttpRequest() ;

test.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s=")
test.send()
test.addEventListener("readystatechange",function(){
    if(test.readyState==4 && test.status==200 ){
        var res = JSON.parse( test.response);
        arr=res.meals;
        
        
          
           display()
          console.log(arr)
    }
});


function display (){
    cartona="";
    for(i=0 ; i<arr.length; i++){
        cartona+=` <div class="xx my-3 col-md-3 overflow-hidden position-relative ">

        <img class="tt w-100" src=${arr[i].strMealThumb}        alt="">
        <div class="d  bg-light bg-opacity-10" onclick="getData(${i})">
        <p class="fa-2x te"> ${arr[i].strMeal} </p>
     </div>
        

    </div>`
   
    };
    
    document.querySelector(".home").innerHTML=cartona;
    
    

}



 function getData (index){
    let ing="";
    for(i=1 ; i<=20 ; i++){
        if(arr[index][`strIngredient${i}`]){
        ing+= `<li class="rec p-1 d-flex">${arr[index][`strMeasure${i}`]+arr[index][`strIngredient${i}`]}</li>`
        }

    }
    document.querySelector(".dataphoto").style.display="flex";
    document.querySelector(".home").style.display="none";
    
        cartona=`  <div class="col-md-4 d-flex align-items-center flex-column ">
        <img src=${arr[index].strMealThumb} class="w-100" alt="">
        <h3 class="pt-2">${arr[index].strMeal}</h3>
    </div>
    <div class="col-md-8 ">
        <h2>instructions</h2>
        <p class="leads">${arr[index].strInstructions}
        </p>
        <p>Area : <span> ${arr[index].strArea}</span></p>
        <p>Category : <span> ${arr[index].strCategory}</span></p>
        <h3>Recipes : </h3>
        <ul class=" d-flex flex-wrap w-100 list-unstyled py-4">
           ${ing}
        </ul>
        <h3>Tags : </h3>
        <div class="d-flex py-4 ">
            <span class="tags p-1 "> ${arr[index].strTags} </span>
        </div>
        <a href="${arr[index].strSource}" target="_blanck">
        <button class="btn btn-success">source</button>
        </a>
        <a href="${arr[index].strYoutube}" target="_blanck">
        <button class="btn btn-danger " onclick="">youtube</button>
        </a>


    </div>  `
   
    
    
    document.querySelector(".dataphoto").innerHTML=cartona;
    
    

}
let navwidth= $(".all-nav").css("left");
$(".ico").click(function(){
    if($(".all-nav").css("left")=="0px"){
        $(".all-nav").animate({left:navwidth} , 500);
    document.querySelector(".ico").innerHTML=`        <div class=" menu ">
    
    <div></div> 
    <div></div> 
    <div></div> 
    <div></div> 
     
 
 
 </div>    `

    }else{
    $(".all-nav").animate({left:0} , 500);
    document.querySelector(".ico").innerHTML=`       <i class="i fa-solid fa-xmark"></i>    `
    }
} )

var allCategories=[];
categoriesname=[];
var test2= new XMLHttpRequest() ;

test2.open("GET","https://www.themealdb.com/api/json/v1/1/categories.php")
test2.send()
test2.addEventListener("readystatechange",function(){
    if(test2.readyState==4 && test2.status==200 ){
        var res = JSON.parse( test2.response);
        allCategories=res.categories;
        
           displayCategories();
          console.log(allCategories)
    }
});

function displayCategories (){
    $(window).load(function(){
   
        $('.loading').fadeIn(1000);
        
     });
    

    cartona="";
    for(i=0 ; i<allCategories.length; i++){
        cartona+=` <div class="dd my-5 col-md-3 overflow-hidden position-relative ">

        <img class="tt w-100 mx-2" src=${allCategories[i].strCategoryThumb}        alt="">
        <div class="y  bg-light bg-opacity-10" onclick="getcat(${i})">
        <p class="fa-2x te"> ${allCategories[i].strCategory} </p>
     </div>
        

    </div>`
   
    };
    
    document.querySelector(".categories").innerHTML=cartona;
}
function getcat(ind){
    console.log(allCategories[ind].strCategory)
    var test3= new XMLHttpRequest() ;

    test3.open("GET",`https://www.themealdb.com/api/json/v1/1/filter.php?c=${allCategories[ind].strCategory}`)
    test3.send()
    test3.addEventListener("readystatechange",function(){
        if(test3.readyState==4 && test3.status==200 ){
            var res = JSON.parse( test3.response);
            categoriesname=res.meals;
            
              console.log(categoriesname)

              nameofcat()
        }
    });

}
function nameofcat (){
    
   
    
     
    
  
    cartona="";
    for(i=0 ; i<categoriesname.length; i++){
        cartona+=` <div class="pp my-5 col-md-3 overflow-hidden position-relative ">

        <img class=" w-100 " src=${categoriesname[i].strMealThumb}        alt="">
        <div class="x  bg-light  bg-opacity-10" onclick="clicked(${i})">
        <p class="fa-2x te"> ${categoriesname[i].strMeal} </p>
     </div>
        

    </div>`
   
    };
    
    document.querySelector(".categoriesname").innerHTML=cartona;
    document.querySelector(".categoriesdata").style.display="flex";
    document.querySelector(".home").style.display="none";
    document.querySelector(".dataphoto").style.display="none";
    document.querySelector(".all-cat").style.display="none";
}

$(".cat").click(function(){
    document.querySelector(".all-cat").style.display="flex";
    document.querySelector(".home").style.display="none";
    document.querySelector(".dataphoto").style.display="none";
    document.querySelector(".categoriesdata").style.display="none";
    document.querySelector(".contact").style.display="none";

})
// 
function clicked(hamada){
    
    document.querySelector(".clickedphoto").style.display="flex";
    document.querySelector(".home").style.display="none";
    document.querySelector(".all-cat").style.display="none";
    document.querySelector(".dataphoto").style.display="none";
    document.querySelector(".categoriesdata").style.display="none";
    console.log("hamada")
    
        cartona=`  <div class="col-md-4 d-flex align-items-center flex-column ">
        <img src=${categoriesname[hamada].strMealThumb} class="w-100" alt="">
        <h3 class="pt-2">${categoriesname[hamada].strMeal}</h3>
    </div>
    <div class="col-md-8 ">
        <h2>instructions</h2>
        <p class="leads">${arr[hamada].strInstructions}
        </p>
        <p>Area : <span> ${arr[hamada].strArea}</span></p>
        <p>Category : <span> ${categoriesname[hamada].strCategory}</span></p>
        <h3>Recipes : </h3>
        <div class=" d-flex py-4">
            <span class="rec p-1 "> sugar of 4 cups </span>
            <span class="rec p-1 "> meat </span>
            <span class="rec p-1"> onion </span>
            <span class="rec p-1 "> lemon</span>
        </div>
        <h3>Tags : </h3>
        <div class="d-flex py-4 ">
            <span class="tags p-1 "> meat </span>
            <span class="tags p-1 "> onion </span>
        </div>
        <a href="${categoriesname[hamada].strSource}" target="_blanck">
        <button class="btn btn-success">source</button>
        </a>
        <a href="${categoriesname[hamada].strYoutube}" target="_blanck">
        <button class="btn btn-danger " onclick="">youtube</button>
        </a>


    </div>  `
   
    
    
    document.querySelector(".clickedphoto").innerHTML=cartona;
    
    

}
$(".vv").click(function(){
    document.querySelector(".all-cat").style.display="none";
    document.querySelector(".home").style.display="none";
    document.querySelector(".dataphoto").style.display="none";
    document.querySelector(".categoriesdata").style.display="none";
    document.querySelector(".contact").style.display="flex";

})





