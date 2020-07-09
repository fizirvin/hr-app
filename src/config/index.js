const url_image = 'https://hr-app-server.irvinfiz.now.sh/image-upload';
const opts_image = {
    method: "POST"
};

const url = 'https://hr-app-server.irvinfiz.now.sh/graph'
const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" }
}; 

export { url_image, opts_image, url, opts }