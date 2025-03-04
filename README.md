# Deploying a React Task Tracker App on AWS EKS using Terraform & GitHub Actions
## 🚀 Project Overview
This project automates the deployment of a React-based Task Tracker application to an Amazon EKS cluster using Terraform for infrastructure provisioning and GitHub Actions for CI/CD. The application is containerized and stored in Amazon Elastic Container Registry (ECR) before being deployed to Kubernetes and exposed via an AWS LoadBalancer Service.

## 🛠️ Technologies Used
* Cloud: AWS (ECR, EKS, S3, IAM, Security Groups)
* Infrastructure as Code: Terraform
* Containerization & Orchestration: Docker, Kubernetes
* CI/CD: GitHub Actions
* Monitoring & Logging: AWS CloudWatch, kubectl logs

## 📌 Features
* Fully automated EKS cluster provisioning with Terraform
* ECR integration for storing and managing Docker images
* Kubernetes Deployment and Service YAML files for managing the application
* GitHub Actions CI/CD pipeline for automatic container builds and deployments
* LoadBalancer Service for external access
* Secure IAM roles and security groups for controlled access

## ⚙️ Setup & Deployment
### Prerequisites
Ensure you have the following installed:
* Terraform
* AWS CLI
* kubectl
* Docker
* GitHub CLI

### Deploy AWS Infrastructure
```
cd terraform
terraform init
terraform apply -auto-approve
```
After successful deployment, Terraform will output the EKS cluster name, ECR repository URL, and LoadBalancer Service URL.

### Configure kubectl
```
aws eks --region <your-region> update-kubeconfig --name <eks-cluster-name>
kubectl get nodes
```
Ensure that worker nodes are running.

### Build & Push Docker Image to ECR
```
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com

cd task-tracker
docker build -t task-tracker .
docker tag task-tracker-app:latest <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/task-tracker-app:latest
docker push <aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/task-tracker-app:latest
```
### Deploy Task Tracker App to Kubernetes
```
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```
### Set Up GitHub Actions CI/CD
* Ensure your GitHub repository has AWS credentials stored as GitHub secrets.
* Push code to GitHub, and the CI/CD pipeline will build & deploy automatically.

### Access the Application
```
kubectl get svc task-tracker-app
```
Retrieve the External LoadBalancer Service URL and open it in your browser.

## 📜 CI/CD Workflow (GitHub Actions)
1. On push to main, GitHub Actions triggers the workflow.
2. The workflow builds the Docker image and pushes it to Amazon ECR.
3. The Kubernetes deployment is updated with the new image.
4. The application is accessible via the LoadBalancer Service URL.


