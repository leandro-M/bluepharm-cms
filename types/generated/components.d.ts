import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsVariants extends Schema.Component {
  collectionName: 'components_products_variants';
  info: {
    displayName: 'variants';
    icon: 'information';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.String;
    tag: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.variants': ProductsVariants;
    }
  }
}
