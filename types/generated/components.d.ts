import type { Schema, Attribute } from '@strapi/strapi';

export interface AnamnesisTerm extends Schema.Component {
  collectionName: 'components_anamnesis_terms';
  info: {
    displayName: 'Term';
    description: '';
  };
  attributes: {
    idTermOfResponsibility: Attribute.String;
    termOfResponsibilitySigned: Attribute.Boolean;
    idTermOfVeracity: Attribute.String;
    termOfVeracitySigned: Attribute.Boolean;
    linkTermOfResponsibility: Attribute.String;
    linkTermOfVeracity: Attribute.String;
  };
}

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

export interface UserAddress extends Schema.Component {
  collectionName: 'components_user_addresses';
  info: {
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    cep: Attribute.String;
    street: Attribute.String;
    number: Attribute.String;
    neighborhood: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    complement: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'anamnesis.term': AnamnesisTerm;
      'products.variants': ProductsVariants;
      'user.address': UserAddress;
    }
  }
}
