'use strict';

/**
 * medical-report service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medical-report.medical-report');
