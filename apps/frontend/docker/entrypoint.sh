#!/bin/sh

function replace {
    sed -e "s#{{NGINX_BACKEND_HOST}}#${NGINX_BACKEND_HOST:-$DEFAULT_NGINX_BACKEND_HOST}#g" \
        $1 
}

echo "prepare environment..."
echo "$(replace /etc/nginx/conf.d/default.conf  )" > /etc/nginx/conf.d/default.conf
echo "done"
nginx -g "daemon off;"