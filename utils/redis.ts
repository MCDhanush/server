import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.REDIS_URL) {
  throw new Error("Missing REDIS_URL in environment variables");
}

export const redis = new Redis(process.env.REDIS_URL, {
  tls: {},
});

redis.on("connect", () => console.log("✅ Redis connected successfully"));
redis.on("error", (err) => console.error("❌ Redis error:", err));
