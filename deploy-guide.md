## Guide de Déploiement Simple

1. Connexion au VPS :
```bash
ssh votre_utilisateur@votre_ip
```

2. Installation des dépendances :
```bash
sudo apt update
sudo apt install nginx nodejs npm -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

3. Structure des dossiers médias :
```bash
mkdir -p /var/www/nomade-studio
cd /var/www/nomade-studio
mkdir -p public/media/{photos,videos,shorts}
```

4. Configuration Nginx :
```bash
sudo nano /etc/nginx/sites-available/nomade-studio

# Copiez cette configuration :
server {
    listen 80;
    server_name votre_domaine.com;
    root /var/www/nomade-studio;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /media/ {
        alias /var/www/nomade-studio/public/media/;
        autoindex off;
    }
    
    # Augmenter la taille maximale des fichiers
    client_max_body_size 100M;
}

# Activez le site :
sudo ln -s /etc/nginx/sites-available/nomade-studio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

5. Pour ajouter du contenu :
- Photos : `/var/www/nomade-studio/public/media/photos/`
- Vidéos : `/var/www/nomade-studio/public/media/videos/`
- Shorts : `/var/www/nomade-studio/public/media/shorts/`

6. Commandes utiles pour gérer le contenu :
```bash
# Transférer des fichiers depuis votre ordinateur
scp photo.jpg votre_utilisateur@votre_ip:/var/www/nomade-studio/public/media/photos/

# Créer un dossier pour un nouveau projet
mkdir /var/www/nomade-studio/public/media/photos/projet-2024

# Vérifier l'espace disque
df -h
```