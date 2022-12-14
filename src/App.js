import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from './assets/image.png'

class App extends React.Component {
  state = {
    //data is just an object until is populated
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    //Populate data here, we set data to populate data ie data = fetchedData .
    //We can now pass data as props into our Cards component
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    // console.log(country)

    //Fetch Data
    //Set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    //destructure data in fact take it out of this.state
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
