import React, { useContext } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { StoreContext } from "@/config/store";
import { firestore } from "@/config/firebase";
import { useNotify } from "@/utils/hooks";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gap: theme.spacing(2) + "px",
  },
}));

const Form = ({ cart }) => {
  const classes = useStyles();
  const notify = useNotify();
  const { onOpenPayment, onCloseCart, onCloseShipping } = useContext(StoreContext);

  const {
    control,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: cart?.name || "",
      email: cart?.email || "",
      phone: cart?.phone || "",
      address: cart?.address || "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const orderRef = firestore.doc(`/orders/${cart.id}`);

    try {
      await orderRef.update(data);
      notify.success("Shipping info added.");
      onCloseCart();
      onCloseShipping();
      onOpenPayment();
    } catch (e) {
      notify.error(e?.message || "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
      <Controller
        as={TextField}
        control={control}
        name="name"
        label="Name"
        type="text"
        fullWidth
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name?.message}
        size="small"
        placeholder="Your name"
      />
      <Controller
        as={TextField}
        control={control}
        name="email"
        label="Email"
        type="email"
        fullWidth
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        size="small"
        placeholder="Your email"
      />
      <Controller
        as={TextField}
        control={control}
        name="phone"
        label="Phone Number"
        type="tel"
        fullWidth
        variant="outlined"
        error={!!errors.phone}
        helperText={errors.phone?.message}
        size="small"
        placeholder="Your Phone"
      />
      <Controller
        as={TextField}
        control={control}
        name="address"
        label="Address"
        type="text"
        fullWidth
        variant="outlined"
        error={!!errors.address}
        helperText={errors.address?.message}
        size="small"
        placeholder="Your address"
        multiline
        rows={3}
        rowsMax={5}
      />
      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
        ADD SHIPPING INFO
      </Button>
    </form>
  );
};

export default Form;
