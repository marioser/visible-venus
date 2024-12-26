// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

import markdoc from '@astrojs/markdoc';

import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Documentaciones',
        logo:{
            src:'./src/assets/logo.png',
            replacesTitle: true
        },
        customCss: [
            // Ruta a tus estilos base de Tailwind:
            './src/tailwind.css',
            '@fontsource/inter/400.css',
            '@fontsource/inter/600.css',
          ],
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        defaultLocale:'es',
        locales:{
            root:{
                label:'Spanish',
                lang:'es'
            }
        },
        plugins: [
            // Generate the OpenAPI documentation pages.
            starlightOpenAPI([
              {
               base: 'api',
               label: 'My API',
               schema: './schemas/api-schema.yaml',
              },
            ]),
          ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
                    // Add the generated sidebar group to the sidebar.
        ...openAPISidebarGroups,
            {
                label: 'Alarmas',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'alarmas/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        }), tailwind({
            applyBaseStyles: false,
        }), markdoc()],
});