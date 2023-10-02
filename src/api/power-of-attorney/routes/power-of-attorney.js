'use strict';

/**
 * power-of-attorney router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::power-of-attorney.power-of-attorney');
