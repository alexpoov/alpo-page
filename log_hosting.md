# Hosting

Multipl options from easiest to the most difficult:
* [github pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) - a free, as long as you're OK with storing the project openly in Github and don't mind  non-customizable domain, website hosting service. still, you'll be pretty much tied to what does github allow you to do.  
* a small web/email hosting. they're usually cheap and more than enough to have my idea here. a good example is [MythicBeasts](https://www.mythic-beasts.com/hosting)
* a dedicated server. this is my stop, because I already have one on [OVH](https://www.ovhcloud.com/en/) (*Ô Canada...*)

## Step by step setting of the server:

1. You buy it.
2. You install OS and log into the machine (docs are [here](https://docs.ovhcloud.com/en/guides/bare-metal-cloud/dedicated-servers/getting-started-with-dedicated-server-eco) but check your server type first)
3. install docker engine following https://docs.docker.com/engine/install/debian/
<!-- >>> YOU ARE HERE <<< -->
4. install immich and a docker files following https://docs.immich.app/install/docker-compose 
5. edit the file `docker-compose.yml` from https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml and `.env` to set up network with reverse nginx's proxy.
6. change nginx sites-available config to use nginx as reverse proxy. 
    * 2 subdomains: default `mysite.com` and `photos.mysite.com` with immich configuration. 
    * start with HTTP, verify DNS is working, then add HTTPS. 
```zsh
# personal site
server {
    listen 80 
    listen [::]:80 
    server_name www.myste.com  mysite.com; 
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2
    listen [::]:443 ssl http2 
    server_name www.myste.com  mysite.com; 

    # ssl conf (certbot)
    # ssl certificate
    # ssl_certificate_key
    # include
    # ssl_dhparam
    ### about chipers https://docs.tlsref.org/server-side-tls.html

    root /var/www/html/;
    index index.html index.htm index.nginx-debian.html;

    # --- STATIC FILES --- 
    location / {
        root /var/www/html/alpo/;
        try_files $uri $uri/ =404;
    }

    add_header X-Frame-Options SAMEORIGIN;
    add_header X-Content-Type-Options nosniff;
    # add_header Strict-Transport-Security "max-age=31536000" always; GPT, verify
}

# photoserver

server {
    listen 80;
    listen [::]:80;

    server_name www.photos.mysite.com photos.mysite.com;

    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name www.photos.mysite.com photos.mysite.com;

    # allow large file uploads
    client_max_body_size 20000M;

    # disable buffering uploads to prevent OOM on reverse proxy server and make uploads twice as fast (no pause)
    proxy_request_buffering off;

    # increase body buffer to avoid limiting upload speed
    client_body_buffer_size 1024k;

    # Set headers (where to take them?)
    proxy_set_header Host              $host; # immich_server
    proxy_set_header X-Real-IP         $remote_addr;
    proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # enable websockets: http://nginx.org/en/docs/http/websocket.html
    proxy_http_version 1.1;
    proxy_redirect     off;

    # set timeout
    proxy_read_timeout 600s;
    proxy_send_timeout 600s;
    send_timeout       600s;

    location / { # does not support being served on a sub-path such as location /immich {}. has to be served on the root path
        proxy_pass http://127.0.0.1:2283;        # correct docker container address
        proxy_set_header   Upgrade    $http_upgrade;
        proxy_set_header   Connection "upgrade";
    }

    # useful when using Let's Encrypt http-01 challenge
    # location = /.well-known/immich {
    #     proxy_pass http://<backend_url>:2283;
    # }
}
```
7. open ports 80 and 443 for nginx vua `usf` and modifying `/etc/ufw/after.rules` according to https://github.com/chaifeng/ufw-docker 
8. `sudo nginx -t && sudo systemctl reload nginx`