# JWT Security Best Practices

Storing JWT tokens in HTTP-only cookies is considered more secure than storing them in local storage because HTTP-only cookies are not accessible via JavaScript, which helps protect against XSS (Cross-Site Scripting) attacks. However, this approach requires some changes to both the client-side and server-side code to handle the authentication flow correctly.

## Changes to Implement HTTP-Only Cookies

1. **Backend Changes:**
    - Set the JWT token in an HTTP-only cookie upon successful authentication.
    - Ensure the cookie is sent with each request that requires authentication.

2. **Frontend Changes:**
    - No need to manually include the token in the headers; the browser will automatically send the cookie with each request.

## Backend Changes

Update your authentication endpoint to set the JWT token in an HTTP-only cookie.

```java
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        // Authenticate user and generate JWT token
        String token = authService.authenticateUser(loginRequest);

        // Set JWT token in HTTP-only cookie
        Cookie cookie = new Cookie("jwtToken", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(true); // Use secure cookies in production
        cookie.setPath("/");
        cookie.setMaxAge(7 * 24 * 60 * 60); // Set cookie expiry to 7 days

        response.addCookie(cookie);

        return ResponseEntity.ok("Login successful");
    }
}
```

## Frontend Changes

Since the JWT token is stored in an HTTP-only cookie, the browser will automatically send it with each request. You don't need to manually include the token in the headers.

Update the `saveCourse` function to remove the manual token inclusion:

```javascript
export async function saveCourse(formData) {
  const response = await fetch("http://localhost:8080/courses/save", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); // Return the saved course data
}
```

## Handling Logout

To handle logout, you need to clear the HTTP-only cookie on the backend:

```java
@PostMapping("/logout")
public ResponseEntity<?> logout(HttpServletResponse response) {
    // Clear the JWT token cookie
    Cookie cookie = new Cookie("jwtToken", null);
    cookie.setHttpOnly(true);
    cookie.setSecure(true); // Use secure cookies in production
    cookie.setPath("/");
    cookie.setMaxAge(0); // Expire the cookie immediately

    response.addCookie(cookie);

    return ResponseEntity.ok("Logout successful");
}
```

## Summary

By storing the JWT token in an HTTP-only cookie, you enhance the security of your application against XSS attacks. The changes involve setting the JWT token in an HTTP-only cookie on the backend and removing the need to manually include the token in the headers on the frontend.

This approach aligns with best practices for secure token storage and helps protect your application from common security vulnerabilities.