# 🎨 **Frontend - Générateur de CV**  

Ce dépôt contient la partie **frontend** du projet **Générateur de CV**. L'application est construite avec **React** et utilise **Vite** comme outil de build.  

## 🚀 **Installation et Lancement**  

### **Prérequis :**  
- Node.js installé.  

### **Étapes d'installation :**  

1. Clonez le dépôt :  
   ```bash
   git clone https://github.com/username/cv-generator-frontend.git
   cd cv-generator-frontend
   ```

2. Installez les dépendances :  
   ```bash
   npm install
   ```

3. Démarrez l'application :  
   ```bash
   npm run dev
   ```

### 🌱 **Variables d'environnement**  

Créez un fichier `.env` à la racine du projet avec les clés suivantes :  

```env
VITE_API_BASE_URL="http://localhost:3000"  # URL de l'API backend
```

## 📂 **Structure du projet**  

La structure est la suivante :  

```plaintext
src/
├── assets/         
├── components/     
├── Context/        
├── Control/        
├── Enum/           
├── Navigation/     
├── pages/          
├── statutCV/       
├── utils/          
├── App.jsx         
└── main.jsx        
```

## ✨ **Scripts utiles**  

- `npm run dev` : Démarrer l'application en mode développement.  
- `npm run build` : Construire l'application pour la production.  
- `npm run preview` : Prévisualiser la build en local.  
