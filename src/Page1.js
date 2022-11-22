

import './App.js'


function Page1() {
    var country_name;
    var names;


    function input(){
    country_name = document.getElementById('country');

    console.log("The country selected is:", country_name);
    console.log(typeof (country_name));
    getData();
}
async function getData() {
    let url = fetch(`https://restcountries.com/v3.1/name/${country_name}`);
    url.then((response) => {

        return response.json();
    }).then((data) => {
        console.log(data)

        console.log(data[0].flags)
        document.getElementById('flag').src = `${data[0].flags.png}`;

        console.log("Languages are:", Object.values(data[0].languages))
        document.getElementById('languages').innerText = Object.values(data[0].languages)

        names = data[0].name.nativeName
        console.log("Pathan")
        console.log(Object.values(names))
        let text = ""

        for (const property in names) {

            text += `${names[property].official}` + "\n"
            // text += `${property}: ${names[property].official}`
        }
        console.log(text);

        document.getElementById("c_names").innerText = text


    }).catch((error) => {
        console.log(error)
    })
}
}
export default Page1;