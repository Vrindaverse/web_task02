const apiKey = '7c07eec47a744839943174256250306';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const errorMsg = document.getElementById('error');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    showError('Please enter a city name');
    return;
  }
  getWeather(city);
});

cityInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

async function getWeather(city) {
  clearError();
  hideWeather();

  searchBtn.disabled = true;
  searchBtn.textContent = 'Loading...';

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    showError(error.message);
  } finally {
    searchBtn.disabled = false;
    searchBtn.textContent = 'Get Weather';
  }
}

function showWeather(data) {
  cityName.textContent = `${data.location.name}, ${data.location.country}`;
  temp.textContent = `Temperature: ${data.current.temp_c.toFixed(1)} °C`;
  description.textContent = `Conditions: ${data.current.condition.text}`;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
  wind.textContent = `Wind Speed: ${data.current.wind_kph} kph`;

  weatherResult.classList.remove('hidden');
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove('hidden');
}

function clearError() {
  errorMsg.textContent = '';
  errorMsg.classList.add('hidden');
}

function hideWeather() {
  weatherResult.classList.add('hidden');
}
