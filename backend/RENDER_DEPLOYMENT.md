# 🚀 Render Deployment Instructions - Express Backend

Follow these steps to deploy the Express backend to **Render**:

## 1. Prepare your GitHub Repository
Ensure that the latest changes (including `package.json` updates and `server.js` CORS configurations) are pushed to your GitHub repository.

---

## 2. Set Up a New Web Service on Render
1. Log in to the [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub account and select your **ai-investment-research-agent** repository.

---

## 3. Configure the Web Service Settings
During the setup of the Web Service, configure the following parameters:

- **Name:** `ai-investment-research-backend` (or your preferred name)
- **Region:** Select the region closest to you or your target audience (e.g., `Oregon (US West)` or `Frankfurt (EU Central)`).
- **Branch:** `main` (or the branch you want to deploy)
- **Root Directory:** `backend` *(This tells Render to run all commands and build steps within the backend sub-folder)*
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Instance Type:** Select the **Free** tier (or paid if preferred).

---

## 4. Add Environment Variables
Click on the **Advanced** section or go to the **Environment** tab of your service, and add the following variables:

| Key | Value | Description |
| :--- | :--- | :--- |
| `PORT` | `5000` | Port for the Express server to listen on. |
| `NODE_ENV` | `production` | Switches the app to production logging and error handling. |
| `GEMINI_API_KEY` | `your_actual_gemini_api_key` | Google AI Studio Gemini API Key. |
| `NEWS_API_KEY` | `your_actual_news_api_key` | NewsAPI Credentials. |
| `FRONTEND_URL` | `https://your-frontend-deployment.vercel.app` | URL of your deployed React frontend (for CORS security). |

---

## 5. Trigger Deployment
1. Click **Create Web Service**.
2. Render will automatically pull the code, install the dependencies, and launch your server.
3. Once deployed, Render will provide you with a public URL (e.g., `https://ai-investment-research-backend.onrender.com`).
4. **Important:** Copy this URL and update the `VITE_API_URL` environment variable in your frontend project (e.g., Vercel) to point to this new backend URL.
