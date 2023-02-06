import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Input, TextField } from "@mui/material";
import { useAppDispatch } from "@/store/store";
import { couponCode, sumTotalCost } from "@/store/features/cartSlice";

type Props = {};

function InputComp({}: Props) {
  // validation schema
  const couponSchema = Yup.object().shape({
    coupon: Yup.string()
    .oneOf(["COUPON50", "COUPON25", "COUPON10"], "Invalid coupon code"),
  });

  // react hooks
  const [value, setValue] = useState("");

  // styles

  const StyledInput = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    border: "1px solid #e9e9e9",
    borderRadius: 0,

    "& .MuiInputBase-input": {
      padding: theme.spacing(1),
    },
  }));

  // typescript

  type initialValues = {
    coupon: string;
  };

  const initialValues: initialValues = {
    coupon: "",
  };

  //   redux
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={couponSchema}
      onSubmit={(values, actions) => {
        // console.log(values);
        dispatch(couponCode(values.coupon));
      }}
    >
      {(props: FormikProps<any>) => (
        <Form
          style={{ position: "relative", borderRadius: 0, display: "flex" }}
        >
          <Field name="coupon">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => {
              return (
                <>
                  <FormControl fullWidth>
                    {/* <StyledInputBase
                      {...field}
                      placeholder="enter code here..."
                      error
                    /> */}

                    <StyledInput
                      {...field}
                      error={Boolean(meta.error && meta.touched)}
                    />
                    <FormHelperText>
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </FormHelperText>
                  </FormControl>
                </>
              );
            }}
          </Field>
          <Box>
            <Button
              type="submit"
              variant="outlined"
              sx={{ paddingX: "1.8rem" }}
            >
              Apply
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default InputComp;
