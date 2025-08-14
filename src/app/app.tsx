import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './weatherSlice';
import { AppDispatch, RootState } from './store';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [city, setCity] = useState('');

const { data, status } = useSelector((state: RootState) => state.weather);

  // Varsayılan olarak Trabzon'u getir
  useEffect(() => {
    dispatch(fetchWeather('Trabzon'));
  }, [dispatch]);

  const handleSearch = () => {
    if (city.trim() !== '') {
      dispatch(fetchWeather(city));
      setCity('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Redux Weather</h1>

      {/* Arama kısmı */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Şehir girin"
        style={{ padding: '8px', width: '70%', marginRight: '5px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 12px' }}>
        Ara
      </button>

      {/* Durum mesajları */}
      {status === 'loading' && <p>Yükleniyor...</p>}
      {status === 'failed' && <p>Bir hata oluştu.</p>}

      {/* Hava durumu kartı */}
      {data && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
          <h2>{data.name}</h2>
          <p>Sıcaklık: {data.main.temp} °C</p>
          <p>Hava: {data.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <p>Nem: {data.main.humidity} %</p>
          <p>Rüzgar: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
