import axios from "axios";
import { useState } from "react";

export const useForm = (initialForm, validationForm) => {

   const [form, setForm] = useState(initialForm);
   const [error, setError] = useState({ staus: false });
   const [showErrors, setShowErrors] = useState(false);
   const [loading, setLoading] = useState(false);
   const [responseApi, setResponseApi] = useState(null);
   // const [data, setData] = useState();

   const handleChange = (e) => {

      const target = e.target;
      const value = target.value;
      const name = target.name;

      setForm({
         ...form,
         [name]: value
      });
   };

   const handleBlur = (e) => {
      handleChange(e);
      setError(validationForm(form));
   }

   const handleSubmit = (e) => {

      e.preventDefault();
      handleBlur(e);

      setShowErrors(true);
      delete form[''];
      delete error[''];
      // error.estado, 
      console.log(Object.keys(error).length === 1 , error.estado, Object.keys(error).length === 1 && error.estado, error)

      if (Object.keys(error).length === 1 && error.estado) {

         setLoading(true);
         axios.post("https://pruebapautafacebook.col1.co/api/registro", form)
            .then(function (response) {
               console.log(response);
               setLoading(false);
               setResponseApi(true);
               resetForm(e.target.id);
            })
            .catch(function (error) {
               setLoading(false);
               setResponseApi(false);
               console.log(error);
            })
            .finally(() =>
               setTimeout(() => setResponseApi(null), 6000)
            );
      } else {
         console.log("Hay un elemento de la validacion que tiene un estado 'true'");
      }

   };

   const resetForm = (id) => {
      document.getElementById(id).reset();
      setForm(initialForm);
      setError({
         ...error,
         staus: false
      });
      setShowErrors(false);
   }

   return {
      form,
      error,
      showErrors,
      loading,
      responseApi,
      // data,
      handleChange,
      handleBlur,
      handleSubmit,
   }

}