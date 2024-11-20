## Guide d'Intégration Détaillé - Nomade Studio

### 1. Configuration Initiale

#### Logo et Identité
1. Logo:
   ```bash
   # Placer votre logo ici
   /public/logo.png
   ```
   - Format recommandé: PNG avec transparence
   - Dimensions: 180px de hauteur minimum
   - Poids maximum: 100KB

2. Favicon:
   ```bash
   # Placer votre favicon ici
   /public/favicon.ico
   ```
   - Créer différentes tailles (16x16, 32x32, 48x48)
   - Format: ICO ou PNG

3. Couleurs de marque:
   Fichier: `/src/tailwind.config.js`
   ```js
   // Modifier ces valeurs selon votre charte graphique
   colors: {
     primary: {
       DEFAULT: 'rgb(1, 1, 0)',
       dark: 'rgb(3, 2, 1)',
       light: 'rgb(40, 40, 35)',
     },
     brown: {
       DEFAULT: 'rgb(70, 51, 22)',
       dark: 'rgb(34, 25, 11)',
       light: 'rgb(120, 100, 70)',
     }
   }
   ```

### 2. Section Hero

1. Image d'arrière-plan:
   ```bash
   # Placer l'image ici
   /public/media/hero/hero-background.jpg
   ```
   - Dimensions minimales: 1920x1080px
   - Format: JPG optimisé
   - Poids maximum: 300KB

2. Modifier le composant Hero:
   Fichier: `/src/components/Hero.tsx`
   ```tsx
   // Modifier la ligne suivante
   <img
     src="/media/hero/hero-background.jpg"
     alt="Hero background"
     className="w-full h-full object-cover brightness-25 grayscale"
   />
   ```

### 3. Section Portfolio

#### Structure des Dossiers pour le Portfolio
```bash
/public/media/
├── photos/
│   ├── corporate/
│   │   ├── event-1.jpg
│   │   ├── event-2.jpg
│   │   └── ...
│   ├── portraits/
│   │   ├── portrait-1.jpg
│   │   └── ...
│   └── ...
├── videos/
│   ├── corporate/
│   │   ├── video-1.mp4
│   │   └── ...
│   └── ...
└── thumbnails/
    ├── photos/
    │   └── ...
    └── videos/
        └── ...
```

#### Instructions par Section

1. Photos Corporatives:
   ```bash
   # Créer le dossier
   mkdir -p /public/media/photos/corporate
   
   # Format des images
   - Dimensions: 1920x1080px minimum
   - Format: JPG
   - Poids: Max 500KB par image
   ```

   Fichier: `/src/components/Portfolio.tsx`
   ```tsx
   // Modifier dans portfolioItems
   {
     category: 'photo',
     type: 'image',
     image: '/media/photos/corporate/event-1.jpg',
     // ...
   }
   ```

2. Vidéos:
   ```bash
   # Pour chaque vidéo
   1. Héberger sur Vimeo Pro
   2. Créer une thumbnail:
   mkdir -p /public/media/thumbnails/videos/corporate
   ```

   Fichier: `/src/components/Portfolio.tsx`
   ```tsx
   // Modifier pour chaque vidéo
   {
     category: 'video',
     type: 'video',
     image: '/media/thumbnails/videos/corporate/video-1.jpg',
     video: 'https://vimeo.com/votre-video-id',
     // ...
   }
   ```

### 4. Section Témoignages

1. Photos des Clients:
   ```bash
   # Créer le dossier
   mkdir -p /public/media/testimonials
   ```

   Fichier: `/src/components/Testimonials.tsx`
   ```tsx
   // Modifier pour chaque témoignage
   {
     name: 'Nom du Client',
     image: '/media/testimonials/client-1.jpg',
     // ...
   }
   ```

### 5. Déploiement sur VPS

1. Configuration Nginx:
   ```bash
   # Créer le fichier de configuration
   sudo nano /etc/nginx/sites-available/nomade-studio
   ```

   Contenu:
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;
       root /var/www/nomade-studio;

       # Configuration pour les médias
       location /media/ {
           alias /var/www/nomade-studio/public/media/;
           expires 7d;
           add_header Cache-Control "public, no-transform";
       }

       # Configuration pour l'application
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

2. Structure des dossiers sur le VPS:
   ```bash
   # Créer la structure
   mkdir -p /var/www/nomade-studio/public/media/{photos,videos,thumbnails}
   
   # Définir les permissions
   sudo chown -R www-data:www-data /var/www/nomade-studio
   sudo chmod -R 755 /var/www/nomade-studio
   ```

### 6. Optimisation des Médias

1. Images:
   ```bash
   # Installation des outils
   sudo apt-get install imagemagick
   
   # Redimensionnement en batch
   mogrify -resize 1920x1080\> *.jpg
   
   # Compression
   mogrify -quality 85 *.jpg
   ```

2. Vidéos:
   ```bash
   # Conversion en format web
   ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
   ```

### 7. Maintenance

1. Sauvegardes:
   ```bash
   # Script de sauvegarde
   #!/bin/bash
   BACKUP_DIR="/backup/nomade-studio"
   DATE=$(date +%Y%m%d)
   
   # Sauvegarde des médias
   tar -czf $BACKUP_DIR/media_$DATE.tar.gz /var/www/nomade-studio/public/media
   
   # Sauvegarde de la base de données si applicable
   # ...
   ```

2. Mise à jour du contenu:
   ```bash
   # Script d'upload
   #!/bin/bash
   rsync -avz --progress /chemin/local/media/ user@vps:/var/www/nomade-studio/public/media/
   ```

### Notes Importantes

- Toujours optimiser les images avant l'upload
- Maintenir une nomenclature cohérente pour les fichiers
- Faire des sauvegardes avant chaque modification majeure
- Tester sur un environnement de staging d'abord
- Vérifier les permissions des fichiers après chaque upload