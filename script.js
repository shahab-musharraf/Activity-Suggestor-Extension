const url = "https://www.boredapi.com/api/activity";

const fetchData = () => {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let text = document.querySelector("#text");

        text.innerHTML = data.activity;
    })
    .catch((e)=>{
        let text = document.querySelector("#text");
    
        text.innerHTML = "Check Your Internet Connection!";
    })
}

fetchData();

const btn = document.getElementById("btn");

btn.addEventListener("click", fetchData);
