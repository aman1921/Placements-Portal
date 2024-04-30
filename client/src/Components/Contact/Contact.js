import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

// react router
import { useParams } from "react-router-dom";

// MUI Components
import { Stack, Divider, Typography, Alert } from "@mui/material";

// components
import ContactNav from "./ContactNav";
import ContactForm from "./ContactForm";
import ContactQueries from "./ContactQueries";

const Contact = () => {
  const params = useParams();
  const [user] = useContext(UserContext);

  return (
    <>
      {user ? (
        <Stack
          spacing={2}
          divider={<Divider flexItem orientation="horizontal" />}
          sx={{ minHeight: "calc(100vh - 64px)", width: "100%", paddingTop: "10px" }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            color="text.secondary"
            sx={{ fontFamily: "Nunito" }}
          >
            Contact Us
          </Typography>
          <Stack
            direction="row"
            divider={<Divider flexItem orientation="vertical" />}
            spacing={1}
            sx={{ width: "100%", flexGrow: 1 }}
          >
            <ContactNav />
            {params.panel === "addQuery" ? <ContactForm /> : <ContactQueries />}
          </Stack>
        </Stack>
      ) : (
        <Alert severity="error">Unauthorized Access. Please Login!</Alert>
      )}
    </>
  );
};

export default Contact;
