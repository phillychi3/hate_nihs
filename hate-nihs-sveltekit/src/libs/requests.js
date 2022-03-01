
const requests_data = () => {

    const data = fetch("https://hatenihs.herokuapp.com/api/message/getdata")
    .then(data => data.json()).catch(err => console.log(err))
    return data; 
}

export default requests_data;