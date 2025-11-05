import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  country: string;
  zip: number;
};

const FormSubmission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label htmlFor="firstName" className="label">
            FirstName
          </label>
          <input
            className="input-field"
            type="text"
            id="firstName"
            {...register("firstName", { required: "FirstName is required." })}
          />
          {errors.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className="label">
            LastName
          </label>
          <input
            className="input-field"
            type="text"
            id="lastName"
            {...register("lastName", { required: "lastName is required." })}
          />
          {errors.lastName && (
            <p className="error">{errors.lastName.message}</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            {...register("email", {
              required: "email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid Email",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="city" className="label">
            city
          </label>
          <input
            className="input-field"
            type="city"
            id="city"
            {...register("city", { required: "city is required." })}
          />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="state" className="label">
            State
          </label>
          <input
            className="input-field"
            type="state"
            id="state"
            {...register("state", { required: "state is required." })}
          />
          {errors.state && <p className="error">{errors.state.message}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="country" className="label">
            Country
          </label>
          <input
            className="input-field"
            type="country"
            id="country"
            {...register("country", { required: "country is required." })}
          />
          {errors.country && <p className="error">{errors.country.message}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="zip" className="label">
            Zip
          </label>
          <input
            className="input-field"
            type="zip"
            id="zip"
            {...register("zip", {
              required: "zip is required.",
            })}
          />
          {errors.zip && <p className="error ">{errors.zip.message}</p>}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormSubmission;
