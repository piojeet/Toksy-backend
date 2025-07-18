import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { acceptFriendRequest, getFriendRequest, getMyFriends, getOutgoingFriendReqs, getRecommendedUser, sendFriendRequest } from "../controllers/user.controller.js";

const router = express.Router();

// apply auth middleware to all routes
router.use(protectRoute);

router.get("/", getRecommendedUser);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequest);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;