import axios from "axios";

export const handleLoginError = (error: any) => {
  // Log the error to understand what went wrong
  console.log(error.response?.data);

  // Provide an appropriate error message depending on the error type
  if (axios.isAxiosError(error) && error.response) {
    return {
      errors: {
        formError: [error.response?.data.message || "Unknown error occurred"],
      },
    };
  }

  return {
    errors: {
      formError: [error instanceof Error ? error.message : "Unknown error"],
    },
  };
};
