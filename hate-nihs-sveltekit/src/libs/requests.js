
const requests_data = () => {

    const data = fetch("http://127.0.0.1:5500/api/message/getdata")
    .then(data => data.json()).catch(err => console.log(err))
    return data; 
}

export default requests_data;