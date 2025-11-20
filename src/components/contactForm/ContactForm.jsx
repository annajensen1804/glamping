import { useForm } from 'react-hook-form';
import BtnFrontPage from '../btnFrontPage/BtnFrontPage';
import styles from './contactForm.module.css'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const ContactForm = () => {
  
  const schema = yup.object().shape({
    name: yup.string().required("Navn er påkrævet"),
    email: yup
    .string()
    .email("Ugyldig email")
    .required("Email er påkrævet"),

    subject: yup.string().required("Emne er påkrævet"),

    message: yup
      .string()
      .required("Besked er påkrævet")
      .min(10, "Besked skal være på mindst 10 tegn"),
  });

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: {errors, isSubmitting} } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/contact", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        }
      )
console.log(response)

if(!response.ok) { 
  throw new Error('Serverfejl')
} else {
  toast.success(
    <div>
      <h3>Hej {data.name}!</h3>
      <h3>Tak for din besked. <br /> Du hører fra os snarest.</h3>
      <BtnFrontPage 
        buttonText="Tilbage" 
        onClick={() => navigate(-1)}/>
    </div>,
    {
      position: 'top-center',
      autoClose: 5000,
      icon: false,
      theme: 'light',
      style: {
        backgroundColor: "#2A4F57", 
        color: "#fff", 
        textAlign: "center",
        padding: "30px"}
    }
  );
  
  reset();
}

    } catch (error) {
      console.log("Fejl:", error)
    }
  }

  return (
    <section className={styles.sectionText} onSubmit={handleSubmit(onSubmit)}>
      <form>
        <label>Navn</label>
        <input type="text" {...register("name")} />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}

        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}

        <label>Hvad drejer henvendelsen sig om?</label>
        <textarea type="text" {...register("subject")} />
        {errors.subject && (
          <span className={styles.error}>{errors.subject.message}</span>
        )}

        <label>Besked (Skriv dato'er, hvis det drejer sig om en booking)</label>
        <textarea
          name="message"
          className="message"
          cols="30"
          rows="10"
          {...register("message")}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}

        <BtnFrontPage buttonText={isSubmitting ? "Sender..." : "Indsend"} />
      </form>
    </section>
  );
};

export default ContactForm;
