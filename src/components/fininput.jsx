import React, { Component } from "react";
import { storage, database, auth } from "../components/firebase";
import SignIn from "../components/signIn";
import CurrentUser from "../components/currentUser";
import Upload from "../assets/img/icons/upload.svg";
import swal from "sweetalert";

class FinInput extends Component {
  state = {
    year: "",
    name: "",
    currentUser: null,
    loading: true,
    downloadURL: "",
    fileName: "",
    disabled: true
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

    const data = {
      year: this.state.year,
      name: this.state.name,
      downloadURL: this.state.downloadURL
    };
    database
      .ref()
      .child("Statements")
      .child(this.state.year)
      .child(this.state.name)
      .set(data);

    this.props.history.push("/");
  };

  handleSubmitannual = e => {
    e.preventDefault();

    const data = {
      year: this.state.year,
      downloadURL: this.state.downloadURL
    };
    database
      .ref()
      .child("Annaual")
      .child(this.state.year)
      .set(data);

    this.props.history.push("/");
  };


  handleSelect = e => {
    const file = e.target.files[0];

    var metadata = {
      conetentType: "pdf"
    };
    var storageRef = storage.ref("statements/" + file.name);
    var uploadTask = storageRef.put(file, metadata);
    let fileName = file.name;

    this.setState({ fileName });

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed", // or 'state_changed'
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState();
        // var prg = progress.toString();
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
          this.setState({ downloadURL }, () =>
            swal({ icon: "success", text: "Բեռնված է։" })
          );
          this.setState({ disabled: false });
        });
      }
    );
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="sign-in-page">
        <div className="box">
          <h2 className="h2 text-center pb-6">
            Ֆին․ հաշվետվությունների ներբեռնում
          </h2>

          {currentUser && <CurrentUser user={currentUser} />}
          {!this.state.loading && !currentUser && <SignIn />}
          {currentUser && (
            <div>
              <form>
                <div className="input-field">
                  <label htmlFor="Անուն">Տարի</label>
                  <input
                    id="year"
                    name="year"
                    type="text"
                    className="validate"
                    placeholder="Տարի"
                    onChange={this.handleInputChange}
                    value={this.state.year}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Անուն">Հաշվետվության անվանում</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="validate"
                    placeholder="Անվանում"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="upload" className="upload-btn">
                    <input
                      type="file"
                      id="upload"
                      name={this.state.name}
                      onChange={this.handleSelect}
                    />
                    <img src={Upload} alt="" />
                    <span>Ներբեռնել</span>
                  </label>
                </div>
                <div className="text-center pt-6">
                  <button
                    className="btn primary"
                    onClick={this.handleSubmit}
                    type="button"
                    name="submit"
                    disabled={this.state.disabled}
                  >
                    Ուղարկել
                  </button>
                </div>
              </form>
              <form>
                <div className="input-field">
                  <label htmlFor="Անուն">Տարի</label>
                  <input
                    id="year"
                    name="year"
                    type="text"
                    className="validate"
                    placeholder="Տարի"
                    onChange={this.handleInputChange}
                    value={this.state.year}
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="upload" className="upload-btn">
                    <input
                      type="file"
                      id="upload"
                      name={this.state.name}
                      onChange={this.handleSelect}
                    />
                    <img src={Upload} alt="" />
                    <span>Ներբեռնել</span>
                  </label>
                </div>
                <div className="text-center pt-6">
                  <button
                    className="btn primary"
                    onClick={this.handleSubmitannual}
                    type="button"
                    name="submit"
                    disabled={this.state.disabled}
                  >
                    Ուղարկել
                  </button>
                </div>
              </form>
            </div>
            
          )}
        </div>
      </div>
    );
  }
}

export default FinInput;
