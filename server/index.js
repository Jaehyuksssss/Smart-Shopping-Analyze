import express, { response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import axios from "axios";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.get("/health", (req, res) => {
  res.send("success");
});

app.post("/api", async (req, res) => {
  try {
    const response = await axios.post(
      process.env.NAVER_BASE_URL,
      {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        timeUnit: req.body.timeUnit,
        category: req.body.category,
        keyword: req.body.keyword,
        device: req.body.device,
        gender: req.body.gender,
        ages: req.body.ages,
      },
      {
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
          "Content-Type": "application/json",
        },
      }
    );
    return res.status(200).json(response.data);
  } catch (e) {
    console.error(e);
    return res.status(500).json(null);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`connect to ${process.env.PORT}`);
});
