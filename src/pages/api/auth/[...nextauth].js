import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from "next-auth/providers/twitter"

const options = {
    providers: [
        FacebookProvider({
          clientId: "777565144211400",
          clientSecret: "b25b284325a674258641e6678a0e68e6"
        }),
        TwitterProvider({
          clientId: "R0ZDWWFMd050Y1R5blFuRkVDTnQ6MTpjaQ",
          clientSecret: "piLD3tJmJyXX6KW9eYMeOSm8Ry7AVAzHstUpXGJCTRyv9kvkGT",
          version: '2.0',
          accessTokenUrl: 'https://api.twitter.com/oauth2/token',
          
      })
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
        return '/dashboard';
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