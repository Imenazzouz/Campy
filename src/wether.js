
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Wether = () => {
  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };





    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'a8c7febb46c37d32cee96cb8e7fd1c3f',
        lat: '37.177964772511814',
        lon: '9,351291573708247',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });
      return (
        <ReactWeather
        theme={customStyles}
        forecast="today"

          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Tunisia"
          city="Tabarka"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
      );

    }
    export default Wether