import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  userName: string;
  email: string;
  password: string;
};

const FormSubmission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{textAlign: "center"}}>Sign Up</h1>
        <div className="input-container">
          <label htmlFor="userName" className="label">
            UserName
          </label>
          <input
            className="input-field "
            type="text"
            id="userName"
            {...register("userName", {
              required: "UserName is required.",
              pattern: {
                value: /^[a-zA-Z0-9_-]{4,20}$/,
                message: "Invalid UserName",
              },
            })}
            style={{ borderColor: errors.userName ? "orange" : "#fff" }}
          />
          {errors.userName && (
            <p className="error">{errors.userName.message}</p>
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
            style={{ borderColor: errors.userName ? "orange" : "#fff" }}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            {...register("password", {
              required: "password is required.",
              minLength: {
                value: 8, message: "password must contain 8 characters"
              },
            })}
            style={{ borderColor: errors.userName ? "orange" : "#fff" }}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className="btn">
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};
export default FormSubmission;
