import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import bar from "./bottombar.png";
import ceo from "./ceo.jpg";
import bizz from "./urbanbizz.jpg";
import employee from "./employees.jpg";
import dad from "./dad.jpg";
import zoom from "./zoom.jpeg";
import congress from "./congress.jpg";

function App() {
  return (
    <div style={{ height: "100%", width: "100%", alignItems: "center" }}>
      <div
        style={{
          height: "96.3%",
          width: "100%",
          backgroundColor: "#131314",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <ExecutivesTile />
          <UrbanBizzTile />
          <Employees />
          <Parents />
          <ToolCompanies />
        </div>
      </div>
      <div
        style={{
          height: "3.7%",
          backgroundColor: "#1d1d1f",
          textAlign: "center",
        }}
      >
        <img src={bar} style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </div>
    </div>
  );
}

const ExecutivesTile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 250);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#242426",
          width: "30%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            fontSize: 30,
            fontFamily: "inherit",
            color: "inherit",
          }}
          onClick={handleOpen}
        >
          Executives
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "3px solid green",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <h2>Hi, I'm Chris Ennis Oliver.</h2>
              <p>
                I'm the founder and CEO of my company. I'm more accustomed to a
                traditional workplace and face pressure to be visible at our HQ.
                I still need to invest in remote work tools to retain a
                competitive talent pool, though. I am also concerned with
                engagement levels at remote meetings and promoting company
                culture. So, it's a tough balancing act.
              </p>
              <h3>
                All the best, <br />
                C.E.O.
              </h3>
            </div>
            <img src={ceo} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

const UrbanBizzTile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 250);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#242426",
          width: "30%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            fontSize: 30,
            fontFamily: "inherit",
            color: "inherit",
          }}
          onClick={handleOpen}
        >
          Urban Businesses
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "3px solid green",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <h2>Hi, I'm a restaurant.</h2>
              <p>
                More people working from home means fewer customers during the
                lunch rush. I depend on thousands commuting to this city center
                everyday and patronizing the establishments clustered here.
              </p>
              <h3>
                Ciao, <br />
                Caribou
              </h3>
            </div>
            <img src={bizz} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

const Employees = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 250);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#242426",
          width: "30%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            fontSize: 30,
            fontFamily: "inherit",
            color: "inherit",
          }}
          onClick={handleOpen}
        >
          Employees
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "3px solid green",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <h2>Hi, I'm a coalition of a diverse set of employees.</h2>
              <p>
                We've got a few concerns. Our entry level employees struggle to
                integrate into the company culture and community when they start
                their careers online. Our higher salary workers, though, can
                largely complete their work remotely, and they don't have the
                same need to learn the lay of the land by commuting to the
                office each day. Finally, our introverted employees appreciate
                the option to stay home. They struggle with anxiety and like to
                use WFH as a buffer for at times stressful communication.
              </p>
              <h3>
                All the best, <br />
                Our Employees
              </h3>
            </div>
            <img src={employee} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

const Parents = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 250);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#242426",
          width: "30%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            fontSize: 30,
            fontFamily: "inherit",
            color: "inherit",
          }}
          onClick={handleOpen}
        >
          {"Parents & Caregivers"}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "3px solid green",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <h2>Hi, I'm a parent.</h2>
              <p>
                I could seriously use a more flexible schedule, and remote work
                enables me to balance my full-time roles (my day job and my
                everyday job parenting) and my many other commitments as a
                working parent.
              </p>
              <h3>
                Love, <br />
                World's best dad
              </h3>
            </div>
            <img src={dad} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

const ToolCompanies = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 250);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#242426",
          width: "30%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            fontSize: 30,
            fontFamily: "inherit",
            color: "inherit",
          }}
          onClick={handleOpen}
        >
          {"WFH Enablers"}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "3px solid green",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <h2>Hi, I'm Zoom.</h2>
              <p>
                Like many tech companies, I'm confident that remote work is the
                future, and I've invested heavily in the technology that makes
                it all possible. Of course, I also have a big financial interest
                in accelerating the transition to remote work as the new norm.
              </p>
              <h3>
                Zooming away now, <br />
                Zoom
              </h3>
            </div>
            <img src={zoom} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

const Policymakers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 250);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#242426",
          width: "30%",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            fontSize: 30,
            fontFamily: "inherit",
            color: "inherit",
          }}
          onClick={handleOpen}
        >
          {"Policymakers"}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            border: "3px solid green",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              <h2>Hi, I'm Congress.</h2>
              <p>
                I'm concerned about cybersecurity and the risk that a total
                transition to remote work may pose to the security of our
                largest systems and companies. Also, I want to protect my
                constituents that are particularly vulnerable to this transition
                --those without equal access to tech and folks with
                disabilities.
              </p>
              <h3>
                Recently stormed, <br />
                Congress
              </h3>
            </div>
            <img src={congress} style={{ maxWidth: "50%", maxHeight: "50%" }} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default App;
