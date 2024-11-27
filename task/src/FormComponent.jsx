import React, { Component } from "react";
export default class FormComponent extends Component {
  state = {
    name: "",
    serialNumber: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
    symptom: "",
    isRepeatVisit: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ isRepeatVisit: event.target.checked });
  };

  handleClick = () => {
    const { name, serialNumber, gender, age, email, phone, symptom } = this.state;
    if (!name || !serialNumber || !gender || !age || !email || !phone || !symptom) {
      alert("Kart qeydiyyatdan keçmədi. Bütün sahələri doldurun!");
    } else {
      alert("Kart qeydiyyatdan keçdi");
      console.log("Xəstə haqqında məlumatlar:", this.state);
    }
  };

  render() {
    return (
      <div>
        <label className="column" htmlFor="name">
          Pasiyentin ad və soyadı:
          <input
            id="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label className="column" htmlFor="serialNumber">
          Şəxsiyyət vəsiqəsinin seriya nömrəsi:
          <input
            id="serialNumber"
            name="serialNumber"
            onChange={this.handleChange}
            value={this.state.serialNumber}
          />
        </label>
        <label htmlFor="gender">
          Cinsiyyət:
          <input
            type="radio"
            id="male"
            name="gender"
            value="Kişi"
            onChange={this.handleChange}
          />
          <label htmlFor="male">Kişi</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Qadın"
            onChange={this.handleChange}
          />
          <label htmlFor="female">Qadın</label>
        </label>
        <label className="column" htmlFor="age">
          Yaş:
          <input
            id="age"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
        </label>
        <label className="column" htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <label className="column" htmlFor="phone">
          Telefon:
          <input
            id="phone"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </label>
        <label className="column" htmlFor="symptom">
          Simptomları qeyd edin:
          <textarea
            id="symptom"
            name="symptom"
            onChange={this.handleChange}
            value={this.state.symptom}
          />
        </label>
        <label>
          Təkrar qəbul:
          <input
            type="checkbox"
            checked={this.state.isRepeatVisit}
            onChange={this.handleCheckboxChange}
          />
        </label>
        <button onClick={this.handleClick}>Göndər</button>
      </div>
    );
  }
}
