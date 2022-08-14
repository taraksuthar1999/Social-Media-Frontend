import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, FormikProvider, Form } from "formik";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import { actions } from "../../store/auth/actions";
import Loading from "../../utils/Loading";

const initialState = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required").label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Too short")
    .label("Password"),
});

const Login = (props) => {
  const [initFormData] = useState(initialState);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    props.login(formData);
    console.log("cookie", document.cookie);
    // navigate("welcome");
  };
  const formik = useFormik({
    initialValues: initFormData,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => onSubmit(values),
  });

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    formik;

  return props.auth.loading ? (
    <Loading />
  ) : (
    <Box width="60%" height="350px" ml="auto" mr="auto">
      <Box sx={{ minHeight: "50px", mb: 2 }}>
        {props.auth.error?.message ? (
          <Alert severity="error">{props.auth.error?.message}</Alert>
        ) : null}
      </Box>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Grid
            container
            height="100%"
            width="100%"
            ml="auto"
            mr="auto"
            justifyContent="center"
            display="block"
          >
            <Grid mb={5} item>
              <TextField
                fullWidth
                variant="standard"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
            </Grid>
            <Grid item mb={5}>
              <TextField
                fullWidth
                variant="standard"
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
            </Grid>
            <Grid item mb={5}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  backgroundColor: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <span>New to App?</span>&nbsp;
              <Link
                onClick={props.register}
                underline="none"
                sx={{ fontWeight: "bold", color: "turquoise" }}
              >
                SIGN UP
              </Link>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Box>
  );
};
const login = actions.login;
const resetError = actions.resetError;
const ConnectedLogin = connect((state) => state, { login, resetError })(Login);
export default ConnectedLogin;
