import React, { Component } from "react";
import { database } from "../firebase";
import Arrow from "../../assets/img/icons/arrow-down.svg";

class Currency extends Component {
  state = {
    kurs: {
      AMD: 1,
      USDBid: "",
      USDAsk: "",
      EURBid: "",
      EURAsk: "",
      RUBBid: "",
      RUBAsk: ""
    },
    selected1: "USDBid",
    selected2: "AMD",
    selected1Val: "",
    selected2Val: "",
    rate: ""
  };

  componentDidMount() {
    database.ref("kurs").on("value", snapshot => {
      if (snapshot.val() !== null) {
        this.setState({ kurs: snapshot.val() }, () => {
          let rate =
            this.state.kurs[this.state.selected1] /
            this.state.kurs[this.state.selected2];
          this.setState({ rate });
        });
      }
    });
  }

  handleSelect1 = e => {
    let val = e.target.value;
    if (
      e.target.value.substring(0, 3) === this.state.selected2.substring(0, 3)
    ) {
      this.setState({ rate: 1 }, () => {
        this.setState({
          selected1: val,
          selected1Val: this.state.selected2Val
        });
      });
    } else {
      this.setState({ selected1: e.target.value }, () => {
        let rate =
          this.state.kurs[this.state.selected1] /
          this.state.kurs[this.state.selected2];
        this.setState({ rate }, () => {
          let newVal = this.state.selected2Val / this.state.rate;
          this.setState({ selected1Val: newVal }, () =>
            console.log(this.state.selected2Val)
          );
        });
      });
    }
  };
  handleSelect2 = e => {
    let val = e.target.value;
    if (
      e.target.value.substring(0, 3) === this.state.selected1.substring(0, 3)
    ) {
      this.setState({ rate: 1 }, () => {
        this.setState({
          selected2: val,
          selected1Val: this.state.selected2Val
        });
      });
    } else
      this.setState({ selected2: e.target.value }, () => {
        let rate =
          this.state.kurs[this.state.selected1] /
          this.state.kurs[this.state.selected2];
        this.setState({ rate }, () => {
          let newVal = this.state.selected1Val * this.state.rate;
          this.setState({ selected2Val: newVal }, () =>
            console.log(this.state.selected2Val)
          );
        });
      });
  };

  handleInputChange = (e, inputNumber) => {
    if (inputNumber === 1) {
      const newVal1 = e.target.value;
      const newVal2 = newVal1 * this.state.rate;
      this.setState({ selected1Val: newVal1, selected2Val: newVal2 });
    } else {
      const newVal2 = e.target.value;
      const newVal1 = newVal2 / this.state.rate;
      this.setState({ selected1Val: newVal1, selected2Val: newVal2 });
    }
  };

  render() {
      let valueLength2 = this.state.selected2.length;
      let valueLength1 = this.state.selected1Val.length;
    return (
        <section className="section-currency section">
            <div className="container">
                <div className="cols-lg-2">
                    <div className="col-lg-8">
                        <h3 className="h3 lg pb-2">Փոխարժեքի հաշվիչ</h3>
                        <div className="currency-calc">
                            <div className="currency-calc-item">
                                <div className="calc-header">
                                    <span className='flag'></span>
                                    <div className="select">
                                        <select
                                            name="selected1"
                                            onChange={this.handleSelect1}
                                            value={this.state.selected1}
                                        >
                                            <option value="AMD">AMD</option>
                                            <option value="USDBid">USD</option>
                                            <option value="EURBid">EUR</option>
                                            <option value="RUBBid">RUB</option>
                                        </select>
                                        <img src={Arrow} className="arrow" alt=""/>
                                    </div>

                                </div>
                                <div className="calc-body">
                                    <input
                                        name="USDBid"
                                        type="number"
                                        onChange={e => this.handleInputChange(e, 1)}
                                        value={this.state.selected1Val || 0}
                                        className={valueLength1 < 6 ? 'validate large' : 'validate small'}
                                    />
                                </div>
                            </div>
                            <div className="currency-calc-item">
                                <div className="calc-header">
                                    <span className='flag'></span>
                                    <div className="select">
                                        <select
                                            name="selected2"
                                            onChange={this.handleSelect2}
                                            value={this.state.selected2}

                                        >
                                            <option value="AMD">AMD</option>
                                            <option value="USDAsk">USD</option>
                                            <option value="EURAsk">EUR</option>
                                            <option value="RUBAsk">RUB</option>
                                        </select>
                                        <img src={Arrow} className="arrow" alt=""/>
                                    </div>

                                </div>
                                <div className="calc-body">
                                    <input
                                        name="USDAsk"
                                        type="number"
                                        onChange={e => this.handleInputChange(e, 2)}
                                        value={this.state.selected2Val || 100000000 }
                                        className={valueLength2 < 6 ? 'validate large' : 'validate small'}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h3 className="h3 lg pb-2">Փոխարժեքն այսօր</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Արժույթներ</th>
                                        <th>Առք</th>
                                        <th>Առք</th>
                                        <th>Վաճառք</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>


            <div>

                {/*<div>Exchange rate: {this.state.rate} </div>*/}
            </div>
        </section>

    );
  }
}

export default Currency;
