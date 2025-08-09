# Vercel Deployment Configuration and Instructions for Patient Portal

## Repository and Branch
- GitHub Repository: (Replace with your repository URL)
- Branch to deploy: main

## Environment Variables
Create a `.env` file in the root of your project or set environment variables in Vercel dashboard with the following keys:

- `MONGODB_URI`: Your MongoDB connection string
- `PATIENT_FRONTEND_URL`: URL of the deployed Patient Portal (e.g., https://patient-researchrx.vercel.app)
- `RESEARCHER_FRONTEND_URL`: URL of the deployed Researcher Portal (e.g., https://researcher-researchrx.vercel.app)
- `PORT`: Port number for the server (usually 8000)

## Vercel Configuration

1. Login to [Vercel](https://vercel.com) and create a new project.
2. Import your GitHub repository.
3. Select the `main` branch for deployment.
4. Set the build command and output directory:
   - For Patient Portal (React Vite app):
     - Build Command: `npm run build`
     - Output Directory: `dist`
5. Add the environment variables in the Vercel project settings.
6. Deploy the project.

## Manual Deployment Steps

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/patient
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Build the project:
   ```
   npm run build
   ```
4. Deploy the `dist` folder to your hosting provider or use Vercel CLI:
   ```
   vercel --prod
   ```

## Notes

- Ensure your MongoDB URI is valid and accessible from the deployment environment.
- If you have backend APIs, deploy them separately and update the frontend environment variables accordingly.
- For continuous deployment, connect your GitHub repository to Vercel and enable automatic deployments on push to `main`.

---

If you need help with Researcher Portal or Server deployment, similar steps apply with their respective directories and configurations.
