import { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export type StoreData = {
    contact_email: string;
    contact_facebook: string;
    contact_instagram: string;
    contact_phone: string;
    contact_twitter: string;
    seo_meta: string;
    seo_thumbnail: string;
    seo_title: string;
    site_favicon: string;
    site_logo: string;
    site_name: string;
}

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    name: string;
    // quote: { message: string; author: string };
    auth: Auth;
    locale: string;
    store_data: StoreData;
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type BreadcrumbItemType = BreadcrumbItem;
