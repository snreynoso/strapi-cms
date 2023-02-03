'use strict';

/**
 * film controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::film.film', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::film.film').findOne({
            where: { slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }
}));
