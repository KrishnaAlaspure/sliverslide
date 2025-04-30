const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.verifyGoogleToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
    if (!token) {
        return res.status(401).json({ message: "Access Denied: No Token Provided" });
    }

    try {
        // Verify the token using Google's OAuth2 client
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of your app
        });

        const payload = ticket.getPayload(); // Extract user information from the token
        req.user = payload; // Attach user info to the request object

        req.session.user = req.user; // Store user info in session
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(403).json({ message: "Invalid or Expired Token" });
    }
};