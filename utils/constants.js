// Backend API URL
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080"; // Fallback to localhost in dev

// Google OAuth Client ID
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "your-google-client-id";

// Session and timeout settings
export const SESSION_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
export const INACTIVITY_TIMEOUT = 20 * 60 * 1000; // 20 minutes (for inactivity logout, optional)

// Error messages
export const ERROR_MESSAGES = {
  loginFailed: "Přihlášení selhalo. Zkuste to znovu.",
  registerFailed: "Registrace selhala. Zkuste to znovu.",
  googleLoginFailed: "Přihlášení s Googlem selhalo.",
};

// Success messages
export const SUCCESS_MESSAGES = {
  registrationSuccess: "Úspěšná registrace! Můžete se nyní přihlásit.",
  googleLoginSuccess: "Přihlášení s Googlem proběhlo úspěšně!",
};