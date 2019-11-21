import React from "react";
import VideoRecorder from "react-video-recorder";
// javascript plugin used to create scrollbars on windows
import api from "../../services/api";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  UncontrolledAlert,
  Row,
  Col
} from "reactstrap";

// core components
import VanHackNavbar from "components/Navbars/VanHackNavbar";

class VerifyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recorded: false,
      score: -1,
      uploadedFile: "",
      isLoading: false
    };
  }
  componentDidMount() {
    document.body.classList.toggle("verify-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("verify-page");
  }
  handleRecordingComplete = e => {
    this.setState({ uploadedFile: e });
    this.setState({ recorded: true });
  };
  uploadFileRequest = async file => {
    const data = new FormData();

    data.append("file", file, "upload.webm");

    return api.post(`/file-upload`, data, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`
      },
      timeout: 30000
    });
  };
  handleNewVideo = e => {
    this.setState({ recorded: false });
  };
  actionHandler = () => {};
  submitButton = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await this.uploadFileRequest(this.state.uploadedFile);
      this.setState({ score: Math.round(res.data.result * 100) / 100 });
      this.setState({ recorded: false });
    } catch (err) {
      this.setState({ isLoading: false });
      this.setState({ recorded: false });
      this.setState({ score: -1 });
      alert("An error was found. Try again later.");
      console.error(err);
    }
    this.setState({ isLoading: false });
  };
  render() {
    return (
      <>
        <VanHackNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="verify-title text-left">Test your English</h1>
                  <h5 className="text-on-back">Beta</h5>
                  <p className="verify-description">
                    To test your level of english, you just need to record a
                    small video between 30 and 60 seconds. With this info, we
                    can do a pre-evaluation of your level so you will receive a
                    instant feedback before starting your verification. We are
                    Constantly Improving our app to give you the most accurate
                    results.
                  </p>
                  {this.state.score !== -1 && this.state.score > 65 && (
                    <UncontrolledAlert
                      className="alert-with-icon"
                      color="success"
                    >
                      <span
                        data-notify="icon"
                        className="tim-icons icon-bell-55"
                      />
                      <span>
                        <b>{this.state.score} of 100</b>
                        <br />
                        Well done!
                      </span>
                    </UncontrolledAlert>
                  )}
                  {this.state.score !== -1 && this.state.score <= 65 && (
                    <UncontrolledAlert
                      className="alert-with-icon"
                      color="warning"
                    >
                      <span
                        data-notify="icon"
                        className="tim-icons icon-bulb-63"
                      />
                      <span>
                        <b>Score: {this.state.score} of 100</b> <br />
                        Please try again, your score was too low...
                      </span>
                    </UncontrolledAlert>
                  )}
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      {this.state.isLoading && (
                        <div>Please wait, we are processing your file...</div>
                      )}
                    </CardHeader>
                    <CardBody>
                      <VideoRecorder
                        onTurnOnCamera={this.actionHandler.bind(this)}
                        onTurnOffCamera={this.actionHandler.bind(this)}
                        onStartRecording={this.handleNewVideo.bind(this)}
                        onStopRecording={this.actionHandler.bind(this)}
                        onRecordingComplete={this.handleRecordingComplete.bind(
                          this
                        )}
                        onOpenVideoInput={this.actionHandler.bind(this)}
                        onStopReplaying={this.actionHandler.bind(this)}
                        onError={this.actionHandler.bind(this)}
                        timeLimit={45000}
                      />
                      <div className="btn-wrapper">
                        {this.state.recorded && (
                          <Button color="primary" onClick={this.submitButton}>
                            Submit video
                          </Button>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default VerifyPage;
