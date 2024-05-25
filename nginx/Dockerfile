# Use an official Nginx image
FROM nginx:alpine

# Remove the default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy the nginx configuration file and SSL certificates
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./ssl/nginx-selfsigned.crt /etc/ssl/certs/
COPY ./ssl/nginx-selfsigned.key /etc/ssl/private/

# Copy the built app to the server
COPY dist/ /usr/share/nginx/html

# Expose port 443 for SSL
EXPOSE 443

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
