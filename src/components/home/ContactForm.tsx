import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormInterfaceInputs } from "../../types/ContactForm";
import { EMAIL_REGEX } from "../../utils/constants";

interface ContactFormInterface {
  submit: (inputs: ContactFormInterfaceInputs) => void;
}

const ContactForm = ({ submit }: ContactFormInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInterfaceInputs>();

  const onSubmit: SubmitHandler<ContactFormInterfaceInputs> = (data) => {
    submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="contact-from">
      <div className="from-element-raw">
        <div>
          <label htmlFor="contact-name">NAME</label>
          <input
            id="contact-name"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="form-error">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="contact-email">EMAIL</label>
          <input
            id="contact-email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="from-element-raw">
        <div>
          <label htmlFor="contact-message">MESSAGE</label>
          <textarea
            id="contact-message"
            {...register("message", { required: "This field is required" })}
          />
          {errors.message && (
            <span className="form-error">{errors.message.message}</span>
          )}
        </div>
      </div>

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
