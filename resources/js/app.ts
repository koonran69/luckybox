import '@tabler/core/dist/js/tabler.min.js';
import 'vue-sonner/style.css';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { createI18n } from 'vue-i18n';
import { messages } from './lang';
import { Toaster } from 'vue-sonner'

const appName = import.meta.env.VITE_APP_NAME || 'App Ecommerce';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {

        const i18n = createI18n({
            legacy: false,
            locale: props.initialPage.props.locale,
            fallbackLocale: 'en',
            messages,
            missingWarn: false,
            fallbackWarn: false,
            missing: (locale, key) => key
        })

        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .component('Toaster', Toaster)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
