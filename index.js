console.log('in console');

// // bc21041aadb647919c82dd9ff4d9e731
// // https://newsapi.org/v2/top-headlines?country=us&apiKey=bc21041aadb647919c82dd9ff4d9e731 

// url='https://newsapi.org/v2/top-headlines?country=us&apiKey=bc21041aadb647919c82dd9ff4d9e731'
let acc=document.getElementById('accordian');
const xml = new XMLHttpRequest();
xml.open('GET',`https://fakerapi.it/api/v1/images?_width=380`,true);

//! idr meny arrow function use kia to this.status deprecated a rha tha  
//! ye kaam simple function sy hi hua
xml.onload= function(){
    let html='';
    if(this.status===200)
    {
        let data1=JSON.parse(this.responseText);
        data1.data.forEach((element,index) => {

            html=`
            <div class="accordion my-2" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                    <button class="accordion-button show" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">
                    Breaking News ${index+1}: <strong> ${element.title}</strong>
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-heading${index}">
                    <div class="accordion-body my-3">
                        <div><img src="${element.url}" alt="news image" style="width:100%;height:22rem"> </div>
                        </div>
                    <div style="padding:25px"> To see the description click here <a href="#" target="_blank" style="text-decoration:none"> Read more </a></div>
                  </div>
                </div>
  
            </div>
            `

            acc.innerHTML += html;
        });


    }else{
        console.log('status not detected');
    }
}

//! request send zaroor krni hai .... phir hi kuch milay gha
xml.send();
