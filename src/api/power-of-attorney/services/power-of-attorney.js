'use strict';

/**
 * power-of-attorney service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::power-of-attorney.power-of-attorney');
