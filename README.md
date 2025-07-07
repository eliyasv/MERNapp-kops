# MERN Stack App on Kubernetes (Kops)

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application deployed on a Kubernetes cluster using Kops, with Docker images hosted on Docker Hub and exposed via a LoadBalancer service (no Ingress).

🧱 Stack
Frontend: React
Backend: Express + Node.js 
Database: MongoDB
Platform: Kubernetes (via Kops)
Container Registry: Docker Hub
CI/CD: GitHub Actions

---

## 🔧 Prerequisites

* AWS CLI + credentials configured
* Kops installed and cluster created
* Docker hub account for stoing images
* GitHub secrets configured in the github repo
* If you want Ingress Instead of load-balencer, make sure Ingress Controller installed (e.g., [NGINX Ingress]

---


## 🔐 Required GitHub Secrets
Set these secrets in your GitHub repository settings:

| Name                 | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| `DOCKERHUB_USERNAME` | Docker Hub username                                                 |
| `DOCKERHUB_TOKEN`    | Docker Hub access token
| `KUBE_CONFIG_DATA`   | Base64-encoded `~/.kube/config` for GitHub Actions                  |


---


## 📁 Project Structure

```
mernapp/
├── .github/workflows/  
│   └── deploy.yaml
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

## 🚀 CI/CD Pipeline (GitHub Actions)

Workflow:

*Builds frontend and backend Docker images

*Pushes them to Docker Hub

*Sets up kubeconfig using KUBE_CONFIG_DATA

*Deploys to the Kubernetes cluster using kubectl apply -k k8s/


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
