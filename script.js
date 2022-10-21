async function getIpAddress() {
    var url = 'https://geo.ipify.org/api/v2/country,city?';
    var apikey = 'apiKey=at_XGn4k6pJquxPqauEaqQYMZEoVhkKI&ipAddress=';
    var input = document.getElementById('mybar').value.toString();
    // var apiAddress = '102.176.65.232';
    var apiUrl = url + apikey + input;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)
     //Seting the api in the ui
  const { ip, isp } = data;
  document.getElementById('current-ip').textContent = ip;
  document.getElementById('current-isp').textContent = isp;
  document.getElementById('current-region').textContent = data.location.region;
  document.getElementById('current-city').textContent = data.location.city;
  document.getElementById('current-zone').textContent = data.location.timezone;