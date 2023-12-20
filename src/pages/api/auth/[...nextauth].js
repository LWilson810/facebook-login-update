import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
    providers: [
        FacebookProvider({
          clientId: "777565144211400",
          clientSecret: "b25b284325a674258641e6678a0e68e6"
        }),
    ],
    secret: "v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=", 
    callbacks: {
      async signIn(user, account, profile) {
        // Customize the signIn callback as needed
        console.log("------------------ Signin -----------------")
        console.log(user, account, profile)
        return true;
      },
  
      async redirect(url, baseUrl) {
        // Customize the redirect callback to specify the desired URL
        return '/';
      },

      async session(session, user) {
        console.log("=============== Session ==============")
        console.log(session)
        session.email = user.email;
        session.name = user.name;
        return session
      },
    },
      // Set the callback URL to match the redirect URI in the Facebook Developer portal
}

export default (req, res) => NextAuth(req, res, options)