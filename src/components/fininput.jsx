import PropTypes from "prop-types";
import React, { Component } from "react";
import { database, auth } from "./components/firebase";
import SignIn from "./components/signIn";
import CurrentUser from "./components/currentUser";

class FinInput extends Component {
  state = {
    year: 0,
    name: "",
    currentUser: null,
    loading: true
  };

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser, loading: false });
    });
  }

  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const data = {
      year: this.state.year,
      name: this.state.name
    };
    database
      .ref()
      .child("Statements")
      .child(this.state.year)
      .set(data);

    this.props.history.push("/");
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="col-sm-8 flex justify-end">
        {currentUser && <CurrentUser user={currentUser} />}
        {!this.state.loading && !currentUser && <SignIn />}
        {currentUser && (
          <div className="row">
            <form className="col s6">
              <div className="input-field col s6">
                <input
                  id="year"
                  name="USDBid"
                  type="text"
                  className="validate"
                  placeholder="USDBid"
                  onChange={this.handleInputChange}
                  value={this.state.USDBid}
                />
                <label htmlFor="Անուն">Տարի</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  name="USDAsk"
                  type="text"
                  className="validate"
                  placeholder="USDAsk"
                  onChange={this.handleInputChange}
                  value={this.state.USDAsk}
                />
                <label htmlFor="Անուն">Հաշվետվության անվանում</label>
              </div>
              <input
                type="file"
                name={this.state.data.name}
                onChange={this.handleSelect}
              />
              <button onClick={this.handleSubmit} type="button" name="submit">
                Ուղարկել
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FinInput;

CurrencyInput.propTypes = {
  env: PropTypes.object.isRequired
};

/*import React from "react";
import { storage, database } from "./firebase";
import Joi from "joi-browser";
import Form from "./common/form";

class OrderForm extends Form {
  state = {
    orders: [],
    data: {
      id: "1",
      title: "",
      name: "",
      numberInStock: "",
      dailyRentalRate: "",
      contact: "",
      imageURL: "as",
      comment:
        "Սույն հայտարարությունը վերաբերում է միայն ՀՀ տարածքում գործող կազմակերպությունների համար։",
      fileName: "as"
    },
    contacts: [
      { id: "09345639", name: "Իգոր" },
      { id: "099910301", name: "Արարատ" },
      { id: "077450210", name: "Վահե" }
    ],
    errors: {},
    disabled: false,
    progress: 0
  };

  


  componentDidMount() {
    database.ref("orders").on("value", snapshot => {
      if (snapshot.val() !== null) {
        const datas = Object.values(snapshot.val());

        this.setState({ orders: datas }, () => {
          const getOrder = id => {
            return this.state.orders.filter(m => m.id === id);
          };
          const OrderId = this.props.match.params.id;
          if (OrderId === "new") return;
          const order = getOrder(OrderId);
          if (!order) return this.props.history.replace("/not-found");
          this.setState({ data: this.mapToViewModel(order[0]) });
        });
      }
    });
  }

  mapToViewModel(order) {
    return {
      id: order.id,
      title: order.title,
      name: order.name,
      numberInStock: order.numberInStock,
      dailyRentalRate: order.dailyRentalRate,
      contact: order.contact,
      comment: order.comment,
      imageURL: order.imageURL || "as",
      fileName: order.fileName || "as",
      count: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const data = {
      id: this.state.data.title,
      title: this.state.data.title,
      name: this.state.data.name,
      numberInStock: this.state.data.numberInStock,
      dailyRentalRate: this.state.data.dailyRentalRate,
      contact: this.state.data.contact,
      comment: this.state.data.comment,
      imageURL:
        this.state.data.imageURL === "as" ? "" : this.state.data.imageURL,
      fileName: this.state.data.fileName || "0",
      count: this.state.data.count || 0
    };
    database
      .ref()
      .child("orders")
      .child(this.state.data.title)
      .set(data);

    this.props.history.push("/orders");
  };

  handleSelect = e => {
    const file = e.target.files[0];

    var metadata = {
      conetentType: "image/jpeg"
    };
    var storageRef = storage.ref("images/" + file.name);
    var uploadTask = storageRef.put(file, metadata);
    const data = this.state.data;
    data.fileName = file.name;

    this.setState({ data });

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed", // or 'state_changed'
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState();
        var prg = progress.toString();
        if (0 < progress < 1) {
          this.setState({ disabled: "disabled" });
          console.log(this.state.disabled);
        }
        if ((progress = 25)) {
          this.setState({ progress });
        }
        if ((progress = 50)) {
          this.setState({ progress });
        }
        if ((progress = 100)) {
          this.setState({ progress });
        }
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused": // or 'paused'
            console.log("Upload is paused");
            break;
          case "running": // or 'running'
            console.log("Upload is running");
            break;
        }
      },

      error => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log(downloadURL);
          const data = this.state.data;
          data.imageURL = downloadURL;

          this.setState({ data }, () => console.log(this.state.data.imageURL));
          this.setState({ disabled: false });
        });
      }
    );
  };

  render() {
    return (
      <div className="box form w-550">
        <h2>Նոր հայտարարություն</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "ID", "", "1")}
          {this.renderInput("name", "Ապրանք")}
          {this.renderInput("numberInStock", "Ծավալ")}
          {this.renderInput("dailyRentalRate", "Վերջնաժամկետ", "date")}
          {this.renderSelect("contact", "Կոնտակտ", this.state.contacts)}
          {this.renderInput("comment", "Մեկնաբանություն")}
          <div className="upload-btn-wrapper">
            <button className="upload-btn">Upload a file</button>
            <input
              type="file"
              name={this.state.data.name}
              onChange={this.handleSelect}
            />
          </div>
          <div className="pt-15">
            <progress value={this.state.progress} max="100" />
            <br />
            <br />
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default OrderForm; */
