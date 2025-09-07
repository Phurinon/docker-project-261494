FROM nginx:alpine

# ลบ config เดิม
RUN rm /etc/nginx/conf.d/default.conf

# Copy frontend files
COPY . /usr/share/nginx/html

# ใช้ nginx serve frontend
COPY nginx.conf /etc/nginx/conf.d
