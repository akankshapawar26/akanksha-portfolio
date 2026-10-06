import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-root-media',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.method === 'POST' && req.url === '/api/upload-marquee') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const { filename, base64Data } = JSON.parse(body);
                  if (filename && base64Data) {
                    const buffer = Buffer.from(
                      base64Data.replace(/^data:image\/\w+;base64,/, ''),
                      'base64'
                    );
                    const cleanName = path.basename(filename);
                    const cwd = process.cwd();
                    fs.writeFileSync(path.resolve(cwd, 'public', cleanName), buffer);
                    fs.writeFileSync(path.resolve(cwd, cleanName), buffer);
                    const marqueeDir = path.resolve(cwd, 'public', 'marquee');
                    if (!fs.existsSync(marqueeDir)) {
                      fs.mkdirSync(marqueeDir, { recursive: true });
                    }
                    fs.writeFileSync(path.resolve(marqueeDir, cleanName), buffer);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ success: true, filename: cleanName }));
                  }
                } catch (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  return res.end(JSON.stringify({ error: String(err) }));
                }
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid payload' }));
              });
              return;
            }

            if (req.url) {
              const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
              if (cleanUrl.startsWith('/marquee')) {
                const cwd = process.cwd();
                const baseName = path.basename(cleanUrl);
                const altName = baseName.endsWith('.jpeg')
                  ? baseName.replace(/\.jpeg$/, '.jpg')
                  : baseName.endsWith('.jpg')
                  ? baseName.replace(/\.jpg$/, '.jpeg')
                  : baseName;

                const candidates = [
                  path.resolve(cwd, cleanUrl.replace(/^\//, '')),
                  path.resolve(cwd, baseName),
                  path.resolve(cwd, 'public', cleanUrl.replace(/^\//, '')),
                  path.resolve(cwd, 'public', baseName),
                  path.resolve(cwd, 'public', 'marquee', baseName),
                  path.resolve(cwd, altName),
                  path.resolve(cwd, 'public', altName),
                  path.resolve(cwd, 'public', 'marquee', altName),
                ];
                for (const filePath of candidates) {
                  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                    const ext = path.extname(filePath).toLowerCase();
                    const mimeTypes: Record<string, string> = {
                      '.jpg': 'image/jpeg',
                      '.jpeg': 'image/jpeg',
                      '.png': 'image/png',
                      '.gif': 'image/gif',
                      '.webp': 'image/webp',
                    };
                    res.setHeader('Content-Type', mimeTypes[ext] || 'image/jpeg');
                    return fs.createReadStream(filePath).pipe(res);
                  }
                }
              }
              next();
            } else {
              next();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
