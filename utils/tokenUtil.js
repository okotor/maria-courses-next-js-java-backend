// utils/tokenUtil.js

export const getJwtToken = () => {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith('jwtToken='))
      ?.split('=')[1];
  };

  export const getRefreshToken = () => {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith('refreshToken='))
      ?.split('=')[1];
  };
  
  export const refreshAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return null;
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        console.error("Failed to refresh token:", response.statusText);
        return null;
      }
  
      const data = await response.json();
      if (data.success && data.jwtToken) {
        document.cookie = `jwtToken=${data.jwtToken}; Secure; SameSite=Strict`;
        return data.jwtToken;
      }
      return null;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return null;
    }
  };