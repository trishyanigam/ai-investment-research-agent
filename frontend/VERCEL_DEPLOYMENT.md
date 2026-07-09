# 🚀 Vercel Deployment Instructions - React Frontend

Follow these steps to deploy the React frontend to **Vercel**:

## 1. Prepare your GitHub Repository
Ensure that the latest changes (including `vite.config.js` optimizations and [api.js](file:///c:/Users/HP/OneDrive/Desktop/ai-investment-research-agent/frontend/src/utils/api.js) refactoring) are pushed to your GitHub repository.

---

## 2. Deploy to Vercel
1. Log in to the [Vercel Dashboard](https://vercel.com/).
2. Click **Add New...** and select **Project**.
3. Import your **ai-investment-research-agent** repository.
4. If you have a monorepo structure, specify the root or subdirectory:
   - Under **Framework Preset**, select **Vite**.
   - Under **Root Directory**, click **Edit** and choose `frontend`.

---

## 3. Configure Build and Development Settings
Ensure the build parameters are configured as follows:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## 4. Add Environment Variables
Under the **Environment Variables** section, add the following key-value pair:

| Key | Value | Description |
| :--- | :--- | :--- |
| `VITE_API_URL` | `https://your-backend-api.onrender.com/api` | The base URL of your deployed backend service. |

> ⚠️ **Development Note:** For local development environments, you can leave this blank or configure it as `http://localhost:5000/api` inside a local `.env` file.

---

## 5. Deploy & Verify
1. Click **Deploy**.
2. Once the build finishes, Vercel will generate a secure production URL (e.g., `https://ai-investment-research-agent.vercel.app`).
3. Open the link to verify the UI. Run a query to confirm it connects successfully to your backend API.
