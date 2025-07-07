# MERN Stack App on Kubernetes (Kops)

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application deployed on a Kubernetes cluster using Kops, with Docker images hosted on Docker Hub and exposed via a LoadBalancer service (no Ingress).

🧱 Stack
Frontend: React (port 3000)
Backend: Express + Node.js (port 5000)
Database: MongoDB (port 27017)
Platform: Kubernetes (via Kops)
Container Registry: Docker Hub
---

## 🔧 Prerequisites

* Kubernetes cluster set up via **Kops**
* Docker installed and logged in to Docker Hub
* If you want Ingress Instead of load-balencer, make sure Ingress Controller installed (e.g., [NGINX Ingress]

---

## 📁 Project Structure

```
mernapp/
├── backend/
│   ├── Dockerfile
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   └── src/
├── k8s/
│   ├── mongo.yaml
│   ├── backend.yaml
│   ├── frontend.yaml
│   └── kustomization.yaml
└── README.md
```
(Also you can setup a docker compose file to test locally)
---

## 🐳 Build & Push Docker Images

Replace `<your-dockerhub-username>` with your actual Docker Hub username.

```bash
# Build
cd backend
docker build -t <your-dockerhub-username>/mernapp-backend:latest .
cd ../frontend
docker build -t <your-dockerhub-username>/mernapp-frontend:latest .

# Push
docker push <your-dockerhub-username>/mernapp-backend:latest
docker push <your-dockerhub-username>/mernapp-frontend:latest
```

---

## 🧾 Kubernetes Manifests

### `mongo.yaml`

Defines a MongoDB deployment and ClusterIP service.

### `backend.yaml`

Defines the Node.js/Express backend. Connects to MongoDB via `mongodb://db:27017/mern`.

### `frontend.yaml`

Defines the React frontend. Uses a ClusterIP service.

### `kustomization.yaml`

Combines all manifests:

```yaml
resources:
  - mongo.yaml
  - backend.yaml
  - frontend.yaml
```

---

## 🚀 Deploy to Kubernetes

```bash
cd k8s/
kubectl apply -k .
```

---

## 🌐 Accessing the App

Once deployed, expose the frontend using a LoadBalancer. Run:

```bash
kubectl get svc frontend
```
Wait for the EXTERNAL-IP to appear. Access the app in your browser via: http://<EXTERNAL-IP>
---

## ✅ Cleanup

```bash
kubectl delete -k .
```

---
