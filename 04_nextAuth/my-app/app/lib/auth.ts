/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          console.log("Received credentials:", credentials);
  
         
            console.log("User authenticated");
            return { id: "1", name: "Parth", email: "parth@example.com" };
          
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async jwt({ token, user }: any) {
        console.log("token before JWT callback:", token);
        console.log("user in JWT callback:", user);
  
        // Only add user data to token on first login
        if (user) {
          token.userId = user.id;
          token.userName = user.name;
          token.userEmail = user.email;
        }
  
        console.log("JWT callback token:", token);
        return token;
      },
      async session({ session, token }: any) {
        console.log("Session callback token:", token);
  
        // Add token data to the session object
        session.user = {
          id: token.userId,
          name: token.userName,
          email: token.userEmail,
        };
  
        console.log("Session callback session:", session);
        return session;
      },
    },
  }