'use strict';

/**
 * medical-appointment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medical-appointment.medical-appointment');
